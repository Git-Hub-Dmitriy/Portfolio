import styles from "./Contact.module.css";
import { Dictionary } from "@interfaces/dictionary.types";

interface PropsContact {
  dict: Dictionary;
}

export default function Contact(props: PropsContact) {
  return <main className={styles.contact}></main>;
}
