import Head from "next/head";
import Logo from "@/Assets/DailyTodo/logo.png";
import Image from "next/image";
import styles from "@/CSS/DailyTodo/main.module.css";
import host from "@/lib/var";
import { useEffect, useState } from "react";

export default function DailyTodo() {
  const [todoName, setTodoName] = useState();
  const [todos, setTodos] = useState();

  const SaveTodo = async () => {
    setTodoName("Saving...");

    let response = await fetch(host + "api/DailyTodo/todo", {
      method: "Post",
      body: JSON.stringify({ todo: todoName }),
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    if (data.success) {
      setTodoName("Saved Todo");
      GetTodo();

      setTimeout(() => {
        setTodoName("");
      }, 2000);
    }
  };
  const SaveScore = async (score) => {
    setTodoName("Saving...");

    let response = await fetch(host + "api/DailyTodo/todo", {
      method: "Post",
      body: JSON.stringify({ save: "Score", score: score }),
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    if (data.success) {
      setTodoName("Saved Score");
      GetTodo();
      setTimeout(() => {
        setTodoName("");
      }, 2000);
    }
  };
  const GetTodo = async () => {
    let response = await fetch(host + "api/DailyTodo/todo", {
      method: "GET",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    if (data.success) {
      setTodos(data.todo);
    }
  };
  const submitReport = () => {
    let all = document.querySelectorAll('[class*="task"] input:checked');
    SaveScore(all.length);
  };
  const WithDraw = () => {
    SaveScore(-200);
  };
  useEffect(() => {
    GetTodo();
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:400,700"
          rel="stylesheet"
        ></link>
        <title>Daily Todo | Projects</title>
      </Head>
      <div className={styles.body}>
        <div className={styles.todoContainer}>
          <div className={styles.logo}>
            <Image src={Logo} alt="" />
          </div>
          <div className={styles.greet}>Hello 🖖, Good Morning</div>
          <div className={styles.greet}>Your Score: {todos?.score}</div>

          <div className={styles.tasks}>
            <div className={styles.create + " " + styles.input}>
              <input
                value={todoName}
                onChange={(e) => setTodoName((prev) => e.target.value)}
                type="text"
                placeholder="✍️ Add todo..."
              />
              <span
                onClick={SaveTodo}
                style={{ fontSize: 25, margin: " 0 10px", cursor: "pointer" }}
              >
                +
              </span>
            </div>
            {todos?.todo.map((todo, i) => {
              return (
                <div className={styles.task}>
                  <input type="checkbox" name="" id={"check" + i} />
                  <label htmlFor={"check" + i}>{todo}</label>
                </div>
              );
            })}

            <button onClick={submitReport}>Submit Today Report</button>
            {todos?.score >= 200 && (
              <button onClick={WithDraw}>Withdraw Money Rs.200</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
