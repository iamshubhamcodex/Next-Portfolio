import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "../../CSS/ECoaching/ECoachingServices.module.css";
import Course from "../../Assets/ECoaching/AllCourseOnline.png";
import Doubt from "../../Assets/ECoaching/DoubtSupport.png";
import Tutor from "../../Assets/ECoaching/TutorOnMobile.png";
import { ECoachingContext } from "../../Context/ECoaching/ECoachingStates";

export default function ECoachingServices() {
  let { isVisib } = useContext(ECoachingContext);
  let serv = useRef();
  let [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(isVisib(serv.current));
    });
    setShow(isVisib(serv.current));
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.services} id="services">
      <h1>We Offers</h1>
      <div
        className={
          show ? `${styles.offers} ${styles.active}` : `${styles.offers}`
        }
        ref={serv}
      >
        <div className={styles.left}>
          <div className={styles.inner}>
            <p>ONLINE</p>
            <h3>
              Our all courses are available online. <br />
              With our Faculty Support
            </h3>
          </div>
          <i></i>
        </div>
        <div className={styles.right}>
          <div className={styles.right1}>
            <div className={styles.inner}>
              <p>DOUBT</p>
              <h3>
                You can solve your doubt online without getting over here and
                there.
              </h3>
            </div>
          </div>
          <div className={styles.right2}>
            <div className={styles.inner}>
              <p>Tutor</p>
              <h3>
                You can get the help of the tutor on your mobile right there
              </h3>
            </div>
          </div>
        </div>
      </div>
      <p>
        <span>More on the Row...</span>
      </p>
    </div>
  );
}
