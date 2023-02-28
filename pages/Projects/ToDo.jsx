import ToDoContent from "@/Component/ToDo/ToDoContent";
import ToDoNavbar from "@/Component/ToDo/ToDoNavbar";
import ToDoSidebar from "@/Component/ToDo/ToDoSidebar";
import Head from "next/head";
import { useState } from "react";

export default function ToDo() {
  const [currCat, setCurrCat] = useState("Daily");
  const [catArr, setCatArr] = useState();
  return (
    <>
      <Head>
        <title>ToDo | Projects</title>
      </Head>
      <div style={{ display: "flex", position: "relative", height: "100vh" }}>
        <ToDoNavbar />
        <ToDoSidebar
          catArr={catArr}
          setCatArr={setCatArr}
          currCat={currCat}
          setCurrCat={setCurrCat}
        />
        <ToDoContent catArr={catArr} currCat={currCat} />
      </div>
    </>
  );
}
