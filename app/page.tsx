import Map from "@components/Map";

import { type Route as ModelRoute } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import FeatureList from "~/components/FeatureList/FeatureList";
import MapHeader from "~/components/MapHeader/MapHeader";

import type { Route } from "~/types/types";

export default async function Home() {
  const prisma = new PrismaClient();
  const rawRoutes = await prisma.route.findMany();

  const routes: Route[] = rawRoutes.map((route: ModelRoute) => {
    return {
      ...route,
      points: JSON.parse(route.points as string) as Array<[number, number]>,
    };
  });

  return (
    <div className="pt-6">
      <MapHeader />

      <Map zoom={12} exampleRoutes={routes} />

      <FeatureList />
    </div>
  );
}
