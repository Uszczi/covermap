import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";

import Layout from "@components/Layout";
import Section from "@components/Section";
import Container from "@components/Container";
import Map from "@components/Map";
import Button from "@components/Button";

import styles from "@styles/Home.module.scss";

const DEFAULT_CENTER = [38.907132, -77.036546];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cover Map</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Cover Map
          </h1>
        </div>

        <Section>
          <Container>
            <Map
              className={styles.homeMap}
              width="800"
              height="400"
              center={DEFAULT_CENTER}
              zoom={12}
            >
              {({ TileLayer, Marker, Popup }) => (
                <>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={DEFAULT_CENTER}>
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                  </Marker>
                </>
              )}
            </Map>

            <p className={styles.description}>
              <code className={styles.code}>
                yarn create next-app -e
                https://github.com/colbyfayock/next-leaflet-starter
              </code>
            </p>

            <p className={styles.view}>
              <Button href="https://github.com/colbyfayock/next-leaflet-starter">
                Vew on GitHub
              </Button>
            </p>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default Home;
