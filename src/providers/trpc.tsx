import { createTRPCReact } from "@trpc/react-query";
import { httpBatchLink } from "@trpc/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Capacitor } from "@capacitor/core";
import superjson from "superjson";
import { getNativeToken } from "@/lib/nativeAuth";
import type { AppRouter } from "../../api/router";
import type { ReactNode } from "react";

export const trpc = createTRPCReact<AppRouter>();

/**
 * Whatever VITE_API_BASE_URL held when the bundle was built. Vite inlines it
 * at build time, so this is a literal in the shipped JavaScript: a wrong value
 * here cannot be fixed on the device, only by rebuilding.
 */
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as
  | string
  | undefined;

// Bundled into the native shell, the app has no same-origin backend to call
// relatively — it needs the deployed backend's absolute HTTPS URL instead.
// Web (dev and prod) keeps using the relative path, unchanged.
function getTrpcUrl() {
  if (Capacitor.isNativePlatform()) {
    if (!API_BASE_URL) return "/api/trpc";
    return `${API_BASE_URL.replace(/\/$/, "")}/api/trpc`;
  }
  return "/api/trpc";
}

/** The absolute (native) or relative (web) endpoint every call goes to. */
export const TRPC_URL = getTrpcUrl();

// Printed once on startup, before anything can fail. Inside a native shell
// there is no address bar and no network tab, so without this there is no way
// to tell a bundle that was built with the right backend URL from one that was
// not — and the two fail in ways that look identical from the UI.
{
  const native = Capacitor.isNativePlatform();
  console.log("[trpc] endpoint", {
    platform: Capacitor.getPlatform(),
    isNative: native,
    // Logged raw, unparsed: a value pasted with surrounding markdown or quotes
    // is invisible once it has been concatenated into a URL string.
    VITE_API_BASE_URL: API_BASE_URL ?? "<not set at build time>",
    resolvedUrl: TRPC_URL,
  });
  if (native && !API_BASE_URL) {
    console.error(
      "[trpc] VITE_API_BASE_URL was empty when this bundle was built, so calls " +
        "resolve to https://localhost/api/trpc — the local bundle, which serves " +
        "no API. Set it in .env and run `npm run build && npx cap sync ios`.",
    );
  } else if (native && !/^https:\/\//.test(API_BASE_URL ?? "")) {
    console.error(
      `[trpc] VITE_API_BASE_URL is not a plain https:// URL: ${API_BASE_URL}. ` +
        "iOS App Transport Security refuses anything else, and the request " +
        "fails before it leaves the device.",
    );
  }
}

const queryClient = new QueryClient();
const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: getTrpcUrl(),
      transformer: superjson,
      async headers() {
        if (!Capacitor.isNativePlatform()) return {};
        const token = await getNativeToken();
        return token ? { Authorization: `Bearer ${token}` } : {};
      },
      async fetch(input, init) {
        const url = typeof input === "string" ? input : (input as Request).url;
        try {
          const res = await globalThis.fetch(input, {
            ...(init ?? {}),
            credentials: "include",
          });
          if (!res.ok) {
            // Read from a clone: the caller still needs the original stream.
            const body = await res
              .clone()
              .text()
              .catch(() => "<body unreadable>");
            console.error(
              `[trpc] ${init?.method ?? "GET"} ${url} -> ${res.status} ${res.statusText}`,
              body.slice(0, 1000),
            );
          }
          return res;
        } catch (err) {
          // A throw here never reached the server: DNS, TLS, App Transport
          // Security, or a CORS preflight the browser refused. The tRPC error
          // that follows carries no HTTP status, so without this line the
          // cause is invisible from inside the app.
          console.error(`[trpc] ${init?.method ?? "GET"} ${url} -> request failed`, err);
          throw err;
        }
      },
    }),
  ],
});

export function TRPCProvider({ children }: { children: ReactNode }) {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  );
}
