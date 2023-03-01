/**
 * This file contains the root router of your tRPC-backend
 */
import { publicProcedure, router } from "../trpc";
import { healthRouter } from "./health";
import { postRouter } from "./post";
import { uRouter } from "../uu";

export const appRouter = router({
  post: postRouter,
  health: healthRouter,
  urou: uRouter,
  whoami: publicProcedure.query(({ ctx }) => ctx.user),
});

export type AppRouter = typeof appRouter;
