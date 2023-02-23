import PassManagerHome from "@/Component/PassManage/PassManagerHome";
import PassManagerNavbar from "@/Component/PassManage/PassManagerNavbar";
import Head from "next/head";
import { useState } from "react";
import { useContext } from "react";
import { PassManagerContext } from "@/Context/ChatApp/PassManager/PassManagerStates";
import PassManagerLogin from "@/Component/PassManage/PassManagerLogin";
import PassManagerRegistration from "@/Component/PassManage/PassManagerRegistration";

export default function PassManager() {
  let { setLogin, login, regis, setRegis } = useContext(PassManagerContext);
  const [copied, setCopied] = useState(false);

  const copyContent = async (text, dom) => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <>
      <Head>
        <title>PassManager | Projects</title>
      </Head>
      <PassManagerNavbar />
      {/* if(!logged){} */}
      <PassManagerHome />
      <PassManagerLogin login={login} close={setLogin} />
      <PassManagerRegistration regis={regis} close={setRegis} />
    </>
  );
}
