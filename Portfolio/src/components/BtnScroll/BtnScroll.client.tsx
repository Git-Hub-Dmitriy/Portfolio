"use client";
import styles from "./BtnScroll.module.css";
import IconArrowUp from "@icons/iconArrowUp.svg";

export default function BtnScroll() {
  return (
    <article
      onClick={() => {
        const newPath = window.location.pathname + window.location.search;
        window.scrollTo(0, 0);
        window.history.replaceState(null, "", newPath);
      }}
      className={styles.btnScroll}
    >
      <IconArrowUp className={styles.btnScroll__arrow} />
    </article>
  );
}
