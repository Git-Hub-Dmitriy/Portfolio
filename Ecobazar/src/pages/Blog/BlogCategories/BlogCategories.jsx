import * as style from "./BlogCategories.module.scss";
import { categories } from "@data/categories";

export default function BlogCategories({ array, category, handleCategory }) {
  return (
    <section className={style.blogCategories}>
      <h1 className={style.blogCategories__title}>Top Categories</h1>
      {categories.map((item) => {
        return (
          <div key={item.id} className={style.blogCategories__wrapCategory}>
            <div className={style.blogCategories__innerCategory}>
              <h3
                onClick={() => {
                  handleCategory(item.category);
                }}
                className={
                  category.category.toLowerCase() ===
                  item.category.toLowerCase()
                    ? `${style.blogCategories__name} ${style.blogCategories__name_active}`
                    : style.blogCategories__name
                }
              >
                {item.name}
              </h3>
              <span className={style.blogCategories__length}>
                {category.category.toLowerCase() === item.category.toLowerCase()
                  ? `(${array.length})`
                  : `(${0})`}
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
}
