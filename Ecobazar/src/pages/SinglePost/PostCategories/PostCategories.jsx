import * as style from "./PostCategories.module.scss";
import { categories } from "@data/categories";
import { useNavigate } from "react-router-dom";

export default function PostCategories() {
  const navigate = useNavigate();

  return (
    <section className={style.postCategories}>
      <h1 className={style.postCategories__title}>Top Categories</h1>
      <div className={style.postCategories__wrapCategory}>
        {categories.map((item) => {
          return (
            <div key={item.id} className={style.postCategories__innerCategory}>
              <div
                onClick={() =>
                  navigate("/blog", {
                    state: { category: item.category.toLowerCase() },
                  })
                }
                className={style.postCategories__name}
              >
                {item.name}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
