import React, { useEffect, useRef, useState } from "react";
import styles from "@/CSS/Portfolio/Work.module.css";
import ECoachingPng from "@/Assets/Portfolio/ECoaching.png";
import NotesPng from "@/Assets/Portfolio/Notes.png";
import PortfolioPng from "@/Assets/Portfolio/Portfolio.png";
import PassManagerPng from "@/Assets/Portfolio/PassManager.png";
import ChatAppPng from "@/Assets/Portfolio/ChatApp.png";
import ResumeDownloaderPng from "@/Assets/Portfolio/ResumeDownloader.png";
import host from "@/lib/var";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Work(props) {
  const [json, setJson] = useState([]);
  const hrefGit = "https://github.com/iamshubhamcodex/JavaProjects/tree/main/";
  const hrefProject = host + "Projects/";
  const router = useRouter();

  const Card = (props) => {
    const { title, span, made, text, name, img } = props;
    return (
      <>
        <div className={styles.card}>
          <div className={styles.hover}>
            <h3 className={styles.tit}>{title}</h3>
            <p className={styles.text}>
              This is a <span>{span}</span>.
              <br />
              {text}
            </p>
            <div className={styles.btns}>
              <button
                onClick={() => {
                  router.push(hrefProject + name);
                }}
              >
                View Project
              </button>
            </div>
          </div>
          <img src={img.src} alt="" />
        </div>
      </>
    );
  };

  return (
    <>
      <div className={styles.work} id={props.id}>
        <h1>Works</h1>
        <a
          href="https://www.github.com/iamshubhamcodex/Next-Portfolio"
          target="_blank"
          className={styles.git}
        >
          View code on GitHub
        </a>

        <div className={styles.cards}>
          {/* {json.map((j, id) => {
            return <Card idd={id} val={j} />;
          })} */}
          <Card
            img={PortfolioPng}
            title="Portfolio"
            span="Portfolio Website"
            text="In this website I have made my own Resume. It also ensures my Online Presence, so that I can show(send) my Resume to anyone(anytime)"
            name=""
          />
          <Card
            img={ECoachingPng}
            title="ECoaching"
            span="Online Coaching Website"
            text="I made this website in guidance of Mohan Sir for their Coaching, which they wants to take it to Online Platform."
            name="ECoaching"
          />
          <Card
            img={NotesPng}
            title="Notes"
            span="Notes App"
            text="This is a Notes Wesbite, where Notes of different Languages got uploaded. It can be used to take notes. User can also download the PDF(on localhost)."
            name="Notes"
          />
          <Card
            img={ChatAppPng}
            title="Chat App"
            span="Online Chatting App"
            text="I made Chat Application using Socket.io. On local host it works [but not vercel server]. We can create account with any registered user and then can Chat "
            name="ChatApp/Login"
          />
          <Card
            img={PassManagerPng}
            title="Password Manager"
            span="Password Storing App"
            text="This website stores Passwords, Secret Notes, ID's. We can use this to store all our Password online to get us easier to manage Passwords"
            name="PassManager"
          />
          <Card
            img={ResumeDownloaderPng}
            title="Resume Downloader"
            span="Resume Downloading Website"
            text="This website allows users to make their template Resume and Download it."
            name="ResumeDownloader"
          />
        </div>
      </div>
    </>
  );
}
