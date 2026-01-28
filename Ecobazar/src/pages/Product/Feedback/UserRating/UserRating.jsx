import * as style from "./UserRating.module.scss";
import IconStar from "@assets/iconStar.svg";

export default function UserRating({ stars }) {
  return (
    <div className={style.userRating}>
      <IconStar
        className={style.userRating__iconStar}
        fill={stars >= 1 ? "#FF8A00" : "#CCCCCC"}
      />
      <IconStar
        className={style.userRating__iconStar}
        fill={stars >= 2 ? "#FF8A00" : "#CCCCCC"}
      />
      <IconStar
        className={style.userRating__iconStar}
        fill={stars >= 3 ? "#FF8A00" : "#CCCCCC"}
      />
      <IconStar
        className={style.userRating__iconStar}
        fill={stars >= 4 ? "#FF8A00" : "#CCCCCC"}
      />
      <IconStar
        className={style.userRating__iconStar}
        fill={stars >= 5 ? "#FF8A00" : "#CCCCCC"}
      />
    </div>
  );
}
