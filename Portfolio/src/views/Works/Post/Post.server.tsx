import styles from "./Post.module.css";
import { Dictionary } from "@interfaces/dictionary.types";
import Link from "next/link";
import Image from "next/image";
import RevealWrapper from "@providers/RevealWrapper";

interface PropsPost {
  dict: Dictionary;
}

export default function Post(props: PropsPost) {
  return (
    <section className={styles.post}>
      {props.dict.pages.work.map((work) => {
        return (
          <RevealWrapper key={work.id}>
            <div className={styles.post__container}>
              <div className={styles.post__wrapPost}>
                <div className={styles.post__wrapTitle}>
                  <div className={styles.post__innerTitle}>
                    <div className={styles.post__circle}></div>
                    <h1 className={styles.post__title}>
                      {work.overview.title}
                    </h1>
                  </div>
                  <h2 className={styles.post__description}>
                    {work.overview.text}
                  </h2>
                </div>
                <Link className={styles.post__link} href={work.href}>
                  <Image
                    className={styles.post__image}
                    src={work.image}
                    loading="eager"
                    width={1920}
                    height={800}
                    alt="work"
                  />
                </Link>
              </div>
            </div>
          </RevealWrapper>
        );
      })}
    </section>
  );
}
