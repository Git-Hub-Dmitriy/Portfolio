import styles from "./Burger.module.css";
import classNames from "classnames";
import Link from "next/link";
import { useTranslation } from "../../../providers/translation-provider";

interface PropsBurger {
  stringLinks: string;
  showModal: boolean;
  setShowModal: (state: boolean) => void;
  setShowLang: (state: boolean) => void;
}

export default function Burger(props: PropsBurger) {
  const { t } = useTranslation();
  const links: { link: string; href: string }[] = t(props.stringLinks);

  return (
    <div
      tabIndex={1}
      onBlur={() => props.setShowModal(false)}
      className={styles.burger}
    >
      <div
        onClick={() => {
          props.setShowModal(!props.showModal);
          props.setShowLang(false);
        }}
        className={classNames("Center", styles.burger__wrapper)}
      >
        <div className={styles.burger__line}></div>
        <div className={styles.burger__line}></div>
        <div className={styles.burger__line}></div>
      </div>
      <ul
        className={classNames(
          styles.burger__modal,
          props.showModal && styles.burger__modal_active,
        )}
      >
        {links.map((item, index) => {
          return (
            <Link
              key={index}
              onClick={() => props.setShowModal(false)}
              href={item.href}
            >
              <li className={styles.burger__link}>{item.link}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
