import styles from "./Overview.module.css";
import Image from "next/image";
import { WorkType } from "@interfaces/dictionary.types";
import Link from "next/link";

interface PropsOverview {
  work: WorkType | undefined;
}

export default function Overview(props: PropsOverview) {
  return (
    <section className={styles.overview}>
      <div className={styles.overview__innerTitle}>
        <div className={styles.overview__circle}></div>
        <h2 id="overview" className={styles.overview__title}>
          {props.work?.overview.title}
        </h2>
      </div>
      <h2 className={styles.overview__text}>{props.work?.overview.text}</h2>
      <Image
        className={styles.overview__image}
        src={props.work?.image ? props.work?.image : ""}
        alt="work"
        priority
        width={1920}
        height={800}
      />
      <div className={styles.overview__innerBtn}>
        <Link
          target="_blank"
          href={props.work?.gitHub ? props.work.gitHub : ""}
          className={styles.overview__btn}
        >
          GitHub
        </Link>
        <Link
          target="_blank"
          href={props.work?.demo ? props.work.demo : ""}
          className={styles.overview__btn}
        >
          Demo
        </Link>
      </div>
    </section>
  );
}
