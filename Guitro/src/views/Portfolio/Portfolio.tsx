import styles from "./Portfolio.module.css";
import { Dictionary } from "@src/interfaces/dictionary.types";

interface PropsPortfolio {
  dict: Dictionary;
}

export default function Portfolio(props: PropsPortfolio) {
  return <main className={styles.portfolio}></main>;
}
