import styles from "@/CSS/Notes/NotesContent.module.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import Head from "next/head";
import host from "@/lib/var";

export default function NotesContent({ query, name }) {
  const [content, setContent] = useState([]);
  const [note, setNote] = useState();
  const [href, setHref] = useState();
  let download = useRef();

  const getPdf = async (val) => {
    let response = await fetch(`${host}api/Notes/download`, {
      method: "POST",
      body: JSON.stringify({
        name: val,
        url: `${host}Projects/Notes/${name}/${val}`,
      }),
      headers: { Accept: "*/*", "Content-type": "application-json" },
    });
    let data = await response.json();
    setHref(data.path);
    console.log("downloading");
  };

  const getContent = async () => {
    let response = await fetch(`${host}api/Notes/getContent`, {
      method: "POST",
      body: JSON.stringify({ name: name }),
      headers: { Accept: "*/*", "Content-Type": "application-json" },
    });
    let data = await response.json();
    if (data.success && data.content) setContent(data.content[0].contents);
  };

  const getNote = async () => {
    let response = await fetch(`${host}api/Notes/getNote`, {
      method: "POST",
      body: JSON.stringify({ name: query }),
      headers: { Accept: "*/*", "Content-Type": "application-json" },
    });
    let data = await response.json();
    if (data.success) setNote(data.note[0]);
  };

  function getPara(val, key) {
    let component;
    switch (val.texttype) {
      case "head1":
        component = <h2 key={key}>{val.content}</h2>;
        break;
      case "head2":
        component = <h3 key={key}>{val.content}</h3>;
        break;
      case "head3":
        component = (
          <p key={key} className={`${styles.para} ${styles.bold}`}>
            {val.content}
          </p>
        );
        break;
      case "para":
        component = (
          <p key={key} className={styles.para}>
            {val.content}
          </p>
        );
        break;
      case "code":
        component = (
          <pre key={key}>
            <code className="language-jsx">{val.content}</code>
          </pre>
        );
        break;
      case "list":
        let arr = val.content.split("_");
        component = (
          <ol key={key}>
            {arr.map((k, i) => {
              return (
                <li key={i} className={styles.para}>
                  {k}
                </li>
              );
            })}{" "}
          </ol>
        );
        break;
      case "warning":
        component = (
          <p key={key} className={`${styles.para} ${styles.warn}`}>
            {val.content}
          </p>
        );
    }
    return component;
  }

  const highlight = async () => {
    await Prism.highlightAll();
  };
  useEffect(() => {
    if (query) {
      getContent();
      getNote();
    }
  }, [query]);

  useEffect(() => {
    if (note) highlight();
  }, [note]);
  return (
    <>
      <Head>
        <title>{note?.heading} | React</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.contContainer}>
          <div className={styles.content}>
            <h1>{note?.heading}</h1>
            <div className={styles.blog}>
              {note?.contents &&
                note?.contents.map((k, i) => {
                  return getPara(k, i);
                })}
            </div>
            {note && (
              <button
                className={styles.download}
                onClick={() => getPdf(note.name)}
              >
                {!href && "Get Download Link"}
                {href && (
                  <a download href={href}>
                    Download
                  </a>
                )}
              </button>
            )}
          </div>
          <div className={styles.toc}>
            <h2>Table of Content</h2>
            <div className={styles.titles}>
              {content.map((k, i) => {
                return (
                  <Link
                    href={"/Projects/Notes/React/" + k.noteId}
                    key={i}
                    className={styles.title}
                  >
                    {k.heading}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
