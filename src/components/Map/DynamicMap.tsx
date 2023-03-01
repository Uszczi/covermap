"use client";

import * as ReactLeaflet from "react-leaflet";
import "leaflet/dist/leaflet.css";

import styles from "./Map.module.scss";
import type { Route } from "~/types/types";
import { useEffect, useState } from "react";
import { setRoutes } from "~/slices/routesSlice";

const DEFAULT_CENTER: [number, number] = [51.505, -0.09];
const { MapContainer } = ReactLeaflet;

const Map = ({ zoom, routes }: { zoom: number; routes: Route[] }) => {
  const mapClassName = styles.map;

  const [points, setPoints] = useState<Array<Array<[number, number]>>>([]);
  useEffect(() => {
    setPoints(routes.map((route: Route) => route.points));
  }, [routes]);

  return (
    <MapContainer className={mapClassName} center={DEFAULT_CENTER} zoom={zoom}>
      <>
        <ReactLeaflet.TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <ReactLeaflet.Polyline positions={points} />
      </>
    </MapContainer>
  );
};

export default Map;
