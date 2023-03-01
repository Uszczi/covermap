"use client";

import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

const DynamicMap = dynamic(() => import("./DynamicMap"), {
  ssr: false,
});

type Route = {
  id: string;
  points: any;
  stravaId: string;
};

const Map = ({ zoom, routes }: { zoom: number; routes: Route[] }) => {
  const value = useSelector((store) => store.routes.value);

  return (
    <div style={{ aspectRatio: 2 }}>
      <h1>{value}</h1>
      <DynamicMap {...{ zoom, routes }} />
    </div>
  );
};

export default Map;
