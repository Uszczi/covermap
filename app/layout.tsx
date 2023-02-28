import Head from "next/head";

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <Head>
        <title>Cover Map</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
