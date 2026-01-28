import * as style from "./BlockCheckbox.module.scss";
export default function BlockCheckbox({ statesCheckout, setStatesCheckout }) {
  return (
    <div className={style.blockCheckbox}>
      <input
        onChange={() =>
          setStatesCheckout({
            ...statesCheckout,
            addressCheckbox: !statesCheckout.addressCheckbox,
          })
        }
        checked={statesCheckout.addressCheckbox}
        name="checkoutAddressCheckbox"
        value={"differentAddress"}
        type="checkbox"
        className={style.blockCheckbox__input}
      />
      <p className={style.blockCheckbox__text}>Ship to a different address</p>
    </div>
  );
}
