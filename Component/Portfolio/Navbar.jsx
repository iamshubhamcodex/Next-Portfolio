import { useEffect, useState } from "react";
import styles from "../../CSS/Portfolio/Navbar.module.css";
import Logo from "../../Assets/Portfolio/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const NavItem = ({ set, name, id }) => {
  return (
    <a
      href={"#" + name.toLowerCase()}
      className={id === "m" ? styles.navItemm : styles.navItem}
      onClick={() => (id === "m" ? set({ transform: "translateX(100%)" }) : "")}
    >
      {name}
    </a>
  );
};

const NavItems = ({ id, set }) => {
  let navArr = ["Home", "About", "Skills", "Work", "Contact"];
  return (
    <>
      {navArr.map((k, i) => (
        <NavItem set={set} id={id} name={k} key={i} />
      ))}
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
      if (
        e.target.className === "fa-solid fa-bars" ||
        e.target.className === "bars navItem"
      ) {
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
