import PassManagerHome from "@/Component/PassManage/PassManagerHome";
import PassManagerNavbar from "@/Component/PassManage/PassManagerNavbar";
import Head from "next/head";
import { useState } from "react";
import { useContext } from "react";
import { PassManagerContext } from "@/Context/PassManager/PassManagerStates";
import PassManagerLogin from "@/Component/PassManage/PassManagerLogin";
import PassManagerRegistration from "@/Component/PassManage/PassManagerRegistration";
import PassManageSidebar from "@/Component/PassManage/PassManageSidebar";
import PassManagerMain from "@/Component/PassManage/PassManagerMain";
import PassManageMPasPin from "@/Component/PassManage/PassManageMPasPin";

export default function PassManager() {
  let { setLogin, login, regis, setRegis, logged, setLogged } =
    useContext(PassManagerContext);
  const [showMPass, setShowMPass] = useState(true);

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

      {!logged && (
        <>
          <PassManagerNavbar />
          <PassManagerHome />
          <PassManagerLogin login={login} close={setLogin} />
          <PassManagerRegistration regis={regis} close={setRegis} />
        </>
      )}
      {logged && (
        <div style={{ display: "flex" }}>
          {showMPass && (
            <PassManageMPasPin
              setMPass={(val) => {
                console.log(val);
                setShowMPass(false);
              }}
              content={{
                title: "Create a Master Password",
                text: "Master Password is required for your Security",
              }}
            />
          )}
          <PassManageSidebar />
          <PassManagerMain setLogged={setLogged} />
        </div>
      )}
    </>
  );
}
