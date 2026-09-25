import { authRouter } from "./auth-router";
import { localAuthRouter } from "./localAuthRouter";
import { travelerRouter } from "./travelerRouter";
import { createRouter, publicQuery } from "./middleware";
import { checkSchema } from "./queries/health";

export const appRouter = createRouter({
  // `commit` answers the question that keeps coming up while debugging a
  // deployed backend: is this even running the code I just pushed? Render
  // populates RENDER_GIT_COMMIT for every build, so one curl settles it
  // instead of comparing symptoms against a dashboard.
  ping: publicQuery.query(() => ({
    ok: true,
    ts: Date.now(),
    commit: process.env.RENDER_GIT_COMMIT?.slice(0, 7) ?? "unknown",
  })),

  // Answers, from outside and without credentials, the two questions that a
  // 500 on sign-in cannot distinguish between: is this the code that was
  // pushed, and does the database it is talking to still match it?
  health: publicQuery.query(async () => ({
    commit: process.env.RENDER_GIT_COMMIT?.slice(0, 7) ?? "unknown",
    schema: await checkSchema(),
  })),
  auth: authRouter,
  localAuth: localAuthRouter,
  traveler: travelerRouter,
});

export type AppRouter = typeof appRouter;
