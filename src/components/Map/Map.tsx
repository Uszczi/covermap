"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setExampleRoutes, setRoutes } from "~/slices/routesSlice";
import { type RootState } from "~/store/store";
import type { Route } from "~/types/types";

const DynamicMap = dynamic(() => import("./DynamicMap"), {
  ssr: false,
});

const Map = ({
  zoom,
  exampleRoutes,
}: {
  zoom: number;
  exampleRoutes: Route[];
}) => {
  const dispatch = useDispatch();
  const routes = useSelector((store: RootState) => store.routes.routes);

  useEffect(() => {
    dispatch(setExampleRoutes(exampleRoutes));
    console.log(exampleRoutes);
  }, [exampleRoutes, dispatch]);

  return (
    <div style={{ aspectRatio: 2 }}>
      <DynamicMap zoom={zoom} routes={routes} />
    </div>
  );
};

export default Map;
