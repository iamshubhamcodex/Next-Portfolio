import styles from "@/CSS/PassManager/PassManageAdd.module.css";
import { useEffect, useRef, useState } from "react";

export default function PassManageDetail({
  details,
  setDetails,
  selected,
  cred,
}) {
  const [credArr, setCredArr] = useState();
  const [copied, setCopied] = useState(false);

  const copyContent = async (text) => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const array = [];
  for (let i = 0; i < 7; i++) array[i] = useRef();

  useEffect(() => {
    if (cred) setCredArr(Object.keys(cred));
  }, [cred]);

  return (
    <>
      <div className={styles.container}>
        <div
          className={copied ? `${styles.copy} ${styles.active}` : styles.copy}
        >
          Copied
        </div>
        {details && (
          <div className={styles.back} onClick={() => setDetails(false)}></div>
        )}
        <div
          className={
            details ? `${styles.addPage} ${styles.active}` : styles.addPage
          }
        >
          <div className={styles.header}>
            {selected.slice(0, selected.length - 1)} Details
          </div>
          <div className={styles.body}>
            {credArr &&
              credArr.map((k, i) => {
                if (k !== "_id")
                  return (
                    <div key={i} className={styles.inp}>
                      <label
                        htmlFor={k.toLowerCase()}
                        style={{ textTransform: "capitalize" }}
                      >
                        {k}
                      </label>
                      <p
                        style={{ cursor: "pointer" }}
                        ref={array[i]}
                        placeholder={"Add " + k + "..."}
                        type="text"
                        className={styles.input}
                        id={k.toLowerCase()}
                        onClick={() => copyContent(cred[k])}
                      >
                        {cred[k]}
                      </p>
                    </div>
                  );
              })}
          </div>
          <div className={styles.btns}>
            <p className={styles.close} onClick={() => setDetails(false)}>
              Close
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
