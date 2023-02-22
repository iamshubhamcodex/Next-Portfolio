import NotesMain from "@/Component/Notes/NotesMain";
import NotesNavbar from "@/Component/Notes/NotesNavbar";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const Notes = () => {
  const [mob, setMob] = useState(false);

  useEffect(() => {
    const setAcc = () => {
      setMob(window.innerWidth <= 720);
    };
    window.addEventListener("resize", () => setAcc());
    setAcc();
  }, []);

  return (
    <>
      <Head>
        <title>Notes | Project</title>
      </Head>
      <div style={{ minWidth: "420px" }}>
        <NotesNavbar isMobile={mob} />
        <NotesMain />
      </div>
    </>
  );
};

export default Notes;
