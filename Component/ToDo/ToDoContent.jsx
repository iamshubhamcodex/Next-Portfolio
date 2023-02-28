import styles from "@/CSS/ToDo/ToDoContent.module.css";
import host from "@/lib/var";
import { useEffect, useRef, useState } from "react";

export default function ToDoContent({ currCat, catArr }) {
  const [showAdd, setShowAdd] = useState(false);
  const [taskArr, setTaskArr] = useState();
  const taskTitle = useRef();
  const taskDesc = useRef();

  useEffect(() => {
    updateTasks();
  }, [currCat]);

  const addingTask = async (title, description) => {
    let response = await fetch(`${host}api/ToDo/addTask`, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
        belongs: currCat,
      }),
      headers: { Accept: "*/*", "Content-Type": "application-json" },
    });
    let data = await response.json();
    if (data.success) {
      updateTasks();
      taskTitle.current.value = "";
      taskDesc.current.value = "";
      setShowAdd(false);
    } else {
      console.log(data.error);
    }
  };
  const updateTasks = async () => {
    let response = await fetch(`${host}api/ToDo/getTask`, {
      method: "POST",
      body: JSON.stringify({ belongs: currCat }),
      headers: { Accept: "*/*", "Content-Type": "application-json" },
    });
    let data = await response.json();

    if (data.success) {
      setTaskArr(data.tasks);
    } else {
      console.log(data.error);
    }
  };
  const delTask = async (val, name) => {
    let response = await fetch(`${host}api/ToDo/deleteTask`, {
      method: "POST",
      body: JSON.stringify({ id: val }),
      headers: { Accept: "*/*", "Content-Type": "application-json" },
    });
    let data = await response.json();
    if (data.success) {
      await updateTasks();
    } else {
      console.log(data.error);
    }
  };
  const addTask = (e) => {
    addingTask(taskTitle.current.value, taskDesc.current.value);
  };

  return (
    <>
      <div className={styles.content}>
        <h1>{currCat} Task</h1>
        <div
          className={styles.add}
          onClick={() => {
            setShowAdd(!showAdd);
          }}
        >
          <svg viewBox="0 0 512 512" fill="currentcolor">
            <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
          </svg>
        </div>
        <div
          className={
            showAdd
              ? `${styles.addContainer} ${styles.active}`
              : styles.addContainer
          }
        >
          <div className={styles.inp}>
            <label htmlFor="title">Title: </label>
            <input
              required
              type="text"
              id="title"
              ref={taskTitle}
              placeholder="Enter Title here..."
            />
          </div>
          <div className={styles.inp}>
            <label htmlFor="desc">Description: </label>
            <input
              required
              type="text"
              title="desc"
              ref={taskDesc}
              placeholder="Enter Description here..."
            />
          </div>
          <button
            className="btn"
            onClick={() => {
              addTask();
            }}
          >
            Add Task
          </button>
        </div>
        <div className={styles.taskContainer}>
          {taskArr &&
            taskArr.map((k, i) => {
              return (
                <div key={i} className={styles.task}>
                  <div className={styles.tas}>
                    <div className={styles.title}>{k.title}</div>
                    <div className={styles.desc}>{k.description}</div>
                  </div>
                  <div className={styles.del} onClick={() => delTask(k._id)}>
                    <svg viewBox="0 0 24 24" fill="currentcolor">
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
