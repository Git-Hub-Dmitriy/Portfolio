import styles from "./LostPass.module.css";
import { Dictionary } from "@interfaces/dictionary.types";

interface PropsLostPass {
  dict: Dictionary;
}

export default function LostPass(props: PropsLostPass) {
  return <main className={styles.lostPass}></main>;
}
