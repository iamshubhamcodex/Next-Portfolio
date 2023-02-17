import React, { useEffect, useRef, useState } from "react";
import styles from "../../CSS/Portfolio/Work.module.css";

export default function Work(props) {
  const [json, setJson] = useState([]);
  const Card = (props) => {
    const { title, span, made, text, hrefP } = props.val;
    return (
      <>
        <div className={styles.card}>
          <div className={styles.hover}>
            <h3 className={styles.tit}>{title}</h3>
            <p className={styles.text}>
              This is a <span>{span}</span>
              {made}
              <br />
              {text}
            </p>
            <p>Google</p>
            <button
              onClick={() => {
                a.current.click();
              }}
            >
              View Code on Github
            </button>
          </div>
          {/* <img src={img} alt="" /> */}
        </div>
      </>
    );
  };

  const href = "https://github.com/iamshubhamcodex/JavaProjects/tree/main/";
  return (
    <>
      <div className={styles.work} id={props.id}>
        <h1>Works</h1>
        <div className={styles.cards}>
          {json.map((j, id) => {
            return <Card idd={id} val={j} />;
          })}
        </div>
      </div>
    </>
  );
}
