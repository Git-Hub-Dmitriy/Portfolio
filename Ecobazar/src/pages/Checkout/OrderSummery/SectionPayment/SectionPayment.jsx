import * as style from "./SectionPayment.module.scss";

export default function SectionPayment({
  submit,
  statesCheckout,
  setStatesCheckout,
}) {
  return (
    <div className={style.sectionPayment}>
      <div className={style.sectionPayment__wrapPay}>
        <h2 className={style.sectionPayment__title}>Payment Method</h2>
        <div className={style.sectionPayment__wrapCheckbox}>
          <div className={style.sectionPayment__innerCheckbox}>
            <input
              defaultChecked
              onChange={(e) =>
                setStatesCheckout({
                  ...statesCheckout,
                  methodPayment: e.target.value,
                })
              }
              name="PaymentMethod"
              value={"cashDelivery"}
              className={style.sectionPayment__radio}
              type="radio"
            />
            <h4 className={style.sectionPayment__subtitle}>Cash on Delivery</h4>
          </div>
          <div className={style.sectionPayment__innerCheckbox}>
            <input
              onChange={(e) =>
                setStatesCheckout({
                  ...statesCheckout,
                  methodPayment: e.target.value,
                })
              }
              name="PaymentMethod"
              value={"paypal"}
              className={style.sectionPayment__radio}
              type="radio"
            />
            <h4 className={style.sectionPayment__subtitle}>Paypal</h4>
          </div>
          <div className={style.sectionPayment__innerCheckbox}>
            <input
              onChange={(e) =>
                setStatesCheckout({
                  ...statesCheckout,
                  methodPayment: e.target.value,
                })
              }
              name="PaymentMethod"
              value={"amazonPay"}
              className={style.sectionPayment__radio}
              type="radio"
            />
            <h4 className={style.sectionPayment__subtitle}>Amazon Pay</h4>
          </div>
        </div>
      </div>
      <button
        onClick={() => submit()}
        form="checkoutData"
        className={style.sectionPayment__btnOrder}
      >
        Place Order
      </button>
    </div>
  );
}
