import * as style from "./Information.module.scss";
import BlockName from "./BlockName/BlockName";
import BlockCountry from "./BlockCountry/BlockCountry";
import BlockEmail from "./BlockEmail/BlockEmail";
import BlockAddress from "./BlockAddress/BlockAddress";
import BlockCheckbox from "./BlockCheckbox/BlockCheckbox";
import OrderNote from "./OrderNote/OrderNote";

export default function Information({
  statesCheckout,
  setStatesCheckout,
  data,
}) {
  return (
    <section className={style.information}>
      <h1 className={style.information__title}>Billing Information</h1>
      <form className={style.information__form} id="checkoutData">
        <BlockName
          statesCheckout={statesCheckout}
          setStatesCheckout={setStatesCheckout}
        />
        <BlockAddress
          statesCheckout={statesCheckout}
          setStatesCheckout={setStatesCheckout}
        />
        <BlockCountry
          data={data}
          statesCheckout={statesCheckout}
          setStatesCheckout={setStatesCheckout}
        />
        <BlockEmail
          statesCheckout={statesCheckout}
          setStatesCheckout={setStatesCheckout}
        />
        <BlockCheckbox
          statesCheckout={statesCheckout}
          setStatesCheckout={setStatesCheckout}
        />
        <OrderNote
          statesCheckout={statesCheckout}
          setStatesCheckout={setStatesCheckout}
        />
      </form>
    </section>
  );
}
