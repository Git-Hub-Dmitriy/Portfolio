import { useParams, Outlet, NavLink } from "react-router-dom";
import * as style from "./Product.module.scss";
import { Helmet } from "react-helmet";
import { products } from "@data/products";
import Navigate from "@components/Navigate/Navigate";
import InfoProduct from "./InfoProduct/InfoProduct";
import SliderImage from "./SliderImage/SliderImage";
import { useState, useEffect } from "react";
import RelatedProducts from "./RelatedProducts/RelatedProducts";

export default function Product() {
  const { id } = useParams();
  const card = products.find((item) => item.id == id);
  const [index, setIndex] = useState(0);

  const isActive = ({ isActive }) =>
    isActive ? style.product__link_active : style.product__link;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={style.product}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Product</title>
      </Helmet>
      <Navigate one={"Category"} two={card.category} three={card.name} />
      <div className={style.product__wrapProduct}>
        <SliderImage index={index} setIndex={setIndex} product={card} />
        <InfoProduct product={card} index={index} />
      </div>
      <div className={style.product__innerLinks}>
        <NavLink className={isActive} to={"description"}>
          Descriptions
        </NavLink>
        <NavLink className={isActive} to="information">
          Additional Information
        </NavLink>
        <NavLink className={isActive} to="feedback">
          Customer Feedback
        </NavLink>
      </div>
      <div className={style.product__wrapDescription}>
        <Outlet />
      </div>
      <RelatedProducts />
    </main>
  );
}
