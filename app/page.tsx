import { type NextPage } from "next";

import Map from "@components/Map";

import Amazing from "@components/Amazing/Amazing";
import { PrismaClient } from "@prisma/client";

const Home = async () => {
  const prisma = new PrismaClient();
  const routes = await prisma.route.findMany();

  console.log(routes);

  return (
    <div className="pt-6">
      <Map width="800" height="400" zoom={12} routes={routes} />
    </div>
  );
};

export default Home;
