import styles from "./Footer.module.css";
import { Dictionary } from "@interfaces/dictionary.types";

interface PropsFooter {
  dictionary: Dictionary;
}

export default function Footer(props: PropsFooter) {
  return <footer className={styles.footer}></footer>;
}
