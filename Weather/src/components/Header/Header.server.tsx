import * as styles from "./Header.module.css";
import Logo from "@components/Logo/Logo.server";
import Settings from "@components/Settings/Settings.client";
import classNames from "classnames";
import dynamic from "next/dynamic";
const WrapperSearch = dynamic(
  () => import("@layout/WrapperSearch/WrapperSearch.client"),
);

interface PropsHeader {
  displayTitle: string;
  displaySearch: string;
}

export default function Header(props: PropsHeader) {
  return (
    <header className={classNames("gridCenter", styles.header)}>
      <div className={styles.header__branding}>
        <Logo />
        <Settings />
      </div>
      <h1
        style={{ display: props.displayTitle }}
        className={classNames("gridCenter", styles.header__title)}
      >
        {"How's the sky looking today?"}
      </h1>
      <WrapperSearch display={props.displaySearch} />
    </header>
  );
}
