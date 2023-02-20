import styles from "@/CSS/ChatApp/ChatAppLogin.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChatAppContext } from "@/Context/ChatApp/ChatAppStates";
import { useRouter } from "next/router";

export default function ChatAppLogin() {
  let { setLogged, validateUser } = useContext(ChatAppContext);
  const [alert, setAlert] = useState({ bool: false, msg: "" });
  const [userDetails, setUserDetails] = useState();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    let userD = {
      email: email.current.value,
      password: password.current.value,
    };
    let res = await validateUser(userD);
    if (res.bool) router.push("/Projects/ChatApp/");
    else setAlert({ bool: true, msg: res.error });
    setLoading(false);
  };

  const email = useRef();
  const password = useRef();

  return (
    <>
      <div className={styles.home}>
        <form action="">
          <h1>Welcome.</h1>
          <div className={styles.login}>
            <div className={styles.connector}>
              Don't Have An Account.{" "}
              <Link
                className={styles.link}
                href="/Projects/ChatApp/Registration"
              >
                Registration
              </Link>
            </div>
            <div className={styles.inp}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                ref={email}
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
            {alert.bool && (
              <p style={{ fontSize: "1.7rem", color: "red" }}> {alert.msg}</p>
            )}
            <p
              className={styles.regisbtn}
              onClick={(e) => {
                loginHandler(e);
              }}
            >
              Sign In{" "}
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
