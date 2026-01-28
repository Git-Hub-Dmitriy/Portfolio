import * as style from "./ShoppingCart.module.scss";
import Navigate from "@components/Navigate/Navigate";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import NotProducts from "./NotProducts/NotProducts";
import SectionCoupon from "./SectionCoupon/SectionCoupon";
import SectionProducts from "./SectionProducts/SectionProducts";
import CartTotal from "./CartTotal/CartTotal";
import { useEffect } from "react";

export default function ShoppingCart() {
  const shoppingCart = useSelector((store) => store.shoppingCart.shoppingCart);
  const shipping = "Free";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={style.shoppingCart}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ShoppingCart</title>
      </Helmet>
      <Navigate one={"Shopping cart"} />
      <div className={style.shoppingCart__wrapper}>
        <h1 className={style.shoppingCart__title}>My Shopping Cart</h1>
        {shoppingCart?.length === 0 ? (
          <NotProducts />
        ) : (
          <div className={style.shoppingCart__wrapContent}>
            <SectionProducts shoppingCart={shoppingCart} />
            <CartTotal shoppingCart={shoppingCart} shipping={shipping} />
          </div>
        )}
        {shoppingCart?.length === 0 ? undefined : <SectionCoupon />}
      </div>
    </main>
  );
}
