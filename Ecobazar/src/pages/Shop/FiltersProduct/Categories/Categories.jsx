import * as style from "./Categories.module.scss";
import { categories } from "@data/categories";
import IconArrowUp from "@assets/iconArrowUp.svg";
import { useState } from "react";
import { products } from "@data/products";
import { useSelector } from "react-redux";

export default function Categories({ handleCategory }) {
  const stateCategory = useSelector((store) => store.statesShop.category);
  const [hidden, setHidden] = useState(false);
  const lengthProducts = products.filter(
    (amount) => amount.category.toLowerCase() === stateCategory
  );

  return (
    <section
      className={
        hidden === false
          ? style.categories
          : `${style.categories} ${style.categories_active}`
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
        className={style.categories__wrapTitle}
      >
        <h2 className={style.categories__title}>All Categories</h2>
        <IconArrowUp
          stroke={"#1a1a1a"}
          className={
            hidden === false
              ? style.categories__iconArrowUp
              : `${style.categories__iconArrowUp} ${style.categories__iconArrowUp_rotate}`
          }
        />
      </div>
      <div
        className={
          hidden === false
            ? style.categories__wrapButtons
            : `${style.categories__wrapButtons} ${style.categories__wrapButtons_hidden}`
        }
      >
        {categories.map((category, i) => {
          return (
            <div key={category.id} className={style.categories__innerButton}>
              <label className={style.categories__button}>
                <input
                  onClick={(e) => {
                    handleCategory(e.target.value);
                  }}
                  type="radio"
                  className={style.categories__radio}
                  name="category"
                  value={category.category.toLowerCase()}
                  checked={
                    category.category.toLowerCase() === stateCategory
                      ? true
                      : false
                  }
                />
                {category.category}
              </label>
              <span className={style.categories__categoryLength}>
                {stateCategory === category.category.toLowerCase()
                  ? `(${lengthProducts.length})`
                  : `(${0})`}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
