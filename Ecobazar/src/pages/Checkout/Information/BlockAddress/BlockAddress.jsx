import * as style from "./BlockAddress.module.scss";

export default function BlockAddress({ statesCheckout, setStatesCheckout }) {
  return (
    <div className={style.blockAddress}>
      <h3 className={style.blockAddress__title}>Street Address</h3>
      <input
        required
        onChange={(e) =>
          setStatesCheckout({
            ...statesCheckout,
            address: e.target.value,
          })
        }
        value={statesCheckout.address}
        placeholder="Address"
        className={style.blockAddress__input}
        name="checkoutAddress"
        type="text"
      />
    </div>
  );
}
