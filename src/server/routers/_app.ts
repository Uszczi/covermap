/**
 * This file contains the root router of your tRPC-backend
 */
import { publicProcedure, router } from "../trpc";
import { healthRouter } from "./health";
import { uRouter } from "../uu";

export const appRouter = router({
  health: healthRouter,
  urou: uRouter,
  whoami: publicProcedure.query(({ ctx }) => ctx.user),
});

export type AppRouter = typeof appRouter;
