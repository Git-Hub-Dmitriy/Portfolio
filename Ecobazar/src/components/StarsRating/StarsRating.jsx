import * as style from "./StarsRating.module.scss";
import IconStar from "@assets/iconStar.svg";

export default function StarsRating({ card }) {
  let stars = (
    card.stars.reduce((acum, item) => acum + Number(item), 0) /
    card.stars.length
  ).toFixed(0);

  return (
    <div className={style.starsRating}>
      <IconStar
        fill={stars < 1 ? "#cccccc" : "#ff8a00"}
        className={style.starsRating__star}
      />
      <IconStar
        fill={stars < 2 ? "#cccccc" : "#ff8a00"}
        className={style.starsRating__star}
      />
      <IconStar
        fill={stars < 3 ? "#cccccc" : "#ff8a00"}
        className={style.starsRating__star}
      />
      <IconStar
        fill={stars < 4 ? "#cccccc" : "#ff8a00"}
        className={style.starsRating__star}
      />
      <IconStar
        fill={stars < 5 ? "#cccccc" : "#ff8a00"}
        className={style.starsRating__star}
      />
    </div>
  );
}
