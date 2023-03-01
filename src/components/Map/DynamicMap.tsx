"use client";

import * as ReactLeaflet from "react-leaflet";
import "leaflet/dist/leaflet.css";

import styles from "./Map.module.scss";
import type { Route } from "~/types/types";

let DEFAULT_CENTER: [number, number] = [51.505, -0.09];
const { MapContainer } = ReactLeaflet;

const Map = ({ zoom, routes }: { zoom: number; routes: Route[] }) => {
  const mapClassName = styles.map;

  const e: Array<Array<[number, number]>> = routes.map(
    (e: Route) => JSON.parse(e.points) as Array<[number, number]>
  );

  // How to check it in nice way?
  if (e[0] && e[0][0]) {
    DEFAULT_CENTER = e[0][0];
  }

  return (
    <MapContainer className={mapClassName} center={DEFAULT_CENTER} zoom={zoom}>
      <>
        <ReactLeaflet.TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <ReactLeaflet.Polyline positions={e} />
      </>
    </MapContainer>
  );
};

export default Map;
