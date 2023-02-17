import { useContext, useEffect, useRef, useState } from "react";
import styles from "@/CSS/ECoaching/ECoachingAbout.module.css";
import { ECoachingContext } from "@/Context/ECoaching/ECoachingStates";
// import Tutor from "@/Assets/ECoacoaching/tutorAbout.png";
import Tutor from "@/Assets/ECoaching/tutorAbout.png";
import Link from "next/link";
import Image from "next/image";

const ECoachingAbout = () => {
  const [visib, setVisib] = useState({
    cont: false,
    who1: false,
    who2: false,
    who3: false,
  });
  const who1 = useRef();
  const who2 = useRef();
  const who3 = useRef();
  const cont = useRef();
  const { isVisib, setNavActive } = useContext(ECoachingContext);

  function set() {
    setVisib({
      cont: isVisib(cont.current),
      who1: isVisib(who1.current),
      who2: isVisib(who2.current),
      who3: isVisib(who3.current),
    });
  }

  useEffect(() => {
    window.onscroll = () => {
      set();
    };
    set();
    setNavActive("About");
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className={styles.about}>
        <div
          className={
            visib.cont ? `${styles.cont} ${styles.active}` : `${styles.cont}`
          }
          ref={cont}
        >
          <div className={styles.left}>
            <Image src={Tutor} alt="" />
          </div>
          <div className={styles.right}>
            <h2>
              We are the group of <span>Skilled</span> Tutors, who acompanies
              each other to help <span>Educate</span> you all.
            </h2>
            <p>
              Our Aim is to bring <span>Online Tution</span> to a next Level.
              With each passing day we are dedicated towards our Aim of
              Education millions. And we are on our way to the DREAM
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div className={styles.whos}>
          <div
            ref={who1}
            className={
              visib.who1 ? `${styles.who} ${styles.active}` : `${styles.who}`
            }
            style={{ background: "#c8c8c8", border: "1px solid grey" }}
          >
            <div className={styles.stickyLeft}>
              <h1>Who we are?</h1>
            </div>
            <div className={styles.caption}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
              velit facilis natus nobis harum, cum necessitatibus modi maxime
              commodi, exercitationem totam. Molestiae, neque! Eum natus, nulla
              accusantium placeat esse voluptatum. A saepe, voluptatum fugiat
              maiores, quae vero repellat repudiandae, ipsam hic maxime vitae
              debitis quidem at. Harum ea accusamus aliquid, incidunt, nobis
              adipisci eius velit natus, labore at unde officiis.
            </div>
          </div>
          <div
            className={
              visib.who2
                ? `${styles.who} ${styles.right} ${styles.active}`
                : `${styles.who} ${styles.right}`
            }
            ref={who2}
          >
            <div className={styles.caption}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              accusantium iste, dignissimos dolorum cupiditate vitae nesciunt
              consequatur facilis, modi blanditiis a dolore quis fugit porro
              reiciendis ratione provident praesentium. Eius. Aspernatur
              eveniet, quaerat corporis numquam animi perferendis cupiditate
              voluptate corrupti aliquam id consequuntur nam exercitationem,
              molestiae dolore fugiat architecto, iure error esse similique
              possimus. Perspiciatis sunt placeat porro minus amet?
            </div>
            <div className={styles.stickyLeft}>
              <h1>Our Mission</h1>
            </div>
          </div>
          <div
            className={
              visib.who3 ? `${styles.who} ${styles.active}` : `${styles.who}`
            }
            ref={who3}
            style={{ background: "#f3ece4", border: "1px solid #bea991" }}
          >
            <div className={styles.stickyLeft}>
              <h1>Acheivments</h1>
            </div>
            <div className={styles.caption}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
              mollitia sapiente quod? Voluptatibus, libero magnam blanditiis,
              est reiciendis sequi nisi veritatis repellat perspiciatis hic
              molestiae debitis quidem quia, deserunt ipsa. Esse porro, nobis
              sapiente nemo ducimus, atque laborum natus ea tenetur id suscipit
              eveniet sit quaerat nam quia accusamus tempora harum dignissimos
              quae saepe assumenda nulla quas! Ex, eos deserunt.
            </div>
          </div>
        </div>
        <div className={styles.join}>
          <h2>Register With Us</h2>
          <p>Join Our Mission by Registering on our Website.</p>
          <Link
            className={styles.aboutRegis}
            href="/Projects/ECoaching/Register"
          >
            Register
          </Link>
        </div>
      </div>
    </>
  );
};

export default ECoachingAbout;
