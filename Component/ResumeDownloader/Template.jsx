import styles from "@/CSS/ResumeDownloader/template.module.css";
import host from "@/lib/var";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Template(props) {
  let {
    fullName,
    passion,
    dob,
    age,
    nationality,
    mobile,
    location,
    email,
    langauges,
    certification,
    objectives,
    education,
    experience,
  } = props.details;
  const [href, setHref] = useState();

  const download = async () => {
    let response = await fetch(`${host}api/lib/download`, {
      method: "POST",
      body: JSON.stringify({
        name: fullName,
        url: `${host}Projects/ResumeDownloader/template`,
      }),
      headers: { Accept: "*/*", "Content-type": "application-json" },
    });
    let data = await response.json();
    if (data.success) setHref(data.path);
  };

  useEffect(() => {
    console.log(fullName, langauges);
  }, []);

  return (
    <>
      <Head>
        <title>{fullName}'s Resume | ResumeDownloader</title>
      </Head>
      <div className={styles.body}>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Manjari&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <div className={styles.container}>
          <div className={styles.paper}>
            <div className={styles.header}>
              <div className={styles.img}>
                <img src="img/Me.jpg" alt="Pic" />
              </div>
              <div className={styles.namenJob}>
                <div className={styles.name}>{fullName}</div>
                <div className={styles.job}>{passion}</div>
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles.right}>
                <h1 className={styles.headLine}>Profile</h1>
                <div className={styles.about}>
                  <div className={styles.profile}>
                    <div>Name</div>
                    <div>Birthday/Age</div>
                    <div>Nationality</div>
                  </div>
                  <div className={styles.profile2}>
                    <div>{fullName}</div>
                    <div>
                      {dob} / {age} years
                    </div>
                    <div>{nationality}</div>
                  </div>
                </div>
                <h1 className={styles.headLine}>Contanct</h1>
                <div className={styles.about}>
                  <div className={styles.profile}>
                    <div>
                      <i className="fa fa-phone"></i>
                    </div>
                    <div>
                      <i className="fa fa-map-marker"></i>
                    </div>
                    <div>
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className={styles.profile2}>
                    <div>{mobile}</div>
                    <div>{location}</div>
                    <div>{email}</div>
                  </div>
                </div>
                <h1 className={styles.headLine}>Skills</h1>
                <div className={styles.about}>
                  <div className={styles.profile}>
                    {langauges &&
                      langauges.split("_").map((k, i) => {
                        return <div key={i}>{k}</div>;
                      })}
                  </div>
                </div>
                <h1 className={styles.headLine} id="Certifications">
                  Certification
                </h1>
                {certification.split("_").map((k, i) => {
                  return <p key={i}>{k}</p>;
                })}
              </div>
              <div className={styles.left}>
                <h1 className={styles.headLine}>Career Objectives</h1>
                <p>{objectives}</p>
                <h1 className={styles.headLine}>Education</h1>
                <div className={`${styles.about} ${styles.edu}`}>
                  <div
                    className={styles.profile}
                    style={{ marginRight: "15px" }}
                  >
                    {education.split("_").map((k, i) => (
                      <div key={i}>{k}</div>
                    ))}
                  </div>
                </div>
                <h1 className={styles.headLine}>Experience</h1>
                {experience &&
                  experience.split("_").map((k, i) => <p key={i}>{k}</p>)}
              </div>
            </div>
            {!href && (
              <button className={styles.resumeBtn} onClick={download}>
                Get Download Link
              </button>
            )}
            {href && (
              <button className={styles.resumeBtn}>
                <a href={href} download>
                  Download Now
                </a>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
