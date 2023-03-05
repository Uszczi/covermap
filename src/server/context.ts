/* eslint-disable @typescript-eslint/no-unused-vars */
import type * as trpc from "@trpc/server";
import type * as trpcNext from "@trpc/server/adapters/next";
import { unstable_getServerSession } from "next-auth";
import { nextAuthOptions } from "~/pages/api/auth/[...nextauth]";

export async function createContext(
  opts: // HACKs because we can't import `next/cookies` in `/api`-routes
  | {
        type: "rsc";
      }
    | (trpcNext.CreateNextContextOptions & { type: "api" })
) {
  // for API-response caching see https://trpc.io/docs/caching

  if (opts.type === "rsc") {
    // RSC
    return {
      type: opts.type,
    };
  }
  // not RSC
  const session = await unstable_getServerSession(
    opts.req,
    opts.res,
    nextAuthOptions
  );
  return {
    type: opts.type,
    user: session?.user,
  };
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
