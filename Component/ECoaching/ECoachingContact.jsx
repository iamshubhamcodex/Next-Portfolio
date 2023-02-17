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
        <h1>Write Me a Message</h1>
        <p>Fill out the form below and I will respond as soon as possible</p>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="E-Mail" />
        <input type="text" placeholder="How did you hear about us" />
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
