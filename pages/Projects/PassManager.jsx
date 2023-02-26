import PassManagerHome from "@/Component/PassManage/PassManagerHome";
import PassManagerNavbar from "@/Component/PassManage/PassManagerNavbar";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { PassManagerContext } from "@/Context/PassManager/PassManagerStates";
import PassManagerLogin from "@/Component/PassManage/PassManagerLogin";
import PassManagerRegistration from "@/Component/PassManage/PassManagerRegistration";
import PassManageSidebar from "@/Component/PassManage/PassManageSidebar";
import PassManagerMain from "@/Component/PassManage/PassManagerMain";
import PassManageMPasPin from "@/Component/PassManage/PassManageMPasPin";

export default function PassManager() {
  let {
    setLogin,
    login,
    regis,
    setRegis,
    logged,
    setLogged,
    userDetails,
    updateUser,
  } = useContext(PassManagerContext);
  // const [showMPass, setShowMPass] = useState(true);
  // const [validMPass, setValidMPass] = useState(false);
  const [mPass, setMPass] = useState({
    show: true,
    valid: false,
    error: "",
    content: {
      title: "",
      text: "",
    },
  });

  const validateMPass = async (val) => {
    // check val of mPass and then return something
    if (userDetails?.mpass === undefined) {
      let bool = await updateUser({ what: "mpass", mpass: val });
      if (bool) setMPass({ ...mPass, show: false, valid: true, error: "" });
    } else {
      if (userDetails?.mpass !== val) {
        setMPass({
          ...mPass,
          show: true,
          valid: false,
          error: "Enter correct Master Password",
        });
      } else {
        setMPass({ ...mPass, show: false, valid: true });
      }
    }

    // setShowMPass(false);
    // setValidMPass(true);
  };
  const createMPassContent = (user) => {
    // console.log(userDetails);
    if (!user && user.mpass === undefined) {
      setMPass({
        ...mPass,
        content: {
          title: "Create a Master Password",
          text: "Master Password is required for your Security",
        },
      });
    } else {
      setMPass({
        ...mPass,
        content: {
          title: "Enter your Master Password",
          text: "Master Password is required to verify your Identity",
        },
      });
    }
  };
  const copyContent = async (text, dom) => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  useEffect(() => {
    let temp = window.localStorage.getItem("userPass");
    if (temp && temp !== "undefined") {
      createMPassContent(JSON.parse(temp));
    }
  }, []);

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
      {logged && mPass?.show && (
        <PassManageMPasPin
          setMPass={(val) => {
            validateMPass(val);
          }}
          mPass={mPass}
        />
      )}
      {logged && (
        <div
          style={{
            position: "relative",
            width: "100vw",
            overflowY: "hidden",
            display: "flex",
          }}
        >
          {mPass?.valid && (
            <>
              <PassManageSidebar />
              <PassManagerMain setLogged={setLogged} />
            </>
          )}
        </div>
      )}
    </>
  );
}
