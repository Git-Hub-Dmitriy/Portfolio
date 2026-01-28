import * as style from "./BlogTags.module.scss";

export default function BlogTags({ tagState, handleTag }) {
  return (
    <section className={style.blogTags}>
      <h1 className={style.blogTags__title}>Popular Tag</h1>
      <div className={style.blogTags__innerTags}>
        {tagsBlog.map((tag, i) => (
          <h3
            onClick={() => {
              handleTag(tag);
            }}
            key={i}
            className={
              tagState.tag !== tag.toLowerCase()
                ? style.blogTags__tag
                : `${style.blogTags__tag} ${style.blogTags__tag_active}`
            }
          >
            {tag}
          </h3>
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
