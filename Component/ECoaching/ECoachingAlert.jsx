import React from "react";
import styles from "@/CSS/ECoaching/ECoachingAlert.module.css";

const Alert = (props) => {
  let customStyles = props.succ
    ? { border: "2px solid rgb(10, 150, 0)" }
    : { border: "2px solid rgb(150, 10, 0)" };
  return (
    <div className={styles.alert} style={customStyles}>
      {props.succ && (
        <i
          style={{ color: "rgb(10 150 0)" }}
          className="fa-solid fa-circle-check"
        ></i>
      )}

      {!props.succ && (
        <i
          style={{ color: "rgb(150 10 0)" }}
          className="fa-sharp fa-solid fa-circle-xmark"
        ></i>
      )}
      {props.msg}
    </div>
  );
};

export default Alert;
