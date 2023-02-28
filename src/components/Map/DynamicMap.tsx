"use client";

import { useEffect } from "react";
import Leaflet from "leaflet";
import * as ReactLeaflet from "react-leaflet";
import "leaflet/dist/leaflet.css";

import getRoute from "~/services/routes";

import styles from "./Map.module.scss";

const DEFAULT_CENTER = [51.505, -0.09];
const { MapContainer } = ReactLeaflet;

const Map = ({ children, className, width, height, ...rest }) => {
  const route = getRoute();
  // DEFAULT_CENTER = route[0];

  let mapClassName = styles.map;

  if (className) {
    mapClassName = `${mapClassName} ${className}`;
  }

  useEffect(() => {
    (async function init() {
      delete Leaflet.Icon.Default.prototype._getIconUrl;
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: "leaflet/images/marker-icon-2x.png",
        iconUrl: "leaflet/images/marker-icon.png",
        shadowUrl: "leaflet/images/marker-shadow.png",
      });
    })();
  }, []);

  return (
    <MapContainer className={mapClassName} center={DEFAULT_CENTER} {...rest}>
      <>
        <ReactLeaflet.TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <ReactLeaflet.Polyline positions={route} />
      </>
    </MapContainer>
  );
};

export default Map;
