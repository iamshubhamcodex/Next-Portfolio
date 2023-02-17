import About from "@/Component/Portfolio/About";
import Contact from "@/Component/Portfolio/Contact";
import Footer from "@/Component/Portfolio/Footer";
import Home from "@/Component/Portfolio/Home";
import Navbar from "@/Component/Portfolio/Navbar";
import Skills from "@/Component/Portfolio/Skills";
import Work from "@/Component/Portfolio/Work";
import Head from "next/head";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio | Shubham Singh</title>
      </Head>
      <Navbar />
      <Home id="home" />
      <About id="about" />
      <Skills id="skills" />
      <Work id="work" />
      <Contact id="contact" />
      <Footer />
    </>
  );
}
