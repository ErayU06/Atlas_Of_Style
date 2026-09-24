import { z } from "zod";
import * as cookie from "cookie";
import crypto from "node:crypto";
import { TRPCError } from "@trpc/server";
import { Session } from "@contracts/constants";
import { getSessionCookieOptions } from "./lib/cookies";
import { createRouter, publicQuery } from "./middleware";
import { signSessionToken } from "./kimi/session";
import { env } from "./lib/env";
import { findUserByUnionId, upsertUser } from "./queries/users";
import type { TrpcContext } from "./context";

const usernameSchema = z
  .string()
  .min(3)
  .max(24)
  .regex(/^[a-z0-9_]+$/)
  .transform((s) => s.toLowerCase());

const localId = (username: string) => `local:${username}`;

const emailSchema = z.string().trim().min(3).max(320).email();
const genderSchema = z.enum(["male", "female"]);

function hashPassword(password: string, salt: string) {
  return crypto.scryptSync(password, salt, 64).toString("hex");
}

async function issueSession(
  ctx: TrpcContext,
  unionId: string,
): Promise<string> {
  const token = await signSessionToken({ unionId, clientId: env.appId });
  const opts = getSessionCookieOptions(ctx.req.headers);
  ctx.resHeaders.append(
    "set-cookie",
    cookie.serialize(Session.cookieName, token, {
      httpOnly: opts.httpOnly,
      path: opts.path,
      sameSite: opts.sameSite?.toLowerCase() as "lax" | "none",
      secure: opts.secure,
      maxAge: Session.maxAgeMs / 1000,
    }),
  );
  // Web ignores this — it relies on the cookie above. The Capacitor native
  // app has no reliable cross-origin cookie jar, so it captures this token
  // and sends it back as a Bearer header (see api/kimi/auth.ts).
  return token;
}

export const localAuthRouter = createRouter({
  signup: publicQuery
    .input(
      z.object({
        username: usernameSchema,
        password: z.string().min(6).max(72),
        name: z.string().min(1).max(60).optional(),
        email: emailSchema,
        // Optional: App Store Review Guideline 5.1.1(ii) bars requiring
        // personal data the core experience doesn't need, and a style atlas
        // works the same whether or not this is answered. Left unset the
        // column stays NULL — it is already nullable in db/schema.ts, so
        // making it optional needs no migration.
        gender: genderSchema.optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const unionId = localId(input.username);
      const existing = await findUserByUnionId(unionId);
      if (existing) {
        throw new TRPCError({ code: "CONFLICT", message: "username_taken" });
      }
      const salt = crypto.randomBytes(16).toString("hex");
      await upsertUser({
        unionId,
        name: input.name || input.username,
        email: input.email,
        gender: input.gender,
        passwordHash: `${salt}:${hashPassword(input.password, salt)}`,
        lastSignInAt: new Date(),
      });
      const token = await issueSession(ctx, unionId);
      return { success: true, token };
    }),

  login: publicQuery
    .input(
      z.object({
        username: usernameSchema,
        password: z.string().min(1).max(72),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const unionId = localId(input.username);
      const user = await findUserByUnionId(unionId);
      const invalid = () =>
        new TRPCError({ code: "UNAUTHORIZED", message: "invalid_credentials" });
      if (!user || !user.passwordHash) throw invalid();
      const [salt, stored] = user.passwordHash.split(":");
      // A passwordHash that didn't come from signup — a value typed straight
      // into the column by hand, say — has no ":" separator, so `stored` is
      // undefined and the Buffer.from() below throws. That surfaced as a 500
      // and a generic "something went wrong" in the app instead of a clean
      // rejection, which is a confusing way to discover the column holds
      // plaintext. Treat a malformed hash as what it is: not a credential.
      if (!salt || !stored) throw invalid();
      const candidate = hashPassword(input.password, salt);
      const a = Buffer.from(stored, "hex");
      const b = Buffer.from(candidate, "hex");
      if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) throw invalid();
      await upsertUser({ unionId, lastSignInAt: new Date() });
      const token = await issueSession(ctx, unionId);
      return { success: true, token };
    }),
});
