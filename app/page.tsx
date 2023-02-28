"use client";

import { type NextPage } from "next";

import Map from "@components/Map";

import styles from "@styles/Home.module.scss";

const DEFAULT_CENTER = [51.505, -0.09];

const Home: NextPage = () => {
  return (
    <>
      <main>
        <div>
          <h1>Cover Map</h1>
        </div>
        <Map
          className={styles.homeMap}
          width="800"
          height="400"
          center={DEFAULT_CENTER}
          zoom={12}
        />
      </main>
    </>
  );
};

export default Home;
