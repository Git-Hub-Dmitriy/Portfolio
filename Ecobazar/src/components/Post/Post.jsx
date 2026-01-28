import * as style from "./Post.module.scss";
import { Link } from "react-router-dom";
import IconTag from "@assets/iconTag.svg";
import IconComment from "@assets/iconComment.svg";
import IconUser from "@assets/iconProfile.svg";
import IconArrowRight from "@assets/iconArrowRight.svg";

export default function Post({ active, setActive, bannar, path }) {
  function receiveMonth(month) {
    const nameMonth = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEPT",
      "OCT",
      "NOV",
      "DEC",
    ];
    return nameMonth[month];
  }

  return (
    <div
      className={
        active !== bannar.id ? style.post : `${style.post} ${style.post_active}`
      }
    >
      <div className={style.post__wrapImage}>
        <div className={style.post__innerDate}>
          <h3 className={style.post__date}>{bannar.date.getDate()}</h3>
          <h3 className={style.post__day}>
            {receiveMonth(bannar.date.getMonth())}
          </h3>
        </div>
        <img
          loading="lazy"
          className={style.post__image}
          src={bannar.img}
          alt="Bannar news"
        />
      </div>
      <div className={style.post__wrapContent}>
        <div className={style.post__innerTag}>
          <h3 className={style.post__tag}>
            <IconTag stroke={"#B3B3B3"} className={style.post__iconTag} />
            {bannar.category}
          </h3>
          <h3 className={style.post__user}>
            <IconUser stroke={"#B3B3B3"} className={style.post__iconUser} />
            By Admin
          </h3>
          <h3 className={style.post__comment}>
            <IconComment
              stroke={"#B3B3B3"}
              className={style.post__iconComment}
            />
            {bannar.comments.length > 0
              ? `${bannar.comments.length} Comments`
              : "0 Comments"}
          </h3>
        </div>
        <h2 className={style.post__textContent}>
          {bannar.text.length < 72 ? bannar.text : bannar.text.slice(0, 72)}
        </h2>
        <Link
          to={path ? `${path}${bannar.id}` : `${bannar.id}`}
          className={style.post__innerBtn}
        >
          <h3 className={style.post__textBtn}>Read More</h3>
          <IconArrowRight
            stroke={"#00B207"}
            className={style.post__iconArrowRight}
          />
        </Link>
      </div>
    </div>
  );
}
