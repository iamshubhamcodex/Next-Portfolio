import Image from "next/image";
import styles from "@/CSS/Notes/NotesMain.module.css";
import Link from "next/link";
import ReactImage from "@/Assets/Notes/React.webp";
import JSImage from "@/Assets/Notes/JavaScript.png";
import HTMLCSSImage from "@/Assets/Notes/HtmlCss.png";

export default function NotesMain() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.noteContainer}>
          <h1>Available Notes</h1>
          <div className={styles.notes}>
            <Link
              href="/Projects/Notes/HtmlCss/introduction-to-html"
              className={styles.note}
            >
              <Image src={HTMLCSSImage} alt="React" />
              <p>
                Learn HTML CSS from basic. Also build awesome project with this
                guide
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
