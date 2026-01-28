import * as style from "./BestSale.module.scss";
import StarsRating from "@components/StarsRating/StarsRating";
import DiscountProcent from "@components/DiscountProcent/DiscountProcent";
import BtnAddWishlist from "@components/Buttons/BtnAddWishlist/BtnAddWishlist";
import BtnAddBasket from "@components/Buttons/BtnAddBasket/BtnAddBasket";
import BtnActiveModal from "@components/Buttons/BtnActiveModal/BtnActiveModal";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function BestSale({ product, active, setActive }) {
  const [timer, setTimer] = useState({
    time: new Date("2026-05-04T18:54:00"),
    date: {
      days: "",
      hours: "",
      minutes: "",
      seconds: "",
    },
  });
  function tick() {
    const time = new Date();
    const result = timer.time - time;
    const days = Math.floor(result / 3600000 / 24);
    const hours = Math.floor((result - days * 24 * 3600000) / 3600000);
    const minutes = Math.floor(
      (result - days * 24 * 3600000 - hours * 3600000) / 60000
    );
    const seconds = Math.floor(
      (result - days * 24 * 3600000 - hours * 3600000 - minutes * 60000) / 1000
    );
    setTimer({
      ...timer,
      date: {
        ...timer.date,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      },
    });
  }

  useEffect(() => {
    setInterval(() => tick(), 1000);
  }, []);

  return (
    <article
      onMouseOver={() => setActive(product.id)}
      onMouseOut={() => setActive(null)}
      className={
        active !== product.id
          ? style.bestSale
          : `${style.bestSale} ${style.bestSale_active}`
      }
    >
      <DiscountProcent product={product} />
      <div className={style.bestSale__textSale}>Best Sale</div>
      <div className={style.bestSale__wrapImage}>
        <div className={style.bestSale__wrapButtonAcquire}>
          <BtnAddWishlist product={product} />
          <BtnAddBasket product={product} activeCard={product.id} />
          <BtnActiveModal id={product.id} />
        </div>
        <img loading="lazy" src={product.pictures[1]} alt="image product" />
      </div>
      <Link
        to={`shop/${product.id}/description`}
        className={style.bestSale__wrapPrice}
      >
        <h1 className={style.bestSale__title}>{product.name}</h1>
        <div className={style.bestSale__innerPrice}>
          <h2 className={style.bestSale__price}>{product.price}</h2>
          <h2 className={style.bestSale__oldPrice}>{product.oldPrice}</h2>
        </div>
        <div className={style.bestSale__innerStars}>
          <StarsRating card={product} />
          <h2
            className={style.bestSale__feedback}
          >{`(${product.feedback.length} Feedback)`}</h2>
        </div>
        <div className={style.bestSale__innerCounting}>
          <h3 className={style.bestSale__textCounting}>
            Hurry up! Offer ends in:
          </h3>
          <div className={style.bestSale__counting}>
            <div className={style.bestSale__innerDays}>
              <h3 className={style.bestSale__amountDays}>{timer.date.days}</h3>
              <h3 className={style.bestSale__textDays}>DAYS</h3>
            </div>
            <div className={style.bestSale__innerTime}>
              <div className={style.bestSale__innerHours}>
                <h3 className={style.bestSale__amountHours}>
                  {timer.date.hours}
                </h3>
                <h3 className={style.bestSale__textHours}>HOURS</h3>
              </div>
              <div className={style.bestSale__separator}>:</div>
              <div className={style.bestSale__innerMinutes}>
                <h3 className={style.bestSale__amountMinutes}>
                  {timer.date.minutes}
                </h3>
                <h3 className={style.bestSale__textMinutes}>MINS</h3>
              </div>
              <div className={style.bestSale__separator}>:</div>
              <div className={style.bestSale__innerSeconds}>
                <h3 className={style.bestSale__amountSeconds}>
                  {timer.date.seconds}
                </h3>
                <h3 className={style.bestSale__textSeconds}>SECS</h3>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
