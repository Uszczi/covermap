import { router, publicProcedure } from "../trpc";

export const panelRouter = router({
  example: publicProcedure.query(() => "yay!"),
  wow: publicProcedure.mutation(() => "yay!"),
  loadExapleData: publicProcedure.mutation(() => "yay!"),
});
