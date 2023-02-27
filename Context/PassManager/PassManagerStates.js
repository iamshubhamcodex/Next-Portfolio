import host from "@/lib/var";

const { createContext, useState, useEffect } = require("react");

export const PassManagerContext = createContext();

export default function PassManagerStates({ children }) {
  const [login, setLogin] = useState(false);
  const [regis, setRegis] = useState(false);
  const [logged, setLogged] = useState(false);
  const [userDetails, setUserDetails] = useState();
  const [mob, setMob] = useState(false);
  const [smMob, setSmMob] = useState(false);
  const [selected, setSelected] = useState("Logins");
  const [cred, setCred] = useState();

  const setIsMob = () => {
    setMob(window.innerWidth < 720);
    setSmMob(window.innerWidth < 480);
  };

  const validateUser = async (body) => {
    let response = await fetch(`${host}api/PassManage/validateUser`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { Accept: "*/*", "Content-Type": "application.json" },
    });
    let data = await response.json();
    if (data.success) {
      setUserDetails(data.user);
      setLogged(true);
      window.localStorage.setItem("userPass", JSON.stringify(data.user));
    }
  };
  const addUser = async (body) => {
    let response = await fetch(`${host}api/PassManage/addUser`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { Accept: "*/*", "Content-Type": "application.json" },
    });
    let data = await response.json();
    if (data.success) {
      setLogin(true);
      setRegis(false);
    }
  };
  const updateUser = async (body) => {
    let JSONbody;
    switch (body.what) {
      case "mpass":
        JSONbody = {
          email: userDetails.email,
          what: body.what,
          set: { mpass: body.mpass },
        };
        break;
      case "logins":
      case "generals":
      case "ids":
      case "notes":
        JSONbody = {
          email: userDetails.email,
          what: body.what,
          set: {},
          // set: { logins: body[body.what] },
        };
        JSONbody.set[body.what] = body[body.what];
    }
    let response = await fetch(`${host}api/PassManage/updateUser`, {
      method: "POST",
      body: JSON.stringify(JSONbody),
      headers: { Accept: "*/*", "Content-Type": "application.json" },
    });
    let data = await response.json();
    if (data.success) {
      setUserDetails(data.user);
      window.localStorage.setItem("userPass", JSON.stringify(data.user));
      return true;
    } else return false;
  };
  const deleteCredential = async (id) => {
    let response = await fetch(`${host}api/PassManage/deleteCred`, {
      method: "POST",
      body: JSON.stringify({
        id: id,
        email: userDetails.email,
        what: selected,
      }),
      headers: { Accept: "*/*", "Content-Type": "application.json" },
    });
    const data = await response.json();
    if (data.success) {
      setUserDetails(data.user);
      window.localStorage.setItem("userPass", JSON.stringify(data.user));
      return true;
    } else return false;
  };

  useEffect(
    () => {
      window.addEventListener("resize", () => setIsMob());
      setIsMob();
      let temp = window.localStorage.getItem("userPass");
      if (temp && temp !== "undefined") {
        setLogged(true);
        setUserDetails(JSON.parse(temp));
      }
    }, //eslint-disable-next-line
    []
  );

  return (
    <PassManagerContext.Provider
      value={{
        login,
        setLogin,
        regis,
        setRegis,
        logged,
        setLogged,
        mob,
        smMob,
        userDetails,
        addUser,
        validateUser,
        updateUser,
        selected,
        setSelected,
        deleteCredential,
        cred,
        setCred,
      }}
    >
      {children}
    </PassManagerContext.Provider>
  );
}
