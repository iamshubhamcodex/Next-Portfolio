import styles from "@/CSS/PassManager/PassManagerMain.module.css";
import { useContext } from "react";
import { PassManagerContext } from "@/Context/PassManager/PassManagerStates";

export default function PassManagerMain({ setLogged }) {
  let { smMob, text } = useContext(PassManagerContext);
  return (
    <>
      <div className={styles.main}>
        <header>
          <div className={styles.adds}>
            <div className={styles.add}>
              <svg viewBox="0 0 24 24" stroke="10" fill="currentcolor">
                <path d="M13.2 2H11v9H2v2.2h9V22h2.2v-8.8H22V11h-8.8V2Z"></path>
              </svg>
              <p>Add New</p>
            </div>
            <p style={{ fontSize: "2rem" }}>{text}</p>
          </div>
          <div className={styles.profiles}>
            <p className={styles.profile} onClick={() => setLogged(false)}>
              LogOut
            </p>
          </div>
        </header>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <div className={styles.name}>Item Name</div>
            {!smMob && (
              <>
                <div className={styles.lastu}>Last Used</div>
                <div className={styles.category}>Category</div>
              </>
            )}
          </div>
          <div className={styles.hr}></div>
          <div className={styles.items}>
            <div className={styles.item}>
              <div className={styles.item_name}>
                <div className={styles.logo}>Am</div>
                <div className={styles.details}>
                  <div className={styles.name}>Amazon</div>
                  <div className={styles.email}>
                    shubhamsinghcodex@gmail.com
                  </div>
                </div>
              </div>
              {!smMob && (
                <>
                  <div className={styles.lastu}>Not Used</div>
                  <div className={styles.category}>No Category</div>
                </>
              )}
            </div>
            <div className={styles.item}>
              <div className={styles.item_name}>
                <div className={styles.logo}>Go</div>
                <div className={styles.details}>
                  <div className={styles.name}>Google</div>
                  <div className={styles.email}>
                    shubhamsinghcodex@gmail.com
                  </div>
                </div>
              </div>
              {!smMob && (
                <>
                  <div className={styles.lastu}>Not Used</div>
                  <div className={styles.category}>No Category</div>{" "}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
