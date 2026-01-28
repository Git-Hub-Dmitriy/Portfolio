import * as style from "./Navigate.module.scss";
import IconHouse from "@assets/iconHouse.svg";
import IconArrowDown from "@assets/iconArrowDown.svg";
import { Link } from "react-router-dom";

export default function Navigate({ one, two, three }) {
  return (
    <section className={style.navigate}>
      <div className={style.navigate__wrap}>
        <Link className={style.navigate__linkHome} to={"/"}>
          <IconHouse className={style.navigate__iconHouse} />
        </Link>
        <IconArrowDown
          stroke={"#999999"}
          className={style.navigate__iconArrow}
        />
        <h2
          className={
            two
              ? style.navigate__one
              : `${style.navigate__one} ${style.navigate__one_green}`
          }
        >
          {one}
        </h2>
        <IconArrowDown
          stroke={"#999999"}
          className={style.navigate__iconArrow}
        />
        <h2
          className={
            three
              ? style.navigate__two
              : `${style.navigate__two} ${style.navigate__two_green}`
          }
        >
          {two}
        </h2>
        {three && (
          <IconArrowDown
            stroke={"#999999"}
            className={style.navigate__iconArrow}
          />
        )}
        <h2 className={style.navigate__three}>{three}</h2>
      </div>
    </section>
  );
}
