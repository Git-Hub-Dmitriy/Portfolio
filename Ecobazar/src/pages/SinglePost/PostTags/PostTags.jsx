import * as style from "./PostTags.module.scss";
import { useNavigate } from "react-router-dom";

export default function PostTags() {
  const navigate = useNavigate();

  return (
    <section className={style.postTags}>
      <h1 className={style.postTags__title}>Popular Tag</h1>
      <div className={style.postTags__innerTags}>
        {tagsBlog.map((tag, i) => (
          <div
            onClick={() =>
              navigate("/blog", { state: { tag: tag.toLowerCase() } })
            }
            key={i}
            className={style.postTags__tag}
          >
            {tag}
          </div>
        ))}
      </div>
    </section>
  );
}

export const tagsBlog = [
  "Healthy",
  "Low fat",
  "Vegetarian",
  "Bread",
  "Kid foods",
  "Vitamins",
  "Snacks",
  "Tiffin",
  "Meat",
  "Lunch",
  "Dinner",
];
