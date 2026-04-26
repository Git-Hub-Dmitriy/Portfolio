import styles from "./Skills.module.css";
import { Dictionary } from "@interfaces/dictionary.types";

interface PropsSkills {
  dict: Dictionary;
}

export default function Skills(props: PropsSkills) {
  const listSkills = props.dict.pages.skills.list;

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.skills__wrapTitle}>
        <div className={styles.skills__circle}></div>
        <h1 className={styles.skills__title}>
          {props.dict.pages.skills.title}
        </h1>
      </div>
      <ul className={styles.skills__text}>
        {listSkills.map((skill, i) => {
          return (
            <div key={i}>
              <li>{skill}</li>
              <br />
            </div>
          );
        })}
      </ul>
    </section>
  );
}
