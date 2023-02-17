import styles from "@/CSS/ECoaching/ECoachingCourses.module.css";
import Course from "@/Assets/ECoaching/tutorAbout.png";
import Image from "next/image";

const Courses = () => {
  return (
    <div className={styles.courses}>
      <h1>We Offers</h1>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.img}>
            <Image src={Course} alt="" />
          </div>
          <div className={styles.abt}>
            <h2>Course Title</h2>
            <p>
              This is simple Course for Lorem ipsum dolor sit amet, consectetur
            </p>
            <div className={styles.price}>
              <span>FREE</span>
              <button>Buy</button>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.img}>
            <Image src={Course} alt="" />
          </div>
          <div className={styles.abt}>
            <h2>Course Title</h2>
            <p>
              This is simple Course for Lorem ipsum dolor sit amet, consectetur
            </p>
            <div className={styles.price}>
              <span>FREE</span>
              <button>Buy</button>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.img}>
            <Image src={Course} alt="" />
          </div>
          <div className={styles.abt}>
            <h2>Course Title</h2>
            <p>
              This is simple Course for Lorem ipsum dolor sit amet, consectetur
            </p>
            <div className={styles.price}>
              <span>FREE</span>
              <button>Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
