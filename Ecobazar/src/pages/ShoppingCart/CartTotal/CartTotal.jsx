import { useState } from "react";
import * as style from "./CartTotal.module.scss";
import { NavLink } from "react-router-dom";

export default function CartTotal({ shoppingCart, shipping }) {
  const [delivery, setDelivery] = useState(shipping);
  const deliveryToFixed =
    delivery.toLowerCase() !== "free"
      ? `$${Number(delivery.slice(1)).toFixed(2)}`
      : delivery;
  const shippingNumber =
    delivery.toLowerCase() === "free" ? 0 : delivery.slice(1);
  const subtotal = shoppingCart.reduce((acum, item) => {
    const b = item.amount * item.price.slice(1);
    acum = acum + b;
    return acum;
  }, 0);
  const total = subtotal + +shippingNumber;

  return (
    <section className={style.cartTotal}>
      <h2 className={style.cartTotal__title}>Cart Total</h2>
      <div className={style.cartTotal__wrapPrice}>
        <div className={style.cartTotal__innerSubtotal}>
          <h4 className={style.cartTotal__subtitle}>Subtotal:</h4>
          <h4 className={style.cartTotal__text}>{`$${subtotal?.toFixed(
            2
          )}`}</h4>
        </div>
        <div className={style.cartTotal__innerShipping}>
          <h4 className={style.cartTotal__subtitle}>Shipping:</h4>
          <h4 className={style.cartTotal__text}>{deliveryToFixed}</h4>
        </div>
        <div className={style.cartTotal__innerTotal}>
          <h4 className={style.cartTotal__subtitle_big}>Total:</h4>
          <h4 className={style.cartTotal__text_fat}>{`$${total?.toFixed(
            2
          )}`}</h4>
        </div>
      </div>
      <NavLink to={"/checkout"} className={style.cartTotal__btnPayment}>
        Proceed to checkout
      </NavLink>
    </section>
  );
}
