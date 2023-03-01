"use client";

import { type NextPage } from "next";

import Map from "@components/Map";

import Amazing from "@components/Amazing/Amazing";

const Home: NextPage = () => {
  return (
    <div className="pt-6">
      <Amazing />
      <Map width="800" height="400" zoom={12} />
    </div>
  );
};

export default Home;
