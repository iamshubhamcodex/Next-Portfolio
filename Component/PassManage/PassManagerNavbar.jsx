import styles from "@/CSS/PassManager/PassManagerNavbar.module.css";
import Link from "next/link";
import { useContext } from "react";
import { PassManagerContext } from "@/Context/ChatApp/PassManager/PassManagerStates";

export default function PassManagerNavbar() {
  let { setLogin, login, regis, setRegis } = useContext(PassManagerContext);
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Link href="/Projects/PassManager" className={styles.logo}>
          PassManager
        </Link>
        <div className={styles.logreg}>
          <p
            onClick={() => {
              setRegis(false);
              setLogin(!login);
            }}
            className={styles.login}
          >
            Login
          </p>
          <hr />
          <p
            onClick={() => {
              setLogin(false);
              setRegis(!regis);
            }}
            className={styles.regis}
          >
            Register
          </p>
        </div>
      </div>
    </div>
  );
}
