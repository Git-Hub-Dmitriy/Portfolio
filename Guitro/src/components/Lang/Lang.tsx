"use client";
import classNames from "classnames";
import styles from "./Lang.module.css";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import changeLang from "@utils/changeLocale";
import { Dictionary } from "@interfaces/dictionary.types";

interface PropsLang {
  dict: Dictionary;
}

export default function Lang(props: PropsLang) {
  const [showList, setShowList] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <article
      tabIndex={0}
      onClick={() => setShowList(!showList)}
      onBlur={() => setShowList(false)}
      className={styles.lang}
    >
      {props.dict.components.header.language.selectedLanguage}
      <ul
        className={classNames(
          styles.lang__list,
          showList && styles.lang__list_showed,
        )}
      >
        {props.dict.components.header.language.languages.map((lang, i) => (
          <li
            key={i}
            className={styles.lang__li}
            onClick={() => {
              changeLang(lang.toLowerCase(), pathname, router);
            }}
          >
            {lang}
          </li>
        ))}
      </ul>
    </article>
  );
}
