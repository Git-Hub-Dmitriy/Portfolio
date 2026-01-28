import * as style from "./FeaturedProducts.module.scss";
import IconArrowRight from "@assets/iconArrowRight.svg";
import { Link } from "react-router-dom";
import { products } from "@data/products";
import Card from "@components/Card/Card";

export default function FeaturedProducts() {
  return (
    <section className={style.featuredProducts}>
      <div className={style.featuredProducts__head}>
        <h1 className={style.featuredProducts__title}>Featured Products</h1>
        <Link to={"shop"} className={style.featuredProducts__innerLink}>
          <h3 className={style.featuredProducts__textLink}>View All</h3>
          <IconArrowRight
            className={style.featuredProducts__iconArrow}
            stroke={"#00B207"}
          />
        </Link>
      </div>
      <div className={style.featuredProducts__wrapProducts}>
        {products.map((product, i) => {
          if (i <= 4) {
            return <Card path={"shop/"} key={product.id} product={product} />;
          }
        })}
      </div>
    </section>
  );
}
