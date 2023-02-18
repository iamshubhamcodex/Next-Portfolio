import { useContext, useEffect, useRef, useState } from "react";
import styles from "@/CSS/ECoaching/ECoachingLogReg.module.css";
import Registration from "@/Assets/ECoaching/reg.png";
import { ECoachingContext } from "@/Context/ECoaching/ECoachingStates";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ECoachingRegister({ register }) {
  let { mob, addUser } = useContext(ECoachingContext);
  const [logPas, setLogPas] = useState(true);
  const [regPas, setRegPas] = useState(true);
  const [user, setUser] = useState({ email: "", pass: "" });
  const [reglog, setRegLog] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  // const [empas, setEmpas] = useState({email: "", pas: ""})
  // const [code, setCode] = useState();

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user != null) {
      setUser({ email: user.email, pass: user.password });
    }
    setRegLog(register);
    // eslint-disable-next-line
  }, []);

  let Rname = useRef();
  let Remail = useRef();
  let Rmobile = useRef();
  let Rpassword = useRef();
  let Lemail = useRef();
  let Lpassword = useRef();

  const registerHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    let res = await addUser({
      name: Rname.current.value,
      email: Remail.current.value,
      mobile: Rmobile.current.value,
      password: Rpassword.current.value,
    });
    setLoading(false);
    if (res.bool) router.push("/Projects/ECoaching/Login");
  };

  return (
    <>
      <div className={styles.logReg}>
        <div className={styles.cont}>
          <div className={`${styles.log} ${styles.logg}`}>
            {!mob && <Image src={Registration} alt="" />}
            <form onSubmit={registerHandler}>
              <h3>Register</h3>
              <p>
                Already have an account{" "}
                <span
                  onClick={() => window.history.pushState({}, "", "/Login")}
                >
                  Login
                </span>
              </p>
              <div className={styles.form}>
                <input required type="text" ref={Rname} placeholder="Name" />
                <input required type="email" ref={Remail} placeholder="Email" />
                <input
                  required
                  type="text"
                  ref={Rmobile}
                  placeholder="Call Number"
                />
                <input
                  required
                  type={regPas ? "password" : "text"}
                  ref={Rpassword}
                  placeholder="Password"
                />
                <p
                  className={styles.showPas}
                  onClick={() => {
                    setRegPas(!regPas);
                    Rpassword.current.focus();
                  }}
                >
                  Show Password
                </p>
                <div className={styles.pp}>
                  <input type="checkbox" name="" id="Password" />
                  <span>I accept Terms and Condition & Privacy Policy</span>
                </div>
                <button type="submit">
                  Resgister{" "}
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
