import Link from "next/link";
import styles from "./Contact.module.css";
import { Dictionary } from "@interfaces/dictionary.types";

interface PropsContact {
  dict: Dictionary;
}

export default function Contact(props: PropsContact) {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contact__wrapTitle}>
        <div className={styles.contact__circle}></div>
        <h1 className={styles.contact__title}>
          {props.dict.pages.contact.title}
        </h1>
      </div>
      <div className={styles.contact__innerLinks}>
        <h2 className={styles.contact__link}>
          {props.dict.pages.contact.email}
        </h2>
        <Link
          href={`tel: ${props.dict.pages.contact.tel}`}
          className={styles.contact__link}
        >
          {props.dict.pages.contact.tel}
        </Link>
        <Link
          target="_blank"
          href={"https://github.com/Git-Hub-Dmitriy?tab=repositories"}
          className={styles.contact__link}
        >
          {props.dict.pages.contact.gitHub}
        </Link>
        <Link
          target="_blank"
          href={"https://www.instagram.com/dmitriy_grudina/"}
          className={styles.contact__link}
        >
          {props.dict.pages.contact.instagram}
        </Link>
      </div>
    </section>
  );
}
