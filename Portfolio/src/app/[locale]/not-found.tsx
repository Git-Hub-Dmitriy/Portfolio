"use client";
import classNames from "classnames";
import styles from "./not-found.module.css";
import Header from "@components/Header/Header.client";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className={styles.notFound}>
      <Header />
      <h1 className={styles.notFound__title}>404</h1>
      <div className={classNames("Center", styles.notFound__innerBtn)}>
        <button
          onClick={() => router.replace("/")}
          className={styles.notFound__btn}
        >
          Go to Home
        </button>
      </div>
    </main>
  );
}
