import { useContext, useEffect } from "react";
import Logo from "../../Assets/ECoaching/logo.png";
import { ECoachingContext } from "@/Context/ECoaching/ECoachingStates";
import styles from "../../CSS/ECoaching/ECoachingHome.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ECoachingHome() {
  const { mob, setNavActive, logged } = useContext(ECoachingContext);
  useEffect(() => {
    setNavActive("Home");

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className={styles.home}>
        <div className={styles.quotes}>
          <h1>"SUCCESS DOESN'T COME TO YOU, YOU GO TO IT"</h1>
          <p>
            If you are not willing to risk the usual, you will have to settle
            for the ordianry. <br />
            Get Started and Give a Wiing to you Dream with us.
          </p>
          {!logged && (
            <Link
              className={styles.regisbutton}
              href={"/Projects/ECoaching/Register"}
            >
              Register with Us
            </Link>
          )}
        </div>
        {!mob && (
          <div className={styles.logoImage}>
            <Image src={Logo} alt="" />
          </div>
        )}
      </div>
    </>
  );
}
