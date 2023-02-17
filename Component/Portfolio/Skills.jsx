import styles from "../../CSS/Portfolio/Skills.module.css";

const Skills = (props) => {
  return (
    <>
      <div className={styles.skills} id={props.id}>
        <h1>Skills</h1>
        <div className={styles.sides}>
          <ul className={styles.lists}>
            <li>Core Java</li>
            <li>DSA and Algo</li>
            <li>Competetive Java</li>
            <li>Java Swing</li>
            <li>Problem Solving</li>
          </ul>
          <div className={styles.hr}>hi</div>
          <ul className={styles.bars}>
            <li className={styles.bar} style={{ width: "38vw" }}>
              95%
            </li>
            <li className={styles.bar} style={{ width: "32vw" }}>
              80%
            </li>
            <li className={styles.bar} style={{ width: "30vw" }}>
              75%
            </li>
            <li className={styles.bar} style={{ width: "20vw" }}>
              50%
            </li>
            <li className={styles.bar} style={{ width: "28vw" }}>
              70%
            </li>
          </ul>
        </div>
        <p className={styles.learn}>
          I also belive in learning all the time and increasing my knowledge on
          the Java and further extend my Skills to other languages.
        </p>
      </div>
    </>
  );
};

export default Skills;
