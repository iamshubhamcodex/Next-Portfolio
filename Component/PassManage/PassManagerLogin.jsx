import { PassManagerContext } from "@/Context/PassManager/PassManagerStates";
import styles from "@/CSS/PassManager/PassManagerLogin.module.css";
import { useContext } from "react";

export default function PassManageLogin({ login, close }) {
  let { setLogged } = useContext(PassManagerContext);

  const loginUser = (e) => {
    e.preventDefault();
    setLogged(true);
  };

  let cls = login ? styles.active : "";
  return (
    <>
      <div
        className={`${styles.container} ${cls}`}
        onClick={() => close(false)}
      ></div>
      <div className={`${styles.form} ${cls}`}>
        <h1>Login Please</h1>
        <form onSubmit={loginUser}>
          <div className={styles.inp}>
            <label htmlFor="lemail">Email Address</label>
            <input placeholder="Type your Email" type="email" id="lemail" />
          </div>
          <div className={styles.inp}>
            <label htmlFor="lpassw">Password</label>
            <input
              placeholder="Type your Password"
              type="password"
              id="lpassw"
            />
          </div>
          <div className={styles.inp_check}>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Login Me for 24 hours</label>
          </div>
          <div className={styles.btns}>
            <button type="reset">Cancel</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
