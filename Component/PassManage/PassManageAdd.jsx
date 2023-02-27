import styles from "@/CSS/PassManager/PassManageAdd.module.css";
import { useRef } from "react";
import passContext from "./PassManageContext";

export default function PassManageAdd({
  showAdd,
  setShowAdd,
  selected,
  updateUser,
}) {
  let pc = passContext[selected.toLowerCase()];

  const array = [];

  for (let i = 0; i < 6; i++) array[i] = useRef();

  const addInput = () => {
    let obj = {};
    obj[selected.toLowerCase()] = {};
    for (let j = 0; j < pc.length; j++) {
      obj[selected.toLowerCase()][pc[j].toLowerCase()] = array[j].current.value;
    }
    obj["what"] = selected.toLowerCase();
    updateUser(obj);
    clearInput();
  };
  const clearInput = () => {
    for (let i = 0; i < 6; i++)
      if (array[i].current) array[i].current.value = "";
  };
  return (
    <>
      <div className={styles.container}>
        {showAdd && (
          <div className={styles.back} onClick={() => setShowAdd(false)}></div>
        )}
        <div
          className={
            showAdd ? `${styles.addPage} ${styles.active}` : styles.addPage
          }
        >
          <div className={styles.header}>
            Add a {selected.slice(0, selected.length - 1)}
          </div>
          <div className={styles.body}>
            {pc &&
              pc.map((k, i) => {
                return (
                  <div key={i} className={styles.inp}>
                    <label htmlFor={k.toLowerCase()}>{k}</label>
                    <input
                      ref={array[i]}
                      className={styles.input}
                      placeholder={"Add " + k + "..."}
                      type="text"
                      id={k.toLowerCase()}
                    />
                  </div>
                );
              })}
          </div>
          <div className={styles.btns}>
            <p className={styles.save} onClick={() => addInput()}>
              Save
            </p>
            <p
              className={styles.close}
              onClick={() => {
                setShowAdd(false);
                clearInput();
              }}
            >
              Close
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
