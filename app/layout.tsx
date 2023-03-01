import Head from "next/head";

import "~/styles/globals.css";

import TopBar from "~/components/Map/TopBar/TobBar";

function Footer() {
  return <div className="-ml-5 h-16 w-screen bg-gray-300 md:ml-0"></div>;
}

function FinishedRow({ text }: { text: string }) {
  return (
    <li className="flex items-center">
      <svg
        className="mr-1.5 h-4 w-4 flex-shrink-0 text-green-500 dark:text-green-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        ></path>
      </svg>
      {text}
    </li>
  );
}

function TodoRow({ text }: { text: string }) {
  return (
    <li className="flex items-center">
      <svg
        className="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clipRule="evenodd"
        ></path>
      </svg>
      {text}
    </li>
  );
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

          <div className="container mx-auto grow">
            <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              Upcoming features:
            </h2>
            <ul className="list-inside space-y-1 text-gray-500 dark:text-gray-400">
              {["Visualize Strava activities."].map((v, k) => (
                <FinishedRow key={k} text={v} />
              ))}
              {[
                "Generate random route of given length, start and end.",
                "Generate random route with prority of not visited streets.",
                "Export generated route to Strava.",
                "Visualize Garmin activities.",
                "Export generated route to Garmin.",
              ].map((v, k) => (
                <TodoRow key={k} text={v} />
              ))}
            </ul>
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
