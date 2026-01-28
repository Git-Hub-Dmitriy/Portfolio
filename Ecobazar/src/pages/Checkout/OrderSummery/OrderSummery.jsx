import * as style from "./OrderSummery.module.scss";
import SectionPayment from "./SectionPayment/SectionPayment";

export default function OrderSummery({
  shipping,
  shoppingCart,
  submit,
  setStatesCheckout,
  statesCheckout,
}) {
  const deliveryToFixed =
    shipping.toLowerCase() !== "free"
      ? `$${Number(shipping.slice(1)).toFixed(2)}`
      : shipping;
  const shippingNumber =
    shipping.toLowerCase() === "free" ? 0 : shipping.slice(1);
  const subtotal = shoppingCart.reduce((acum, item) => {
    const b = item.amount * item.price.slice(1);
    acum = acum + b;
    return acum;
  }, 0);
  const total = subtotal + +shippingNumber;

  return (
    <section className={style.orderSummery}>
      <h1 className={style.orderSummery__title}>Order Summery</h1>
      <div className={style.orderSummery__wrapTotal}>
        <div className={style.orderSummery__wrapSubtitle}>
          <h3 className={style.orderSummery__subtitle}>Subtotal:</h3>
          <h3 className={style.orderSummery__subtitle_bold}>
            {`$${subtotal?.toFixed(2)}`}
          </h3>
        </div>
        <div className={style.orderSummery__wrapSubtitle}>
          <h3 className={style.orderSummery__subtitle}>Shipping:</h3>
          <h3 className={style.orderSummery__subtitle_bold}>
            {deliveryToFixed}
          </h3>
        </div>
        <div className={style.orderSummery__wrapSubtitle}>
          <h3 className={style.orderSummery__subtitle}>Total:</h3>
          <h3 className={style.orderSummery__subtitle_bold}>{`$${total?.toFixed(
            2
          )}`}</h3>
        </div>
      </div>
      <SectionPayment
        submit={submit}
        setStatesCheckout={setStatesCheckout}
        statesCheckout={statesCheckout}
      />
    </section>
  );
}
