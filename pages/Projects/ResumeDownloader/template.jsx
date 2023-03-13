import fillTemplate from "@/Component/ResumeDownloader/template";
import styles from "@/CSS/ResumeDownloader/template.module.css";
import Head from "next/head";

export default function template() {
  let fullName = "Shubham Singh",
    passion = "Coding",
    dob = "14/07/2003",
    age = 19,
    nationality = "India",
    mobile = "9685348243",
    location = "Katni",
    email = "shubhamsinghcodex@gmail.com",
    language = [
      { which: "HTML5", rating: [0, 0, 0, 0, 0] },
      { which: "CSS3", rating: [0, 0, 0, 0, 1] },
      { which: "JavaScript", rating: [0, 0, 0, 1, 1] },
      { which: "React", rating: [0, 0, 0, 0, 1] },
    ],
    certification = [
      { which: "HTML5 Course", where: "udemy.com" },
      { which: "CSS3 Course", where: "udemy.com" },
      { which: "JavaScript Course", where: "udemy.com" },
    ],
    objective =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis suscipit nostrum, repellendus aspernatur minus, earum consectetur veritatis assumenda, repudiandae dolores deleniti quam consequatur vitae quos dolorum ullam officia! Officia, iure.    Vitae sed quasi repudiandae error eligendi, magni quod hic, asperiores suscipit dolore assumenda reprehenderit iste quos, soluta porro numquam. Voluptates saepe doloremque provident in accusantium at consequatur.",
    education = [
      { when: "2019-2021", where: "Sarvodaya Senior School" },
      { when: "2021-Present", where: "Lakshmi Narain College of Technology" },
    ],
    experience = [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis suscipit nostrum, repellendus aspernatur minus, earum consectetur veritatis assumenda, repudiandae dolores deleniti quam consequatur vitae quos do",
      "nderit iste quos, soluta porro numquam. Voluptates saepe doloremque provident in accusantium at consequatur.",
    ];
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
                    {language.map((k, i) => {
                      return <div key={i}>{k.which}</div>;
                    })}
                  </div>
                  <div className={styles.profile2}>
                    {language.map((k, i) => {
                      return (
                        <div key={i}>
                          {k.rating.map((l, j) => {
                            if (l === 0)
                              return <i key={j} className="fa fa-circle"></i>;
                          })}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <h1 className={styles.headLine} id="Certifications">
                  Certification
                </h1>
                {certification.map((k, i) => {
                  return (
                    <p key={i}>
                      <strong>{k.which}</strong> At {k.where}
                    </p>
                  );
                })}
              </div>
              <div className={styles.left}>
                <h1 className={styles.headLine}>Career Objectives</h1>
                <p>{objective}</p>
                <h1 className={styles.headLine}>Education</h1>
                <div className={`${styles.about} ${styles.edu}`}>
                  <div
                    className={styles.profile}
                    style={{ marginRight: "15px" }}
                  >
                    {education.map((k) => (
                      <div key={k.when}>{k.when}</div>
                    ))}
                  </div>
                  <div className={styles.provile2}>
                    {education.map((k) => (
                      <div key={k.when}>{k.where}</div>
                    ))}
                  </div>
                </div>
                <h1 className={styles.headLine}>Experience</h1>
                {experience && experience.map((k, i) => <p key={i}>{k}</p>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
