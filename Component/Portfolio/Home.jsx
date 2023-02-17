import Image from "next/image";
import avatar from "../../Assets/Portfolio/Avatar.png";
import styles from "../../CSS/Portfolio/Home.module.css";

export default function Home(props) {
  return (
    <>
      <div className={styles.content} id={props.id}>
        <div className={styles.greet}>
          <h1>Hello EveryOne,</h1>
          <h3>
            I’m <span>Shubham</span> <span>Singh</span>
          </h3>
          <p className={styles.idk}>
            I'm pursuing <span>B. Tech. CSE</span>
          </p>
          <a href="#about" className={styles.btn}>
            About Me
            <i className="fa-solid fa-arrow-down"></i>
          </a>
          <div className={styles.icons}>
            <a
              target="blank"
              href="https://linkedin.com/in/iamshubhamcodex"
              className={styles.icon}
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              target="blank"
              href="https://github.com/iamshubhamcodex"
              className={styles.icon}
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              target="blank"
              href="https://instagram.com/shubhamcdx"
              className={styles.icon}
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className={styles.avtar}>
          <Image src={avatar} alt="Hello" />
        </div>
      </div>
    </>
  );
}
