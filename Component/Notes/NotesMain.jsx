import Image from "next/image";
import styles from "@/CSS/Notes/NotesMain.module.css";
import Link from "next/link";
import ReactImage from "@/Assets/Notes/React.webp";
import JSImage from "@/Assets/Notes/JavaScript.png";
import HTMLImage from "@/Assets/Notes/Html.png";
import CSSImage from "@/Assets/Notes/Css.png";

export default function NotesMain() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.noteContainer}>
          <h1>Available Notes</h1>
          <div className={styles.notes}>
            <Link
              href="/Projects/Notes/Html/introduction-to-html"
              className={styles.note}
            >
              <Image src={HTMLImage} alt="HTML" />
              <p>
                Learn HTML from basic. Also build awesome project with this
                guide
              </p>
            </Link>
            <Link
              href="/Projects/Notes/Css/introduction-to-css"
              className={styles.note}
            >
              <Image src={CSSImage} alt="CSS" />
              <p>
                Learn CSS from basic. Also build awesome project with this guide
              </p>
            </Link>
            <Link
              href="/Projects/Notes/React/introduction-to-react"
              className={styles.note}
            >
              <Image src={ReactImage} alt="React" />
              <p>
                Learn React from Scratch. Also build awesome project with the
                guide
              </p>
            </Link>
          </div>
        </div>
        <div className={styles.noteContainer}>
          <h1>UpComing Notes</h1>
          <div className={`${styles.notes} ${styles.disabled}`}>
            <div className={styles.note}>
              <Image src={JSImage} alt="JavaScript" />
              <p>
                Learn JavaScript from Scratch. Also build awesome project with
                the guide
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
