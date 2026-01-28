import * as style from "./BlockName.module.scss";

export default function BlockName({ statesCheckout, setStatesCheckout }) {
  return (
    <div className={style.blockName}>
      <div className={style.blockName__innerInput}>
        <h3 className={style.blockName__title}>First name</h3>
        <input
          required
          onChange={(e) =>
            setStatesCheckout({
              ...statesCheckout,
              name: e.target.value,
            })
          }
          value={statesCheckout.name}
          placeholder="Your first name"
          className={style.blockName__input}
          name="checkoutName"
          type="text"
        />
      </div>
      <div className={style.blockName__innerInput}>
        <h3 className={style.blockName__title}>Last name</h3>
        <input
          required
          onChange={(e) =>
            setStatesCheckout({
              ...statesCheckout,
              surname: e.target.value,
            })
          }
          value={statesCheckout.surname}
          placeholder="Your last name"
          className={style.blockName__input}
          name="checkoutSurname"
          type="text"
        />
      </div>
      <div className={style.blockName__innerInput}>
        <h3
          className={`${style.blockName__title} ${style.blockName__title_wrapSpan}`}
        >
          Company Name{" "}
          <span className={style.blockName__textSpan}>(optional)</span>
        </h3>
        <input
          required
          onChange={(e) =>
            setStatesCheckout({
              ...statesCheckout,
              companyName: e.target.value,
            })
          }
          value={statesCheckout.companyName}
          placeholder="Company name"
          className={style.blockName__input}
          name="checkoutCompanyName"
          type="text"
        />
      </div>
    </div>
  );
}
