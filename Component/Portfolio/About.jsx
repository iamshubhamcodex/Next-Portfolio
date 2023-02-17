import React from "react";
import styles from "../../CSS/Portfolio/About.module.css";

const About = (props) => {
  return (
    <>
      <div className={styles.about} id={props.id}>
        <div className={styles.aboutMe}>
          <h1>About Me</h1>
          <h3>Hi There,</h3>
          <p>
            <span className={styles.space}></span>I am Shubham Singh, B.Tech.
            CSE student at LNCT Jabalpur College. <br />
            <br />
            I have learned Core Java, Advance Java Concepts, Java GUI (Swing
            Framework), DSA and Algorithm. <br />
            <br />I have solved many problems on HackerRank, HackerEarth website
            in Java and earned 5-star bedge. <br />
            <br />I also made many Projects on my own in Core Java, Java Swing
            and etc.
            <span className={styles.thank}>:-Thank You for your Time</span>
          </p>
        </div>
        <p to="skills" offset={-75} className={styles.down1}>
          <i className="fa-solid fa-chevron-down"></i>
        </p>
      </div>
    </>
  );
};

export default About;
