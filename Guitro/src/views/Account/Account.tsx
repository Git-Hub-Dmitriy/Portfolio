import styles from "./Account.module.css";
import { Dictionary } from "@src/interfaces/dictionary.types";

interface PropsAccount {
  dict: Dictionary;
}

export default function Account(props: PropsAccount) {
  return <main className={styles.account}></main>;
}
