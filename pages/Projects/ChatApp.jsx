import ChatAppLogin from "@/Component/ChatApp/ChatAppLogin";
import ChatAppMain from "@/Component/ChatApp/ChatAppMain";
import ChatAppSidebar from "@/Component/ChatApp/ChatAppSidebar";
import { ChatAppContext } from "@/Context/ChatApp/ChatAppStates";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

export default function ChatApp() {
  const router = useRouter();
  let { logged } = useContext(ChatAppContext);

  useEffect(() => {
    if (!logged) window.history.pushState({}, "", "/Projects/ChatApp/Login");
    // if (!logged) router.push("/Projects/ChatApp/Login");
  }, []);

  return (
    <>
      <Head>
        <title>ChatApp</title>
      </Head>
      {!logged && <ChatAppLogin />}

      {logged && (
        <div style={{ display: "flex" }}>
          <ChatAppSidebar />
          <ChatAppMain />
        </div>
      )}
    </>
  );
}
