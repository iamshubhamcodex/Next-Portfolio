import { useContext, useState } from "react";
import { ECoachingContext } from "@/Context/ECoaching/ECoachingStates";
import styles from "../../CSS/ECoaching/ECoachingNavbar.module.css";
import Link from "next/link";

export default function ECoachingNavbar() {
  const { mob, navActive, setNavActive, logged } = useContext(ECoachingContext);
  const [menu, showMenu] = useState(false);

  const NavItems = ({ name }) => {
    let href = "/Projects/ECoaching/" + name;
    if (name === "Home") href = "";
    if (name === "Back Home") href = "/Portfolio";
    return (
      <>
        <Link
          href={href}
          className={
            navActive === name
              ? styles.active + ` ${styles.link}`
              : `${styles.link}`
          }
          onClick={() => {
            showMenu(false);
          }}
        >
          {name}
        </Link>
      </>
    );
  };

  const NavList = () => {
    return (
      <>
        {logged && (
          <>
            <NavItems name="Back Home" />
            <NavItems name="Home" />
            <NavItems name="Courses" />
            {JSON.parse(localStorage.getItem("user")) &&
              JSON.parse(localStorage.getItem("user")).length > 1 && (
                <NavItems name="Dashboard" />
              )}
            {!(
              JSON.parse(localStorage.getItem("user")) &&
              JSON.parse(localStorage.getItem("user")).length > 1
            ) && <NavItems name="Profile" />}
            <NavItems name="Contact" />
            <NavItems name="Log Out" />
          </>
        )}
        {!logged && (
          <>
            <NavItems name="Back Home" />
            <NavItems name="Home" />
            <NavItems name="About" />
            <NavItems name="Register" />
            <NavItems name="Login" />
            <NavItems name="Contact" />
          </>
        )}
      </>
    );
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>E-Coaching</div>
        {!mob && (
          <div className={styles.menus}>
            <NavList />
          </div>
        )}
        {mob && (
          <div className={styles.mobile}>
            <div className="bars" onClick={() => showMenu(!menu)}>
              {!menu && <i className="fa-solid fa-bars"></i>}
              {menu && <i className="fa-solid fa-x"></i>}
            </div>
          </div>
        )}
      </nav>
      {mob && (
        <div className={styles.mobNav + (menu ? ` ${styles.active}` : "")}>
          <NavList />
        </div>
      )}
    </>
  );
}
