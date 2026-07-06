import styles from "./HeaderBody.module.css";
import { Dictionary } from "@interfaces/dictionary.types";
import Logo from "@components/Logo/Logo";
import ShoppingCart from "@components/ShoppingCart/ShoppingCart";
import Search from "@components/Search/Search";
import Burger from "@components/Burger/Burger";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Lang = dynamic(() => import("@components/Lang/Lang"));

interface PropsHeaderBody {
  dictionary: Dictionary;
}

export default function HeaderBody(props: PropsHeaderBody) {
  return (
    <div className={styles.headerBody}>
      <div className={styles.headerBody__row}>
        <Logo />
        <Suspense fallback={null}>
          <Lang dict={props.dictionary} />
        </Suspense>
        <ShoppingCart />
        <Burger />
        <Search />
      </div>
    </div>
  );
}
