import styles from "@/CSS/ToDo/ToDoSidebar.module.css";
import host from "@/lib/var";
import { useEffect, useRef, useState } from "react";

export default function ToDoSidebar({
  currCat,
  setCurrCat,
  catArr,
  setCatArr,
}) {
  const [showAdd, setShowAdd] = useState(false);
  const catAdd = useRef();

  useEffect(() => {
    updateCats();
  }, []);

  const addingCat = async (val) => {
    let response = await fetch(`${host}api/ToDo/addCat`, {
      method: "POST",
      body: JSON.stringify({ name: val }),
      headers: { Accept: "*/*", "Content-Type": "application-json" },
    });
    let data = await response.json();
    if (data.success) {
      updateCats();
      setShowAdd(false);
    } else {
      console.log(data.error);
    }
  };
  const updateCats = async () => {
    let response = await fetch(`${host}api/ToDo/getCat`, {
      method: "POST",
      headers: { Accept: "*/*", "Content-Type": "application-json" },
    });
    let data = await response.json();
    if (data.success) {
      setCatArr(data.cats);
    } else {
      console.log(data.error);
    }
  };
  const delCat = async (val, name) => {
    let response = await fetch(`${host}api/ToDo/deleteCat`, {
      method: "POST",
      body: JSON.stringify({ id: val }),
      headers: { Accept: "*/*", "Content-Type": "application-json" },
    });
    let data = await response.json();
    if (data.success) {
      await updateCats();
      if (name === currCat) setCurrCat("Daily");
    } else {
      console.log(data.error);
    }
  };
  const addCat = (e) => {
    e.preventDefault();
    addingCat(catAdd.current.value);
  };

  return (
    <>
      <div className={styles.sidebar}>
        <div
          className={showAdd ? `${styles.head} ${styles.active}` : styles.head}
        >
          Categories
          <p
            className={styles.bar}
            onClick={() => {
              setShowAdd(!showAdd);
              catAdd.current.focus();
            }}
          >
            <svg viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
              ></path>
            </svg>
          </p>
          <form onSubmit={addCat}>
            <input type="text" ref={catAdd} />
          </form>
        </div>
        <div className={styles.categories}>
          <div
            className={
              currCat === "Daily"
                ? `${styles.category} ${styles.active}`
                : styles.category
            }
          >
            <p onClick={() => setCurrCat("Daily")}>Daily</p>
            <div className={styles.del}>
              <svg fill="currentcolor" viewBox="0 0 24 24">
                <path d="M7 2v2h10V2H7ZM3 6h18v2h-2v13h-2V8H7v11h7l1.2 2H5V8H3V6Z"></path>
                <path d="M9 11h2v4l-2 1.2V11Zm4 .017h2V15l-2 1.2v-5.183Z"></path>
              </svg>
            </div>
          </div>
          <div
            className={
              currCat === "Weekly"
                ? `${styles.category} ${styles.active}`
                : styles.category
            }
          >
            <p onClick={() => setCurrCat("Weekly")}>Weekly</p>
            <div className={styles.del}>
              <svg fill="currentcolor" viewBox="0 0 24 24">
                <path d="M7 2v2h10V2H7ZM3 6h18v2h-2v13h-2V8H7v11h7l1.2 2H5V8H3V6Z"></path>
                <path d="M9 11h2v4l-2 1.2V11Zm4 .017h2V15l-2 1.2v-5.183Z"></path>
              </svg>
            </div>
          </div>
          <div
            className={
              currCat === "General"
                ? `${styles.category} ${styles.active}`
                : styles.category
            }
          >
            <p onClick={() => setCurrCat("General")}>General</p>
            <div className={styles.del}>
              <svg fill="currentcolor" viewBox="0 0 24 24">
                <path d="M7 2v2h10V2H7ZM3 6h18v2h-2v13h-2V8H7v11h7l1.2 2H5V8H3V6Z"></path>
                <path d="M9 11h2v4l-2 1.2V11Zm4 .017h2V15l-2 1.2v-5.183Z"></path>
              </svg>
            </div>
          </div>
          {catArr &&
            catArr.map((k, i) => {
              return (
                <div
                  key={i}
                  className={
                    currCat === k.name
                      ? `${styles.category} ${styles.active}`
                      : styles.category
                  }
                >
                  <p onClick={() => setCurrCat(k.name)}>{k.name}</p>
                  <div
                    className={styles.del}
                    onClick={() => delCat(k._id, k.name)}
                  >
                    <svg fill="currentcolor" viewBox="0 0 24 24">
                      <path d="M7 2v2h10V2H7ZM3 6h18v2h-2v13h-2V8H7v11h7l1.2 2H5V8H3V6Z"></path>
                      <path d="M9 11h2v4l-2 1.2V11Zm4 .017h2V15l-2 1.2v-5.183Z"></path>
                    </svg>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
