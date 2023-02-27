import { PassManagerContext } from "@/Context/PassManager/PassManagerStates";
import styles from "@/CSS/PassManager/PassManagerSidebar.module.css";
import { useContext, useEffect, useState } from "react";

export default function PassManageSidebar() {
  const [closeSidebar, setCloseSidebar] = useState(false);
  let { mob, selected, setSelected } = useContext(PassManagerContext);

  useEffect(() => {
    setCloseSidebar(mob);
  }, [mob]);

  return (
    <div className={`${styles.container} ${closeSidebar ? styles.short : ""}`}>
      <div className={styles.sidebar}>
        <div className={styles.search}>
          <p
            onClick={() => {
              setCloseSidebar(!closeSidebar);
              console.log("clicked");
            }}
            className={styles.i}
          >
            <svg viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
              ></path>
            </svg>
          </p>
          <input id="search" type="text" placeholder="Search..." />
          <label
            style={{
              minHeight: "100%",
              minWidth: "5rem",
            }}
            htmlFor="search"
          >
            <svg viewBox="0 0 512 512">
              <path
                fill="currentColor"
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
              ></path>
            </svg>
          </label>
        </div>
        <div
          onClick={() => setSelected("Logins")}
          className={
            selected === "Logins"
              ? `${styles.ids} ${styles.active}`
              : styles.ids
          }
        >
          <svg viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
            ></path>
          </svg>
          <p>Logins</p>
        </div>
        <div
          onClick={() => setSelected("Notes")}
          className={
            selected === "Notes" ? `${styles.ids} ${styles.active}` : styles.ids
          }
        >
          <svg viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H288V352c0-17.7 14.3-32 32-32h80V96c0-8.8-7.2-16-16-16H64zM288 480H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V320v5.5c0 17-6.7 33.3-18.7 45.3l-90.5 90.5c-12 12-28.3 18.7-45.3 18.7H288z"
            ></path>
          </svg>
          <p>Notes</p>
        </div>
        <div
          onClick={() => setSelected("IDs")}
          className={
            selected === "IDs" ? `${styles.ids} ${styles.active}` : styles.ids
          }
        >
          <svg aria-hidden="true" viewBox="0 0 576 512">
            <path
              fill="currentColor"
              d="M528 160V416c0 8.8-7.2 16-16 16H320c0-44.2-35.8-80-80-80H176c-44.2 0-80 35.8-80 80H64c-8.8 0-16-7.2-16-16V160H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM272 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm104-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z"
            ></path>
          </svg>
          <p>IDs</p>
        </div>
        <div
          onClick={() => setSelected("Generals")}
          className={
            selected === "Generals"
              ? `${styles.ids} ${styles.active}`
              : styles.ids
          }
        >
          <svg viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
            ></path>
          </svg>
          <p>Generals</p>
        </div>
      </div>
    </div>
  );
}
