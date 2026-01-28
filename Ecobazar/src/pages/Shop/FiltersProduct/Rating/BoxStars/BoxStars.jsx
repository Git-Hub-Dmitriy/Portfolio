import * as style from "./BoxStars.module.scss";
import IconStar from "@assets/iconStar.svg";
import IconMark from "@assets/iconMark.svg";
import { useSelector } from "react-redux";

export default function BoxStars({ value, handleRating }) {
  const stateRating = useSelector((store) => store.statesShop.rating);
  const starTwo = value.slice(0, 1) !== "1" ? "#ff8a00" : "#cccccc";
  const starThree =
    value.slice(0, 1) !== "2" && value.slice(0, 1) !== "1"
      ? "#ff8a00"
      : "#cccccc";
  const starFour =
    value.slice(0, 1) !== "1" &&
    value.slice(0, 1) !== "2" &&
    value.slice(0, 1) !== "3"
      ? "#ff8a00"
      : "#cccccc";
  const starFive =
    value.slice(0, 1) !== "1" &&
    value.slice(0, 1) !== "2" &&
    value.slice(0, 1) !== "3" &&
    value.slice(0, 1) !== "4"
      ? "#ff8a00"
      : "#cccccc";
  const checked = value.slice(0, 1) === stateRating ? true : false;
  return (
    <label className={style.boxStars}>
      <input
        type="radio"
        name="rating"
        className={style.boxStars__radio}
        value={value.slice(0, 1)}
        checked={checked}
        onClick={(e) => handleRating(e.target.value)}
      />
      <IconMark
        stroke={"#ffffff"}
        className={
          stateRating !== value.slice(0, 1)
            ? style.boxStars__iconMark
            : `${style.boxStars__iconMark} ${style.boxStars__iconMark_checked}`
        }
      />
      <IconStar className={style.boxStars__icon} fill={"#ff8a00"} />
      <IconStar className={style.boxStars__icon} fill={starTwo} />
      <IconStar className={style.boxStars__icon} fill={starThree} />
      <IconStar className={style.boxStars__icon} fill={starFour} />
      <IconStar className={style.boxStars__icon} fill={starFive} />
      <span className={style.boxStars__text}>{value}</span>
    </label>
  );
}
