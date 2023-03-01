"use client";

import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./DynamicMap"), {
  ssr: false,
});

type Route = {
  id: string;
  points: string;
  stravaId: string;
};

const Map = ({ zoom, routes }: { zoom: number; routes: Route[] }) => {
  return (
    <div style={{ aspectRatio: 2 }}>
      <DynamicMap {...{ zoom, routes }} />
    </div>
  );
};

export default Map;
