import * as style from "./PopularCategories.module.scss";
import IconArrowRight from "@assets/iconArrowRight.svg";
import { Link, useNavigate } from "react-router-dom";
import { categories as listCards } from "@data/categories";
import { useState } from "react";

export default function PopularCategories() {
  const [active, setActive] = useState(null);
  const cards = listCards.filter((card) => card.id <= 11);
  const navigate = useNavigate();

  return (
    <section className={style.popularCategories}>
      <div className={style.popularCategories__sectionTitle}>
        <div className={style.popularCategories__wrapTitle}>
          <h1 className={style.popularCategories__title}>Popular Categories</h1>
        </div>
        <div className={style.popularCategories__viewAll}>
          <Link to="/shop">
            <span className={style.popularCategories__text}>View All</span>
            <IconArrowRight
              stroke={"#00B207"}
              className={style.popularCategories__iconArrow}
            />
          </Link>
        </div>
      </div>
      <div className={style.popularCategories__sectionCards}>
        {cards.map((product) => {
          return (
            <div
              onMouseOver={() => setActive(product.id)}
              onMouseOut={() => setActive(null)}
              key={product.id}
              onClick={() =>
                navigate("/shop", {
                  state: { category: product.category.toLowerCase() },
                })
              }
            >
              <div
                className={
                  active !== product.id
                    ? style.card
                    : `${style.card} ${style.card_active}`
                }
              >
                <img
                  loading="lazy"
                  className={style.card__img}
                  src={product.img}
                  alt="CardGoods"
                />
                <h2 className={style.card__title}>{product.name}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
