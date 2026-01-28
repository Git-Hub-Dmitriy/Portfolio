import * as style from "./Rating.module.scss";
import IconArrowUp from "@assets/iconArrowUp.svg";
import BoxStars from "./BoxStars/BoxStars";
import { useState } from "react";

export default function Rating({ handleRating }) {
  const [hidden, setHidden] = useState(true);

  return (
    <section
      className={
        hidden === false
          ? style.rating
          : `${style.rating} ${style.rating_hidden}`
      }
    >
      <div
        onClick={() => {
          if (!hidden) {
            setHidden(true);
          } else {
            setHidden(false);
          }
        }}
        className={style.rating__innerTitle}
      >
        <h1 className={style.rating__title}>Rating</h1>
        <IconArrowUp
          stroke={"#1a1a1a"}
          className={
            hidden === false
              ? style.rating__iconArrowUp
              : `${style.rating__iconArrowUp} ${style.rating__iconArrowUp_rotate}`
          }
        />
      </div>
      <div
        className={
          hidden === false
            ? style.rating__wrapFilterStars
            : `${style.rating__wrapFilterStars} ${style.rating__wrapFilterStars_hidden}`
        }
      >
        {textRating.map((item) => {
          return (
            <BoxStars
              key={item.id}
              value={item.value}
              handleRating={handleRating}
            />
          );
        })}
      </div>
    </section>
  );
}

export const textRating = [
  { id: 0, value: "5.0" },
  { id: 1, value: "4.0 & up" },
  { id: 2, value: "3.0 & up" },
  { id: 3, value: "2.0 & up" },
  { id: 4, value: "1.0 & up" },
];
