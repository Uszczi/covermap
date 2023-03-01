import Head from "next/head";

import { Providers } from "~/provider";
import "~/styles/globals.css";

import TopBar from "@components/TopBar/TobBar";
import FeatureList from "~/components/FeatureList/FeatureList";
import type { ReactNode } from "react";
import MapHeader from "~/components/MapHeader/MapHeader";

function Footer() {
  return <div className="-ml-5 h-16 w-screen bg-gray-300 md:ml-0"></div>;
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Cover Map</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Providers>
          <div className="flex h-full flex-col px-5 md:px-0">
            <TopBar />

            <MapHeader />

            <div className="container mx-auto h-max grow">
              <div>{children}</div>
            </div>

            <FeatureList />

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
