import React, { useContext } from "react";
import ContactBg from "@/Assets/ECoaching/contactBg.png";
import { ECoachingContext } from "@/Context/ECoaching/ECoachingStates";
import styles from "@/CSS/ECoaching/ECoachingContact.module.css";
import Image from "next/image";

const Contact = () => {
  let { mob } = useContext(ECoachingContext);
  return (
    <div className={styles.contact}>
      {!mob && <Image src={ContactBg} alt="" />}
      <div className={styles.forms}>
        <h1>Contact with Us</h1>
        <p>
          You can fill out the form Or You can contact{" "}
          <strong>Mohan Sir</strong> through:
        </p>
        <div className={styles.sir}>
          <strong>
            <label htmlFor="mob">Mobile: </label>
            <span>+91 9630025756</span>
          </strong>
          <strong>
            <label htmlFor="email">Email: </label>
            <a href="mailto:mohanhaldkar237@gmail.com">
              mohanhaldkar237@gmail.com
            </a>
          </strong>
        </div>
        <div className={styles.or}>{/* <label>OR</label> */}</div>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="E-Mail" />
        <textarea
          className={styles.area}
          cols="30"
          rows="6"
          placeholder="What can I help you with?"
        ></textarea>
        <button>Send Me</button>
      </div>
    </div>
  );
};

export default Contact;
