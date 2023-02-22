import styles from "@/CSS/Notes/NotesNavbar.module.css";
import Link from "next/link";
import { useState } from "react";

export default function NotesNavbar({ isMobile }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={styles.navContainer}>
      <div className={styles.nav}>
        <Link href="../" className={styles.logo}>
          Notes
        </Link>
        {!isMobile && (
          <div className={styles.menus}>
            <Link
              href="/Projects/Notes/React/introduction-to-react"
              className={styles.items}
            >
              React
            </Link>
          </div>
        )}
        {isMobile && !showMenu && (
          <i
            onClick={() => setShowMenu(true)}
            style={{ cursor: "pointer" }}
            className="fa-solid fa-bars"
          ></i>
        )}
        {isMobile && showMenu && (
          <i
            onClick={() => setShowMenu(false)}
            style={{ cursor: "pointer" }}
            className="fa-solid fa-x"
          ></i>
        )}
        {isMobile && (
          <div
            className={
              showMenu
                ? `${styles.navMob} ${styles.active}`
                : `${styles.navMob}`
            }
          >
            <Link href="/Projects/Notes/React/introduction-to-react">
              React
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
