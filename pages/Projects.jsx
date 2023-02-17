import Link from "next/link";
import { useEffect, useRef } from "react";

const Projects = () => {
  const link = useRef();
  useEffect(() => {
    link.current.click();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <p>Nothing Here. Wait</p>
      <Link ref={link} href="/"></Link>
    </>
  );
};

export default Projects;
