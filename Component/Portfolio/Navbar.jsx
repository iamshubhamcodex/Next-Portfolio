import { useEffect, useState } from "react";
import styles from "../../CSS/Portfolio/Navbar.module.css";
import Logo from "../../Assets/Portfolio/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const NavItem = (props) => {
  const call = () => {
    if (props.id === "m") {
      props.set({
        transform: "translateX(100%)",
      });
    }
  };

  let st = props.id === "m" ? styles.navItemm : styles.navItem;
  return (
    <>
      <a
        href={"#" + props.name.toLowerCase()}
        className={st}
        onClick={() => call()}
      >
        {props.name}
      </a>
    </>
  );
};

const NavItems = (props) => {
  const router = useRouter();

  return (
    <>
      <NavItem set={props.set} id={props.id} name="Home" />
      <NavItem set={props.set} id={props.id} name="About" />
      <NavItem set={props.set} id={props.id} name="Skills" />
      <NavItem set={props.set} id={props.id} name="Work" />
      <Link href="/Notes" className={styles.navItemm}>
        Notes
      </Link>
      <Link href="/Projects/ECoaching" className={styles.navItemm}>
        ECoaching
      </Link>
      <NavItem set={props.set} id={props.id} name="Contact" />
    </>
  );
};

export default function Navbar() {
  const [mob, setMob] = useState(false);
  const [style, setStyle] = useState({
    transform: "translateX(100%)",
  });

  useEffect(() => {
    if (window.innerWidth < 680) setMob(true);
    window.addEventListener("resize", () => {
      if (window.innerWidth < 680) setMob(true);
      else setMob(false);
    });

    window.addEventListener("click", (e) => {
      if (e.target.className === "fa-solid fa-bars") {
        setStyle({
          transform: "translateX(0%)",
        });
      } else if (e.target.className !== "navModal")
        setStyle({
          transform: "translateX(100%)",
        });
    });

    //eslint-disable-next-line
  }, []);

  return (
    <div className={styles.navbar}>
      <Link className={styles.logo} href="/">
        {/* <img src={Logo} alt="Logo" className="logoImg" /> */}
        <Image className={styles.logoImg} alt="Logo" src={Logo} />
      </Link>
      <div className={styles.navItems}>
        {mob && (
          <>
            <div className={`${styles.bars} ${styles.navItem}`}>
              <i className="fa-solid fa-bars"></i>
            </div>
            <div className={styles.navModal} style={style}>
              <div className={styles.close}>
                <i className="fa-solid fa-xmark"></i>
              </div>
              <NavItems set={setStyle} id="m" />
            </div>
          </>
        )}

        {!mob && <NavItems id="" />}
      </div>
    </div>
  );
}
