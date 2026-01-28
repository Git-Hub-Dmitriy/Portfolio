import * as style from "./OrderNote.module.scss";

export default function OrderNote({ statesCheckout, setStatesCheckout }) {
  return (
    <div className={style.orderNote}>
      <h1 className={style.orderNote__title}>Additional Info</h1>
      <div className={style.orderNote__innerInput}>
        <h3 className={style.orderNote__subtitle}>Order Notes (Optional)</h3>
        <textarea
          onChange={(e) =>
            setStatesCheckout({
              ...statesCheckout,
              orderNote: e.target.value,
            })
          }
          value={statesCheckout.orderNote}
          placeholder="Notes about your order, e.g. special notes for delivery"
          className={style.orderNote__area}
          name="checkoutNote"
          rows={5}
        ></textarea>
      </div>
    </div>
  );
}
