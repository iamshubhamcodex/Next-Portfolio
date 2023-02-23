import styles from "@/CSS/PassManager/PassManagerLogin.module.css";

export default function PassManageRegistration({ regis, close }) {
  let cls = regis ? styles.active : "";
  return (
    <>
      <div
        className={`${styles.container} ${cls}`}
        onClick={() => close(false)}
      ></div>
      <div className={`${styles.form} ${cls}`}>
        <h1>Register Please</h1>
        <form>
          <div className={styles.inp}>
            <label htmlFor="name">Full Name</label>
            <input placeholder="Type your Name" type="text" id="name" />
          </div>
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
          <div className={styles.inp}>
            <label htmlFor="mobile">Mobile Number</label>
            <input
              placeholder="Type your Mobile Number"
              type="text"
              id="mobile"
            />
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
