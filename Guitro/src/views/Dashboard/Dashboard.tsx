import styles from "./Dashboard.module.css";
import { Dictionary } from "@interfaces/dictionary.types";

interface PropsDashboard {
  dict: Dictionary;
}

export default function Dashboard(props: PropsDashboard) {
  return <main className={styles.dashboard}></main>;
}
