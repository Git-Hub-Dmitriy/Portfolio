import * as style from "./Sales.module.scss";
import { useState } from "react";
import { products } from "@data/products";
import { Link } from "react-router-dom";
import StarsRating from "@components/StarsRating/StarsRating";

export default function Sales() {
  const [activeCard, setActiveCard] = useState(null);
  const sales = products.filter((card) => card.oldPrice);
  const cards = sales.filter((item, i) => i < 3);

  return (
    <section className={style.sales}>
      <div className={style.sales__wrapBannar}>
        <img
          loading="lazy"
          className={style.sales__img}
          src="images/saleBannar.webp"
          alt="image bannar"
        />
      </div>
      <div className={style.sales__wrapSaleProduct}>
        <h2 className={style.sales__title}>Sale Products</h2>
        <div className={style.sales__saleProducts}>
          {cards.map((card, i) => {
            return (
              <Link
                onMouseOver={() => setActiveCard(card.id)}
                onMouseOut={() => setActiveCard(null)}
                to={`${card.id}`}
                key={i}
                className={
                  activeCard !== card.id
                    ? style.sales__card
                    : `${style.sales__card} ${style.sales__card_active}`
                }
              >
                <div className={style.sales__cardWrapImage}>
                  <img
                    loading="lazy"
                    className={style.sales__cardImage}
                    src={card.pictures[0]}
                    alt="card product"
                  />
                </div>
                <div className={style.sales__innerContent}>
                  <h3 className={style.sales__cardTitle}>{card.name}</h3>
                  <div className={style.sales__innerPrice}>
                    <h3 className={style.sales__cardPrice}>{card.price}</h3>
                    <h3 className={style.sales__cardOldPrice}>
                      {card.oldPrice}
                    </h3>
                  </div>
                  <StarsRating card={card} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
