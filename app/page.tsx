import Map from "@components/Map";

import { PrismaClient } from "@prisma/client";

export default async function Home() {
  const prisma = new PrismaClient();
  const routes = await prisma.route.findMany();

  return (
    <div className="pt-6">
      <Map zoom={12} routes={routes} />
    </div>
  );
}
