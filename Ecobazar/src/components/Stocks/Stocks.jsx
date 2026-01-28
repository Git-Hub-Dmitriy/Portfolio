import * as style from "./Stocks.module.scss";
import { stocks } from "@data/stocks";
import BtnLinkShop from "@components/Buttons/BtnLinkShop/BtnLinkShop";

export default function Stocks() {
  return (
    <section className={style.stocks}>
      {stocks.map((item) => (
        <div key={item.id} className={style.stocks__section}>
          <img
            loading="lazy"
            className={style.stocks__image}
            src={item.image}
            alt="image Stock"
          />
          <BtnLinkShop colorArrow={"#00B207"} />
        </div>
      ))}
    </section>
  );
}
