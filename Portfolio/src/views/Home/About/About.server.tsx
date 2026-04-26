import styles from "./About.module.css";
import Image from "next/image";
import { Dictionary } from "@interfaces/dictionary.types";
import RevealWrapper from "@providers/RevealWrapper";

interface PropsAbout {
  dict: Dictionary;
}

export default function About(props: PropsAbout) {
  return (
    <section id="about" className={styles.about}>
      <RevealWrapper>
        <div className={styles.about__wrapper}>
          <div className={styles.about__innerTitle}>
            <div className={styles.about__circle}></div>
            <h1 className={styles.about__title}>
              {props.dict.pages.about.title}
            </h1>
          </div>
          <div className={styles.about__description}>
            {props.dict.pages.about.description}
          </div>
        </div>
      </RevealWrapper>
      <RevealWrapper>
        <div className={styles.about__wrapImage}>
          <Image
            className={styles.about__image}
            src="/images/My-Photo.webp"
            width={1920}
            height={1080}
            alt="my photo"
            priority
          />
          <Image
            className={styles.about__image}
            src="/images/background.webp"
            width={1920}
            height={1080}
            alt="background"
            priority
          />
        </div>
      </RevealWrapper>
    </section>
  );
}
