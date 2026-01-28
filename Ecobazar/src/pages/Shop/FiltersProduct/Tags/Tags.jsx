import * as style from "./Tags.module.scss";
import IconArrowUp from "@assets/iconArrowUp.svg";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Tags({ handleTag }) {
  const stateTag = useSelector((store) => store.statesShop.tag);
  const [hidden, setHidden] = useState(true);
  return (
    <section
      className={
        hidden === false ? style.tags : `${style.tags} ${style.tags_hidden}`
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
        className={style.tags__innerTitle}
      >
        <h1 className={style.tags__title}>Popular Tag</h1>
        <IconArrowUp
          stroke={"#1a1a1a"}
          className={
            hidden === false
              ? style.tags__iconArrowUp
              : `${style.tags__iconArrowUp} ${style.tags__iconArrowUp_hidden}`
          }
        />
      </div>
      <div
        className={
          hidden === false
            ? style.tags__wrapTags
            : `${style.tags__wrapTags} ${style.tags__wrapTags_hidden}`
        }
      >
        {arrayTags.map((tag, i) => {
          return (
            <button
              onClick={() => handleTag(tag)}
              key={i}
              className={
                tag !== stateTag
                  ? style.tags__innerTag
                  : `${style.tags__innerTag} ${style.tags__innerTag_active}`
              }
            >
              <h2
                className={
                  tag !== stateTag
                    ? style.tags__tag
                    : `${style.tags__tag} ${style.tags__tag_active}`
                }
              >
                {tag}
              </h2>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export const arrayTags = [
  "Healthy",
  "Low fat",
  "Vegetarian",
  "Kid foods",
  "Vitamins",
  "Bread",
  "Meat",
  "Snacks",
  "Tiffin",
  "Lunch",
  "Dinner",
  "Breackfast",
  "Fruit",
];
