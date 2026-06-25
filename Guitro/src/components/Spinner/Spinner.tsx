import styles from "./Spinner.module.css";

export default function Spinner() {
  return (
    <div className={styles["dots-spinner"]}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
