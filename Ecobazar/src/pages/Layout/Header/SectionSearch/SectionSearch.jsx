import * as style from "./SectionSearch.module.scss";
import Search from "@components/Forms/Search/Search";
import Logo from "@components/Logo/Logo";
import IconHeart from "@assets/iconHeart.svg";
import IconBasket from "@assets/iconBasket.svg";
import { NavLink } from "react-router-dom";
import IconSeparator from "@assets/iconSeparator.svg";
import { useSelector } from "react-redux";

export default function SectionSearch() {
  const shoppingCart = useSelector((store) => store.shoppingCart.shoppingCart);
  const total = shoppingCart.reduce((acum, item) => {
    const b = item.amount * item.price.slice(1);
    acum = acum + b;
    return acum;
  }, 0);

  return (
    <section className={style.sectionSearch}>
      <Logo colorText={"#1a1a1a"} />
      <Search />
      <div className={style.sectionSearch__wrapBasket}>
        <NavLink className={style.sectionSearch__link} to={"wishlist"}>
          <IconHeart
            stroke={"#1a1a1a"}
            className={style.sectionSearch__iconHeart}
          />
        </NavLink>
        <IconSeparator className={style.sectionSearch__iconSeparator} />
        <NavLink to="shoppingCart" className={style.sectionSearch__innerBasket}>
          <div className={style.sectionSearch__innerIconBasket}>
            <div className={style.sectionSearch__counter}>
              {shoppingCart.length}
            </div>
            <IconBasket
              stroke={"#1a1a1a"}
              className={style.sectionSearch__iconBasket}
            />
          </div>
          <div className={style.sectionSearch__innerSubtitle}>
            <h4 className={style.sectionSearch__subtitle}>Shopping cart:</h4>
            <h4
              className={style.sectionSearch__subtitle_bold}
            >{`$ ${total.toFixed(2)}`}</h4>
          </div>
        </NavLink>
      </div>
    </section>
  );
}
