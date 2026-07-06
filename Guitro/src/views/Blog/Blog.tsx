import styles from "./Blog.module.css";
import { Dictionary } from "@interfaces/dictionary.types";

interface PropsBlog {
  dict: Dictionary;
}

export default function Blog(props: PropsBlog) {
  return <main className={styles.blog}></main>;
}
