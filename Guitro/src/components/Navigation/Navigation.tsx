import styles from "./Navigation.module.css";
import Link from "next/link";

interface PropsNavigation {
  title: string;
  link: string;
  subtitle: string;
}

export default function Navigation(props: PropsNavigation) {
  return (
    <section className={styles.navigation}>
      <h1 className={styles.navigation__title}>{props.title}</h1>
      <div className={styles.navigation__innerLink}>
        <Link href={"/"} className={styles.navigation__link}>
          {props.link}
        </Link>
        <span className={styles.navigation__arrow}> » </span>
        <h2 className={styles.navigation__subtitle}>{props.subtitle}</h2>
      </div>
    </section>
  );
}
