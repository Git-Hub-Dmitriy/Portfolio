import styles from "./Header.module.css";
import { Dictionary } from "@interfaces/dictionary.types";
import TopBar from "./TopBar/TopBar";
import classNames from "classnames";
import HeaderBody from "./HeaderBody/HeaderBody";

interface PropsHeader {
  dictionary: Dictionary;
}

export default function Header(props: PropsHeader) {
  return (
    <header className={classNames(styles.header, "center")}>
      <TopBar dictionary={props.dictionary} />
      <HeaderBody dictionary={props.dictionary} />
    </header>
  );
}
