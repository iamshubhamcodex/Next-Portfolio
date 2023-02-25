import NotesNavbar from "@/Component/Notes/NotesNavbar";
import NotesContent from "@/Component/Notes/NotesContent";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { query } from "express-validator";

export default function DynamicNotes() {
  const [mob, setMob] = useState(false);
  const router = useRouter();
  let { slug } = router.query;

  useEffect(() => {
    const setAcc = () => {
      setMob(window.innerWidth <= 720);
    };
    window.addEventListener("resize", () => setAcc());
    setAcc();
  }, []);
  return (
    <>
      <NotesNavbar isMobile={mob} />
      <NotesContent query={slug} name="React" />
    </>
  );
}
