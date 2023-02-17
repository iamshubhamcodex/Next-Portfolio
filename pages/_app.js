import ECoachingStates from "@/Context/ECoaching/ECoachingStates";
import "@/CSS/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ECoachingStates>
      <Component {...pageProps} />
    </ECoachingStates>
  );
}
