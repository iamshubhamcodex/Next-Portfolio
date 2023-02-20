import styles from "@/CSS/PassManager/PassManagerHome.module.css";
import data from "@/lib/data.json";
import { useState } from "react";

export default function PassManager() {
  const [copied, setCopied] = useState(false);

  const copyContent = async (text, dom) => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
    try {
      await navigator.clipboard.writeText(text);
      console.log("Content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  function Card({ obj }) {
    let objArr = Object.keys(obj.detail);
    return (
      <>
        <div className={styles.card}>
          <div className={styles.title}>{obj.title}</div>
          <table>
            <tbody>
              {objArr.map((key, id) => {
                return (
                  <tr key={id}>
                    <td>{key}:</td>
                    <td>{obj.detail[key]}</td>
                    <td
                      className={styles.copy}
                      onClick={() => copyContent(obj.detail[key])}
                    >
                      COPY
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className={styles.delete}>DELETE</div>
        </div>
      </>
    );
  }

  return (
    <div className={styles.home}>
      {data.map((key, id) => {
        return <Card key={id} obj={key} />;
      })}
      {
        <div
          className={
            copied ? `${styles.active} ${styles.copied}` : `${styles.copied}`
          }
        >
          COPIED
        </div>
      }
    </div>
  );
}
