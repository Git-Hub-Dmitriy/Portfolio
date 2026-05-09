import Image from "next/image";
import styles from "./RecentWorks.module.css";
import classNames from "classnames";
import Link from "next/link";
import { Dictionary } from "@interfaces/dictionary.types";
import RevealWrapper from "@providers/RevealWrapper";

interface PropsRecentWorks {
  dict: Dictionary;
}

export default function RecentWorks(props: PropsRecentWorks) {
  const works = props.dict.pages.recentWorks.preview;

  return (
    <section id="recent-works" className={styles.recentWorks}>
      <div className={styles.recentWorks__innerTitle}>
        <div className={styles.recentWorks__circle}></div>
        <h1 className={styles.recentWorks__title}>
          {props.dict.pages.recentWorks.title}
        </h1>
      </div>
      <div className={styles.recentWorks__wrapWorks}>
        {works.map((work) => {
          if (works.length <= 4) {
            return (
              <RevealWrapper key={work.href}>
                <Link
                  href={work.href}
                  className={classNames("Center", styles.recentWorks__preview)}
                >
                  <Image
                    src={work.imageSrc}
                    width={1920}
                    height={1080}
                    priority
                    alt="work"
                    className={styles.recentWorks__image}
                  />
                  <div className={styles.recentWorks__description}>
                    <h1 className={styles.recentWorks__name}>{work.name}</h1>
                    <h2 className={styles.recentWorks__text}>{work.text}</h2>
                  </div>
                </Link>
              </RevealWrapper>
            );
          }
        })}
      </div>
    </section>
  );
}
