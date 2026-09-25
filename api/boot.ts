import { Hono } from "hono";
import { bodyLimit } from "hono/body-limit";
import type { HttpBindings } from "@hono/node-server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "./router";
import { createContext } from "./context";
import { env } from "./lib/env";
import { createOAuthCallbackHandler } from "./kimi/auth";
import { Paths } from "@contracts/constants";

const app = new Hono<{ Bindings: HttpBindings }>();

// The Capacitor Android app bundles the frontend locally and calls this API
// cross-origin, so its origin needs an explicit CORS allowlist. Same-origin
// web requests (dev + prod) are unaffected — browsers don't apply CORS to those.
//
// Written by hand instead of using hono/cors: that middleware drops
// Access-Control-Allow-Credentials from its OPTIONS preflight response
// (present only on the actual GET/POST response), which makes browsers
// silently refuse to send any credentialed non-simple request (e.g. our
// POST + application/json signup/login calls) — confirmed via curl against
// both response types. Simple GET requests worked, POST never even hit the
// server, matching that exact bug.
//
// CORS headers are set AFTER `await next()`, not before: the trpc route
// below returns its own Response object from fetchRequestHandler(), which
// replaces whatever headers this middleware set beforehand. Setting them
// after next() mutates that already-built Response's headers instead,
// which actually sticks — confirmed via curl (Origin header was silently
// missing from the real response until this was fixed).
const nativeAppOrigins = new Set([
  // What the shells actually send: both platforms are configured with a
  // scheme of `https` in capacitor.config.ts, so their origin is
  // `https://localhost`. The other two are Capacitor's defaults, kept so a
  // build that drops those scheme overrides still reaches the API.
  "https://localhost",
  "capacitor://localhost", // iOS default when iosScheme is unset
  "http://localhost", // Android default when androidScheme is unset
  ...(process.env.CAPACITOR_ORIGINS ?? "")
    .split(",")
    .map((o) => o.trim())
    .filter(Boolean),
]);
app.use("/api/*", async (c, next) => {
  const origin = c.req.header("origin");
  const allowedOrigin = origin && nativeAppOrigins.has(origin) ? origin : undefined;

  if (c.req.method === "OPTIONS") {
    if (allowedOrigin) {
      c.header("Access-Control-Allow-Origin", allowedOrigin);
      c.header("Access-Control-Allow-Credentials", "true");
      c.header("Vary", "Origin");
    }
    c.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
    c.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    return c.body(null, 204);
  }

  await next();

  if (allowedOrigin) {
    c.header("Access-Control-Allow-Origin", allowedOrigin);
    c.header("Access-Control-Allow-Credentials", "true");
    c.header("Vary", "Origin");
  }
});

app.use(bodyLimit({ maxSize: 50 * 1024 * 1024 }));
app.get(Paths.oauthCallback, createOAuthCallbackHandler());
app.use("/api/trpc/*", async (c) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: c.req.raw,
    router: appRouter,
    createContext,
    // tRPC already turns an unhandled throw into INTERNAL_SERVER_ERROR, so
    // the client gets a 500 either way. What was missing is any record of
    // *why*: a constraint violation deep in a query surfaced to the app as a
    // generic "something went wrong" and left nothing in the server log to
    // work from. `cause` carries the original error — for a pg rejection that
    // means the code (23502, 23505, ...), the column and the failing row.
    onError({ error, path, type }) {
      if (error.code !== "INTERNAL_SERVER_ERROR") return;
      const cause = error.cause as
        | (Error & { code?: string; detail?: string; constraint?: string })
        | undefined;
      // Deliberately without `input`: it carries plaintext passwords on the
      // signup and login procedures.
      console.error(`[trpc] ${type} ${path ?? "<no path>"} failed`, {
        message: error.message,
        causeName: cause?.name,
        causeCode: cause?.code,
        causeDetail: cause?.detail,
        causeConstraint: cause?.constraint,
        stack: cause?.stack ?? error.stack,
      });
    },
  });
});
app.all("/api/*", (c) => c.json({ error: "Not Found" }, 404));

export default app;

if (env.isProduction) {
  const { serve } = await import("@hono/node-server");
  const { serveStaticFiles } = await import("./lib/vite");
  serveStaticFiles(app);

  const port = parseInt(process.env.PORT || "3000");
  serve({ fetch: app.fetch, port }, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}
