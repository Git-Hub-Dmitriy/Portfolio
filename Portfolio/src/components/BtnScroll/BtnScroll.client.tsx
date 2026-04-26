"use client";
import styles from "./BtnScroll.module.css";
import IconArrowUp from "@icons/iconArrowUp.svg";

export default function BtnScroll() {
  return (
    <article onClick={() => window.scrollTo(0, 0)} className={styles.btnScroll}>
      <IconArrowUp className={styles.btnScroll__arrow} />
    </article>
  );
}
