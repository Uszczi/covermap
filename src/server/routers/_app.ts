import { publicProcedure, router } from "../trpc";
import { healthRouter } from "./health";
import { uRouter } from "../uu";
import { panelRouter } from "./panel";

export const appRouter = router({
  health: healthRouter,
  panel: panelRouter,
  urou: uRouter,
  whoami: publicProcedure.query(({ ctx }) => ctx.user),
});

export type AppRouter = typeof appRouter;
