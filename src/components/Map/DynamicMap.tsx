"use client";

import * as ReactLeaflet from "react-leaflet";
import "leaflet/dist/leaflet.css";

import type { Route } from "~/types/types";
import { useEffect, useState } from "react";

const DEFAULT_CENTER: [number, number] = [51.7639483, 19.4529348];

const MapPosition = ({ center }: { center: [number, number] }) => {
  const map = ReactLeaflet.useMap();

  useEffect(() => {
    map.setView(center);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [center]);

  return null;
};

const Map = ({ zoom, routes }: { zoom: number; routes: Route[] }) => {
  const [points, setPoints] = useState<Array<Array<[number, number]>>>([]);
  const [center, setCenter] = useState<[number, number]>(DEFAULT_CENTER);

  // const map = ReactLeaflet.useMap();

  useEffect(() => {
    console.log("UPdate routes");

    setPoints(routes.map((route: Route) => route.points));
  }, [routes]);

  useEffect(() => {
    setPoints(routes.map((route: Route) => route.points));
    if (routes[0]?.points[0]) {
      console.log(center);
      setCenter(routes[0]?.points[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [points]);

  return (
    <ReactLeaflet.MapContainer
      className="h-full w-full"
      center={DEFAULT_CENTER}
      zoom={zoom}
    >
      <>
        <ReactLeaflet.TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <ReactLeaflet.Polyline positions={points} />
        <MapPosition center={center} />
      </>
    </ReactLeaflet.MapContainer>
  );
};

export default Map;
