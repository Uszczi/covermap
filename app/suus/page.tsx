"use client";

import { trpc } from "~/client/trpcClient";

export default function Page() {
  const data = trpc.urou.userById.useQuery("2");

  return <h1>{data.status == "success" ? data.data?.name : "bbee"}</h1>;
}
