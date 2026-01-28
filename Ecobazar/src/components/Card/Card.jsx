import * as style from "./Card.module.scss";
import { Link } from "react-router-dom";
import BtnActiveModal from "@components/Buttons/BtnActiveModal/BtnActiveModal";
import BtnAddBasket from "@components/Buttons/BtnAddBasket/BtnAddBasket";
import BtnAddWishlist from "@components/Buttons/BtnAddWishlist/BtnAddWishlist";
import DiscountProcent from "@components/DiscountProcent/DiscountProcent";
import { useState } from "react";
import StarsRating from "@components/StarsRating/StarsRating";

export default function Card({ product, path }) {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div
      key={product.id}
      className={
        activeCard === product.id
          ? `${style.card} ${style.card_active}`
          : style.card
      }
      onMouseOver={() => setActiveCard(product.id)}
      onMouseOut={() => setActiveCard(null)}
    >
      <div className={style.card__wrapImg}>
        <img
          loading="lazy"
          className={style.card__img}
          src={`/${product.pictures[0]}`}
          alt="image product"
        />
      </div>
      <Link
        onClick={() => window.scrollTo(0, 0)}
        to={
          path
            ? `${path}${product.id}/description`
            : `${product.id}/description`
        }
        className={style.card__wrapContent}
      >
        <h3 className={style.card__title}>{product.name}</h3>
        <div className={style.card__innerPrice}>
          <h3 className={style.card__price}>{product.price}</h3>
          <h3 className={style.card__oldPrice}>{product.oldPrice}</h3>
        </div>
        <StarsRating card={product} />
      </Link>
      <DiscountProcent product={product} />
      <BtnAddWishlist product={product} />
      <BtnActiveModal id={product.id} />
      <BtnAddBasket activeCard={activeCard} product={product} />
    </div>
  );
}
