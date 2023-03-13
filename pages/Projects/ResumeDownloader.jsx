import Template from "@/Component/ResumeDownloader/Template";
import styles from "@/CSS/ResumeDownloader/ResumeDownloader.module.css";
import Head from "next/head";
import { useState } from "react";

export default function ResumeDownloader() {
  const [curr, setCurr] = useState("Personal");
  const [submitted, setSubmitted] = useState(false);
  const [details, setDetails] = useState({
    fullName: "",
    passion: "",
    dob: "",
    age: 0,
    nationality: "",
    mobile: "",
    location: "",
    email: "",
    langauges: "",
    certification: "",
    objectives: "",
    education: "",
    experience: "",
  });
  const handle = (name, val) => {
    let obj = {};
    switch (name) {
      case "fullName":
        obj = { fullName: val };
        break;
      case "passion":
        obj = { passion: val };
        break;
      case "dob":
        obj = { dob: val };
        break;
      case "age":
        obj = { age: val };
        break;
      case "nationality":
        obj = { nationality: val };
        break;
      case "mobile":
        obj = { mobile: val };
        break;
      case "location":
        obj = { location: val };
        break;
      case "email":
        obj = { email: val };
        break;
      case "langauges":
        obj = { langauges: val };
        break;
      case "certification":
        obj = { certification: val };
        break;
      case "objectives":
        obj = { objectives: val };
        break;
      case "education":
        obj = { education: val };
        break;
      case "experience":
        obj = { experience: val };
        break;
      default:
        break;
    }
    setDetails((prev) => {
      return { ...prev, ...obj };
    });
  };
  const submit = () => {
    setSubmitted(true);
  };
  return (
    <>
      <Head>
        <title>ResumeDownloader | Projects</title>
      </Head>
      {!submitted && (
        <div className={styles.container}>
          <h1>Resume Downloader</h1>
          <div className={styles.asks}>
            {curr === "Personal" && (
              <div className={styles.personal}>
                <div className={styles.p}>Tell us a bit about Yourself</div>
                <div className={styles.ques}>
                  <div className={styles.inp}>
                    <label htmlFor="name">Full Name: </label>
                    <input
                      name="fullName"
                      onChange={(e) => handle(e.target.name, e.target.value)}
                      placeholder="Enter your Name..."
                      id="name"
                      type="text"
                    />
                  </div>
                  <div className={styles.inp}>
                    <label htmlFor="passion">Your Passion: </label>
                    <input
                      name="passion"
                      onChange={(e) => handle(e.target.name, e.target.value)}
                      placeholder="Enter your Passion..."
                      id="passion"
                      type="text"
                    />
                  </div>
                  <div className={styles.inp}>
                    <label htmlFor="dob">DOB (dd/mm/yyy):</label>
                    <input
                      name="dob"
                      onChange={(e) => handle(e.target.name, e.target.value)}
                      placeholder="Enter your DOB..."
                      id="dob"
                      type="text"
                    />
                  </div>
                  <div className={styles.inp}>
                    <label htmlFor="age">Age:</label>
                    <input
                      name="age"
                      onChange={(e) => handle(e.target.name, e.target.value)}
                      placeholder="Enter your Age..."
                      id="age"
                      type="text"
                    />
                  </div>
                  <div className={styles.inp}>
                    <label htmlFor="nationality">Nationality:</label>
                    <input
                      name="nationality"
                      onChange={(e) => handle(e.target.name, e.target.value)}
                      placeholder="Enter your Nationality..."
                      id="nationality"
                      type="text"
                    />
                  </div>
                </div>
                <button onClick={() => setCurr("Contact")}> Next</button>
              </div>
            )}
            {curr === "Contact" && (
              <div className={styles.contact}>
                <div className={styles.p}>Your Contact Info</div>
                <div className={styles.ques}>
                  <div className={styles.inp}>
                    <label htmlFor="mobile">Mobile Number: </label>
                    <input
                      name="mobile"
                      onChange={(e) => handle(e.target.name, e.target.value)}
                      placeholder="Enter your Mobile..."
                      id="mobile"
                      type="text"
                    />
                  </div>
                  <div className={styles.inp}>
                    <label htmlFor="email">Email Address: </label>
                    <input
                      name="email"
                      onChange={(e) => handle(e.target.name, e.target.value)}
                      placeholder="Enter your Email Address..."
                      id="email"
                      type="text"
                    />
                  </div>
                  <div className={styles.inp}>
                    <label htmlFor="location">City, State: </label>
                    <input
                      name="location"
                      onChange={(e) => handle(e.target.name, e.target.value)}
                      placeholder="Enter your City, State..."
                      id="location"
                      type="text"
                    />
                  </div>
                </div>
                <button onClick={() => setCurr("Language")}> Next</button>
              </div>
            )}
            {curr === "Language" && (
              <div className={styles.langauges}>
                <div className={styles.p}>
                  Languages you know
                  <br />
                  (languages seperated by "_")
                </div>
                <div className={styles.gen}>
                  <div className={styles.inp}>
                    <label htmlFor="name">Name</label>
                    <textarea
                      name="langauges"
                      onChange={(e) => handle(e.target.name, e.target.value)}
                      placeholder="Name of Language"
                      type="text"
                      id="name"
                    />
                  </div>
                </div>
                <button onClick={() => setCurr("Certification")}> Next</button>
              </div>
            )}
            {curr === "Certification" && (
              <div className={styles.certification}>
                <div className={styles.p}>
                  Certification you own
                  <br />
                  (certifications seperated by "_")
                </div>
                <div className={styles.gen}>
                  <div className={styles.inp}>
                    <label htmlFor="name">Certifications: </label>
                    <textarea
                      name="certification"
                      onChange={(e) => handle(e.target.name, e.target.value)}
                      placeholder="Enter your"
                      type="text"
                      id="name"
                    />
                  </div>
                </div>
                <button onClick={() => setCurr("Objective")}> Next</button>
              </div>
            )}
            {curr === "Objective" && (
              <div className={styles.objectives}>
                <div className={styles.p}>Your Objective for Job</div>
                <div className={styles.inp}>
                  <label htmlFor="obj">Objective</label>
                  <textarea
                    name="objectives"
                    onChange={(e) => handle(e.target.name, e.target.value)}
                    id="obj"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <button onClick={() => setCurr("Education")}> Next</button>
              </div>
            )}
            {curr === "Education" && (
              <div className={styles.education}>
                <div className={styles.p}>
                  Education you have Completed
                  <br />
                  (education seperated by "_")
                </div>
                <div className={styles.gen}>
                  <div className={styles.inp}>
                    <label htmlFor="when">Educations:</label>
                    <textarea
                      name="education"
                      onChange={(e) => handle(e.target.name, e.target.value)}
                      placeholder="Enter your"
                      type="text"
                      id="name"
                    />
                  </div>
                </div>
                <button onClick={() => setCurr("Experience")}>Next</button>
              </div>
            )}
            {curr === "Experience" && (
              <div className={styles.experience}>
                <div className={styles.p}>
                  Experience you have
                  <br />
                  (certifications seperated by "_")
                </div>
                <div className={styles.gen}>
                  <div className={styles.inp}>
                    <label htmlFor="where">Experiences: </label>
                    <textarea
                      name="experience"
                      onChange={(e) => handle(e.target.name, e.target.value)}
                      placeholder="Enter your"
                      type="text"
                      id="where"
                    />
                  </div>
                </div>
                <button onClick={submit}>Submit</button>
              </div>
            )}
          </div>
        </div>
      )}
      {submitted && <Template details={details} />}
    </>
  );
}
