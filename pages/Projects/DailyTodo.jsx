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
      GetTodo(true);
      setTimeout(() => {
        setTodoName("");
      }, 2000);
    }
  };
  const GetTodo = async (score = false) => {
    if (score) {
      setTodoName("Getting Todo...");
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
        localStorage.setItem("todos", JSON.stringify(data.todo));
        setTodoName("");
      }
    } else {
      let todos = localStorage.getItem("todos");
      if (!todos) {
        GetTodo(true);
      } else setTodos(JSON.parse(todos));
    }
  };
  const submitReport = () => {
    let all = document.querySelectorAll('[class*="task"] input:checked');
    SaveScore(all.length);
  };
  const WithDraw = () => {
    SaveScore(-200);
  };
  const greet = () => {
    let date = new Date();
    let hour = date.getHours();

    if (hour >= 6 && hour < 12) {
      return "Good Morning";
    } else if (hour >= 12 && hour < 16) {
      return "Good Afternoon";
    } else if (hour >= 16 && hour < 20) {
      return "Good Evening";
    } else if (hour >= 20 && hour < 24) {
      return "Good Night";
    } else {
      return "Fucking Up!";
    }
  };

  useEffect(() => {
    greet();
    GetTodo();
  }, []);

  return (
    <>
      <Head>
        <title>Daily Todo | Projects</title>
      </Head>
      <div className={styles.body}>
        <div className={styles.todoContainer}>
          <div className={styles.logo}>
            <Image src={Logo} alt="Logo" />
          </div>
          <div className={styles.greet}>Hello🖖 Shubham, {greet()}</div>
          <div className={styles.greet + " " + styles.small}>
            Your Score: {todos?.score}
          </div>

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
                <div className={styles.task} key={i}>
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
