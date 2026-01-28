import * as style from "./BlockEmail.module.scss";

export default function BlockEmail({ statesCheckout, setStatesCheckout }) {
  return (
    <div className={style.blockEmail}>
      <div className={style.blockEmail__wrapInput}>
        <h3 className={style.blockEmail__title}>Email</h3>
        <input
          required
          placeholder="Email Address"
          onChange={(e) =>
            setStatesCheckout({
              ...statesCheckout,
              email: e.target.value,
            })
          }
          value={statesCheckout.email}
          className={style.blockEmail__input}
          name="checkoutEmail"
          type="email"
        />
      </div>
      <div className={style.blockEmail__wrapInput}>
        <h3 className={style.blockEmail__title}>Phone</h3>
        <input
          required
          placeholder="Phone number"
          onChange={(e) =>
            setStatesCheckout({
              ...statesCheckout,
              phone: e.target.value,
            })
          }
          value={statesCheckout.phone}
          className={style.blockEmail__input}
          name="checkoutEmail"
          type="tel"
        />
      </div>
    </div>
  );
}
