import styles from "./PrivacyPolicy.module.css";
import { Dictionary } from "@src/interfaces/dictionary.types";

interface PropsPrivacyPolicy {
  dict: Dictionary;
}

export default function PrivacyPolicy(props: PropsPrivacyPolicy) {
  return <main className={styles.policy}></main>;
}
