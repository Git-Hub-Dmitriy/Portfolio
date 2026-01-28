import * as style from "./BlockContact.module.scss";
import Logo from "@components/Logo/Logo";

export default function BlockContact({}) {
  return (
    <div className={style.blockContact}>
      <div className={style.blockContact__innerTitle}>
        <Logo colorText="#ffffff" />
        <h2 className={style.blockContact__subtitle}>
          Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
          dui, eget bibendum magna congue nec.
        </h2>
      </div>
      <div className={style.blockContact__innerLink}>
        <a href="tel:2195550114" className={style.blockContact__tel}>
          (219) 555-0114
        </a>
        <span className={style.blockContact__span}>or</span>
        <a href="mailto:proxy@gmail.com" className={style.blockContact__email}>
          Proxy@gmail.com
        </a>
      </div>
    </div>
  );
}
