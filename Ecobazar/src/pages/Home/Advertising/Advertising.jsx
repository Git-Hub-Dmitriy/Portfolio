import * as style from "./Advertising.module.scss";
import { advertising } from "@data/advertising";
import BtnLinkShop from "@components/Buttons/BtnLinkShop/BtnLinkShop";

export default function Advertising() {
  return (
    <section className={style.advertising}>
      {advertising.map((item) => {
        if (item.id === 0) {
          return (
            <div key={item.id} className={style.advertising__wrap}>
              <img
                loading="lazy"
                className={style.advertising__img}
                src={item.img}
                alt="advertising image"
              />
              <BtnLinkShop colorArrow={"#ffffff"} />
            </div>
          );
        }
      })}
    </section>
  );
}
