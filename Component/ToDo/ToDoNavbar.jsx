import styles from "@/CSS/ToDo/ToDoContent.module.css";

export default function ToDoNavbar() {
  return (
    <>
      <div className={styles.nav}>TODO Task</div>
      <div className={styles.footer}>--complete all Task</div>
    </>
  );
}
