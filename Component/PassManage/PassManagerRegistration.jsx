import styles from "@/CSS/PassManager/PassManagerLogin.module.css";
import { PassManagerContext } from "@/Context/PassManager/PassManagerStates";
import { useContext, useRef } from "react";

export default function PassManageRegistration({ regis, close }) {
  let { setRegis, addUser } = useContext(PassManagerContext);
  let cls = regis ? styles.active : "";
  let Rname = useRef();
  let Remail = useRef();
  let Rpassword = useRef();
  let Rmobile = useRef();

  const registerUser = (e) => {
    e.preventDefault();
    addUser({
      name: Rname.current.value,
      email: Remail.current.value,
      password: Rpassword.current.value,
      mobile: Rmobile.current.value,
    });
  };
  return (
    <>
      <div
        className={`${styles.container} ${cls}`}
        onClick={() => close(false)}
      ></div>
      <div className={`${styles.form} ${cls}`}>
        <h1>Register Please</h1>
        <form
          onSubmit={(e) => {
            registerUser(e);
          }}
        >
          <div className={styles.inp}>
            <label htmlFor="name">Full Name</label>
            <input
              ref={Rname}
              placeholder="Type your Name"
              type="text"
              id="name"
            />
          </div>
          <div className={styles.inp}>
            <label htmlFor="email">Email Address</label>
            <input
              ref={Remail}
              placeholder="Type your Email"
              type="email"
              id="email"
            />
          </div>
          <div className={styles.inp}>
            <label htmlFor="passw">Password</label>
            <input
              ref={Rpassword}
              placeholder="Type your Password"
              type="password"
              id="passw"
            />
          </div>
          <div className={styles.inp}>
            <label htmlFor="mobile">Mobile Number</label>
            <input
              ref={Rmobile}
              placeholder="Type your Mobile Number"
              type="text"
              id="mobile"
            />
          </div>
          <div className={styles.btns}>
            <button type="reset" onClick={() => setRegis(false)}>
              Cancel
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
