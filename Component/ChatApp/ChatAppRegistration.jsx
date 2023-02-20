import styles from "@/CSS/ChatApp/ChatAppLogin.module.css";
import Head from "next/head";
import { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ChatAppContext } from "@/Context/ChatApp/ChatAppStates";

export default function ChatAppRegistration() {
  const router = useRouter();
  let { logged, setLogged, createUser, validateUser } =
    useContext(ChatAppContext);
  const [alert, setAlert] = useState({ bool: false, msg: "" });
  const [loading, setLoading] = useState(false);
  // const [canSubmit, setCanSubmit] = useState(false)

  const registerHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    let userD = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
      mobile: mobile.current.value,
    };
    let res = await createUser(userD);
    setLoading(false);
    if (res.bool) router.push("/Projects/ChatApp/Login");
    else {
      setAlert({ bool: true, msg: res.error });
    }
  };
  async function userExist() {
    let users = await validateUser({ email: email.current.value });

    if (users.bool) {
      setAlert({ bool: true, msg: "User Exists with that Email" });
    } else {
      setAlert({ bool: false, msg: "User Exists with that Email" });
    }
  }

  const name = useRef();
  const email = useRef();
  const password = useRef();
  const mobile = useRef();

  return (
    <>
      <Head>
        <title>Registration - ChatApp</title>
      </Head>
      <div className={styles.home}>
        <form action="">
          <h1>Welcome.</h1>
          <div className={styles.login}>
            <div className={styles.connector}>
              Have An Account.{" "}
              <Link className={styles.link} href="/Projects/ChatApp/Login">
                Login
              </Link>
            </div>
            <div className={styles.inp}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" ref={name} placeholder="Your Name" />
            </div>
            <div className={styles.inp}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                ref={email}
                onChange={userExist}
                placeholder="example@abc.com"
              />
            </div>
            <div className={styles.inp}>
              <label htmlFor="pass">Password</label>
              <input
                type="text"
                id="pass"
                ref={password}
                placeholder="qwerty1234"
              />
            </div>
            <div className={styles.inp}>
              <label htmlFor="mobile">Mobile No</label>
              <input
                type="text"
                id="mobile"
                ref={mobile}
                placeholder="qwerty1234"
              />
            </div>
            {alert.bool && (
              <p style={{ fontSize: "1.7rem", color: "red" }}>{alert.msg}</p>
            )}
            <p className={styles.regisbtn} onClick={(e) => registerHandler(e)}>
              Register{" "}
              {loading && (
                <i className={`fa-solid fa-circle-notch ${styles.loading}`}></i>
              )}
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
