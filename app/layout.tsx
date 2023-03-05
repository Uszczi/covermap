import Head from "next/head";

import { Providers } from "~/provider";
import "~/styles/globals.css";
import { ClientProvider } from "~/client/trpcClient";
import TopBar from "@components/TopBar/TobBar";
import type { ReactNode } from "react";

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
        <ClientProvider>
          <Providers>
            <div className="flex h-full flex-col px-5 md:px-0">
              <TopBar />

              <div className="container mx-auto h-max grow">
                <div>{children}</div>
              </div>

              <Footer />
            </div>
          </Providers>
        </ClientProvider>
      </body>
    </html>
  );
}
