import { authRouter } from "./auth-router";
import { localAuthRouter } from "./localAuthRouter";
import { travelerRouter } from "./travelerRouter";
import { createRouter, publicQuery } from "./middleware";

export const appRouter = createRouter({
  ping: publicQuery.query(() => ({ ok: true, ts: Date.now() })),
  auth: authRouter,
  localAuth: localAuthRouter,
  traveler: travelerRouter,
});

export type AppRouter = typeof appRouter;
