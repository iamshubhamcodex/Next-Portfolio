import ChatAppStates from "@/Context/ChatApp/ChatAppStates";
import ECoachingStates from "@/Context/ECoaching/ECoachingStates";
import "prismjs/themes/prism-twilight.css";

import "@/CSS/globals.css";
import PassManagerStates from "@/Context/PassManager/PassManagerStates";

export default function App({ Component, pageProps }) {
  return (
    <PassManagerStates>
      <ChatAppStates>
        <ECoachingStates>
          <Component {...pageProps} />
        </ECoachingStates>
      </ChatAppStates>
    </PassManagerStates>
  );
}
