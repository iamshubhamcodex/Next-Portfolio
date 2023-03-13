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
            I have learned HTML, CSS, JavaScript, React, Express, MongoDB <br />
            <br />
            I am a passionate on Web Devlopment and found MERN Stack to be most
            demanding Language for Web Development. <br />
            <br />
            Thus, I learnt all those and many of the project in MERN Stack.
            <span className={styles.thank}>:-Thank You for your Time</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
