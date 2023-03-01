import Head from "next/head";

import "~/styles/globals.css";

import TopBar from "@components/TopBar/TobBar";
import FeatureList from "~/components/FeatureList/FeatureList";

function Footer() {
  return <div className="-ml-5 h-16 w-screen bg-gray-300 md:ml-0"></div>;
}

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <Head>
        <title>Cover Map</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div className="flex h-full flex-col px-5 md:px-0">
          <TopBar />

          <div className="container mx-auto mt-8 flex flex-col items-center">
            <div className="mx-auto">
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                Cover Map
              </h1>
            </div>

            <p className="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
              See all your routes at once.
            </p>

            <p>
              Connect your{" "}
              <a className="font-medium text-orange-700 hover:underline">
                Strava account
              </a>{" "}
              or check{" "}
              <a className="font-medium text-orange-700 hover:underline">
                example data
              </a>
              .
            </p>
          </div>

          <div className="container mx-auto h-max grow">
            <div>{children}</div>
          </div>

          <FeatureList />
          <Footer />
        </div>
      </body>
    </html>
  );
}
