"use client";
import * as styles from "./error.module.css";
import Header from "@components/Header/Header.server";
import IconWentWrong from "@icons/iconWentWrong.svg";
import IconRetry from "@icons/iconRetry.svg";
import classNames from "classnames";

export default function Error() {
  return (
    <main className={styles.error}>
      <Header displaySearch="none" displayTitle="none" />
      <div className={classNames("gridCenter", styles.error__wrapper)}>
        <IconWentWrong className={styles.error__iconWentWrong} />
        <h1 className={styles.error__title}>Something went wrong</h1>
        <h2 className={styles.error__subtitle}>
          We couldn’t connect to the server (API error). Please try again in a
          few moments.
        </h2>
        <button
          onClick={() => window.location.reload()}
          className={classNames("gridCenter", styles.error__btn)}
        >
          <IconRetry className={styles.error__iconRetry} />
          Retry
        </button>
      </div>
    </main>
  );
}
