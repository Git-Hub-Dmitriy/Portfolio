"use client";
import styles from "./Burger.module.css";

export default function Burger() {
  return (
    <div className={styles.burger}>
      <div className={styles.burger__line}></div>
      <div className={styles.burger__line}></div>
      <div className={styles.burger__line}></div>
    </div>
  );
}
