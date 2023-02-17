import Image from "next/image";
import ContactBg from "../../Assets/Portfolio/contactBg.png";
import styles from "../../CSS/Portfolio/Contact.module.css";

const Contact = (props) => {
  return (
    <>
      <div className={styles.contact} id={props.id}>
        <h1>Contact Me</h1>
        <div className={styles.cont}>
          <p className={styles.p}>
            Please let me <span className={styles.know}>Know</span> if you find
            me capable of letting me work with you or in your
            <span className={styles.pro}> Project </span>, You can
            <span className={styles.hire}> Hire </span>me by contacting me
            through:-
          </p>
          <div className={styles.ids}>
            <p className={styles.email}>
              <span>Email:-</span> shubhamsinghcodex@gmail.com
            </p>
            <p className={styles.wame}>
              <span>WhatsApp:-</span> +91 9685348243
            </p>
          </div>
        </div>
        <div className={styles.img}>
          <Image src={ContactBg} alt="Contact Background" />
        </div>
      </div>
    </>
  );
};

export default Contact;
