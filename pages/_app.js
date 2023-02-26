import ChatAppStates from "@/Context/ChatApp/ChatAppStates";
import ECoachingStates from "@/Context/ECoaching/ECoachingStates";
import "prismjs/themes/prism-twilight.css";

import "@/CSS/globals.css";
import PassManagerStates from "@/Context/PassManager/PassManagerStates";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <PassManagerStates>
        <ChatAppStates>
          <ECoachingStates>
            <Component {...pageProps} />
          </ECoachingStates>
        </ChatAppStates>
      </PassManagerStates>
    </>
  );
}
