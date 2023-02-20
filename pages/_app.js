import ChatAppStates from "@/Context/ChatApp/ChatAppStates";
import ECoachingStates from "@/Context/ECoaching/ECoachingStates";
import "@/CSS/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ChatAppStates>
      <ECoachingStates>
        <Component {...pageProps} />
      </ECoachingStates>
    </ChatAppStates>
  );
}
