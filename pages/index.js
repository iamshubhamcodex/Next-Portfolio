import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location = "/Portfolio";
  }, []);

  return (
    <>
      <Head>
        <title>Portfoilo | Shubham Singh</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
