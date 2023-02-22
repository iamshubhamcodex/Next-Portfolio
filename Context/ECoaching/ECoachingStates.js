import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import host from "@/lib/var";

export const ECoachingContext = createContext();

export default function ECoachingStates({ children }) {
  const router = useRouter();
  const [mob, setMob] = useState(false);
  const [userD, setUserD] = useState(null);
  const [navActive, setNavActive] = useState("Home");
  const [logged, setLogged] = useState(false);
  const [alert, setAlert] = useState({
    suc: false,
    bool: false,
    msg: "Nothing Right Now",
  });

  useEffect(() => {
    if (Boolean(localStorage.getItem("loggedIn"))) setLogged(true);
    window.addEventListener("resize", () => {
      setAcc();
    });
    setAcc();
    //eslint-disable-next-line
  }, []);
  function setAcc() {
    setMob(window.innerWidth < 720);
  }
  const showAlert = (val, suc) => {
    setAlert({ suc: suc, bool: true, msg: val });
    setTimeout(() => {
      setAlert({ suc: false, bool: false, msg: "" });
    }, 2900);
  };
  const addUser = async (userData) => {
    try {
      let response = await fetch(`${host}api/ECoaching/add`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      });
      let data = await response.json();
      if (data.success) {
        showAlert("Successfully Registerd", true);
        router.push("/Projects/ECoaching/Login");
        return { bool: true };
      } else {
        showAlert(data.error, false);
        return { bool: false, error: data.error };
      }
    } catch (error) {
      console.log(error);
      return { bool: false, error: error };
    }
  };
  const checkUser = async ({ email, password }) => {
    let response = await fetch(`${host}api/ECoaching/get`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    });

    let data = await response.json();
    if (data.success) {
      showAlert("Successfully LoggedIn", true);
      setLogged(true);
      window.localStorage.setItem("loggedIn", true);
      if (data.admin) {
        window.localStorage.setItem("user", JSON.stringify(data.user));
      } else {
        setUserD(data.user);
        window.localStorage.setItem("user", JSON.stringify(data.user));
      }
      return { bool: true, isAdmin: data.admin };
    } else {
      showAlert(data.error, false);
      return { bool: false, error: data.error };
    }
  };
  const getUsers = async () => {
    let response = await fetch(`${host}api/ECoaching/get`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    });
    let data = await response.json();
    return data;
  };
  const deleteUser = async (id) => {
    let response = await fetch(`${host}api/ECoaching/delete`, {
      method: "POST",
      body: JSON.stringify({
        _id: id,
      }),
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    });
  };
  function isVisib(ele) {
    let hei = window.innerHeight;
    let rect;
    if (ele !== null) {
      rect = ele.getBoundingClientRect();
      if (rect.y < hei / 2 && (rect.y >= 0 || rect.bottom > hei / 4))
        return true;
    }
    return false;
  }

  return (
    <ECoachingContext.Provider
      value={{
        alert,
        setAlert,
        showAlert,
        logged,
        setLogged,
        userD,
        addUser,
        getUsers,
        checkUser,
        deleteUser,
        isVisib,
        mob,
        setMob,
        navActive,
        setNavActive,
      }}
    >
      {children}
    </ECoachingContext.Provider>
  );
}
