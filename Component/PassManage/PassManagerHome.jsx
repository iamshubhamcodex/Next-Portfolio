import styles from "@/CSS/PassManager/PassManagerHome.module.css";
import Image from "next/image";
import EncryptPNG from "@/Assets/PassManager/encrypt.png";
import { PassManagerContext } from "@/Context/PassManager/PassManagerStates";
import { useContext } from "react";

export default function PassManagerHome() {
  let { setRegis } = useContext(PassManagerContext);
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.left}>
          <h1>
            Your <span>Password</span> is
          </h1>
          <h2>
            -only your <span>Password</span>
          </h2>
          <p>
            Keep your password in a secure vault - and simply access them with
            one click from all your Devices and from AnyWhere.
          </p>
          <div className={styles.btn}>
            <p onClick={() => setRegis(true)} className={styles.regis}>
              Register with Us
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.blur}></div>
          <Image src={EncryptPNG} alt="Encryption" />
        </div>
      </div>
    </div>
  );
}
