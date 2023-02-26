import NotesNavbar from "@/Component/Notes/NotesNavbar";
import NotesContent from "@/Component/Notes/NotesContent";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DynamicNotes() {
  const [mob, setMob] = useState(false);
  const router = useRouter();
  let { slug, course } = router.query;

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
      <NotesContent query={slug} name={course} />
    </>
  );
}
