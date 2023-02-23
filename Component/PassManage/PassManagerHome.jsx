import styles from "@/CSS/PassManager/PassManagerHome.module.css";
import Image from "next/image";
import EncryptPNG from "@/Assets/PassManager/encrypt.png";
import PasswordPNG from "@/Assets/PassManager/password.png";
import Link from "next/link";

export default function PassManagerHome() {
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
            <Link
              href="/Projects/PassManager/Registeration"
              className={styles.regis}
            >
              Register with Us
            </Link>
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
