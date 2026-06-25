import styles from "./Auth.module.css";
import { Dictionary } from "@interfaces/dictionary.types";
import Navigation from "@components/Navigation/Navigation";
import dynamic from "next/dynamic";
const FormLogin = dynamic(() => import("./FormLogin/FormLogin"));
const FormRegister = dynamic(() => import("./FormRegister/FormRegister"));

interface PropsAuth {
  dict: Dictionary;
}

export default function Auth(props: PropsAuth) {
  return (
    <main className={styles.auth}>
      <Navigation
        title={props.dict.components.navigation.account.title}
        link={props.dict.components.navigation.account.link}
        subtitle={props.dict.components.navigation.account.subtitle}
      />
      <FormLogin dict={props.dict} />
      <FormRegister dict={props.dict} />
    </main>
  );
}
