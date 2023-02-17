import { useContext, useEffect, useRef, useState } from "react";
import styles from "@/CSS/ECoaching/ECoachingLogReg.module.css";
import Login from "@/Assets/ECoaching/log.png";
import { ECoachingContext } from "@/Context/ECoaching/ECoachingStates";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ECoachingLogin() {
  let { mob, checkUser } = useContext(ECoachingContext);
  const [logPas, setLogPas] = useState(true);
  const [user, setUser] = useState({ email: "", pass: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  // const [empas, setEmpas] = useState({email: "", pas: ""})
  // const [code, setCode] = useState();

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user != null) {
      setUser({ email: user.email, pass: user.password });
    }
    // eslint-disable-next-line
  }, []);

  let Lemail = useRef();
  let Lpassword = useRef();

  const handleChange = (e) => {
    setUser({
      email: Lemail.current.value,
      pass: Lpassword.current.value,
    });
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    const res = await checkUser({
      email: Lemail.current.value,
      password: Lpassword.current.value,
    });
    setLoading(false);
    if (res.bool) router.push("/Projects/ECoaching/");
  };

  return (
    <>
      <div className={styles.logReg}>
        <div className={styles.cont}>
          <div className={styles.log}>
            {!mob && <Image src={Login} alt="" />}
            <form action="" onSubmit={loginHandler}>
              <h3>Login</h3>
              <p>
                Don't have an account{" "}
                <span
                  onClick={() => {
                    window.history.pushState({}, "", "/Register");
                  }}
                >
                  Register
                </span>
              </p>
              <div className={styles.form}>
                <input
                  required
                  type="email"
                  value={user.email}
                  onChange={handleChange}
                  ref={Lemail}
                  placeholder="Enter Username"
                />
                <input
                  required
                  type={logPas ? "password" : "text"}
                  ref={Lpassword}
                  onChange={handleChange}
                  value={user.pass}
                  placeholder="Enter Password"
                />
                <p
                  className={styles.showPas}
                  onClick={() => {
                    setLogPas(!logPas);
                    Lpassword.current.focus();
                  }}
                >
                  Show Password
                </p>
                <button type="submit">
                  Login{" "}
                  {loading && (
                    <i
                      className={`fa-solid fa-circle-notch ${styles.loading}`}
                    ></i>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
