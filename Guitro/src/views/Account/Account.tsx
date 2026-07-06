import styles from "./Account.module.css";
import { Dictionary } from "@interfaces/dictionary.types";

interface PropsAccount {
  dict: Dictionary;
}

export default function Account(props: PropsAccount) {
  return <main className={styles.account}></main>;
}
