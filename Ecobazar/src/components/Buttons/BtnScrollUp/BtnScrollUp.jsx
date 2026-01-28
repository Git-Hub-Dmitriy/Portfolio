import * as style from "./BtnScrollUp.module.scss";
import IconArrowUp from "@assets/iconArrowUp.svg";

export default function BtnScrollUp() {
  return (
    <article
      onClick={() => window.scrollTo(0, 0)}
      className={style.btnScrollUp}
    >
      <IconArrowUp className={style.btnScrollUp__icon} stroke={"white"} />
    </article>
  );
}
