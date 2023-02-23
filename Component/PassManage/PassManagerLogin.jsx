import styles from "@/CSS/PassManager/PassManagerLogin.module.css";

export default function PassManageLogin({ login, close }) {
  let cls = login ? styles.active : "";
  return (
    <>
      <div
        className={`${styles.container} ${cls}`}
        onClick={() => close(false)}
      ></div>
      <div className={`${styles.form} ${cls}`}>
        <h1>Login Please</h1>
        <form>
          <div className={styles.inp}>
            <label htmlFor="email">Email Address</label>
            <input placeholder="Type your Email" type="email" id="email" />
          </div>
          <div className={styles.inp}>
            <label htmlFor="passw">Password</label>
            <input
              placeholder="Type your Password"
              type="password"
              id="passw"
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
