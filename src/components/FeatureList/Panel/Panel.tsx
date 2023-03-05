"use client";

import { trpc } from "~/client/trpcClient";

export default function Panel() {
  const loadExampleDataAction = trpc.panel.loadExapleData.useMutation();

  const loadExampleData = () => {
    (async () => {
      await loadExampleDataAction.mutateAsync();
    })()
      .then((e) => e)
      .catch((e) => console.error(e));
  };

  return (
    <div className="mt-20">
      <button onClick={() => loadExampleData()}>Load example data</button>
    </div>
  );
}
