import * as cookie from "cookie";
import { Session } from "@contracts/constants";
import { getSessionCookieOptions } from "./lib/cookies";
import { createRouter, authedQuery, publicQuery } from "./middleware";
import { deleteUserCascade } from "./queries/users";
import type { TrpcContext } from "./context";

function clearSessionCookie(ctx: Pick<TrpcContext, "req" | "resHeaders">) {
  const opts = getSessionCookieOptions(ctx.req.headers);
  ctx.resHeaders.append(
    "set-cookie",
    cookie.serialize(Session.cookieName, "", {
      httpOnly: opts.httpOnly,
      path: opts.path,
      sameSite: opts.sameSite?.toLowerCase() as "lax" | "none",
      secure: opts.secure,
      maxAge: 0,
    }),
  );
}

export const authRouter = createRouter({
  // Public, and null rather than a throw when nobody is signed in. Asking
  // "who am I?" as a guest is the app's normal first call on every launch —
  // it is not an error, and answering it with a 401 put a red UNAUTHORIZED in
  // the console of every healthy anonymous session, which is a costly thing
  // to have to rule out while debugging something else. Everything that acts
  // on an account below stays behind authedQuery.
  me: publicQuery.query(({ ctx }) => ctx.user ?? null),
  logout: authedQuery.mutation(async ({ ctx }) => {
    clearSessionCookie(ctx);
    return { success: true };
  }),
  // Google Play's User Data policy requires an in-app way to delete both
  // the account and the data tied to it — see deleteUserCascade.
  deleteAccount: authedQuery.mutation(async ({ ctx }) => {
    await deleteUserCascade(ctx.user.id);
    clearSessionCookie(ctx);
    return { success: true };
  }),
});
