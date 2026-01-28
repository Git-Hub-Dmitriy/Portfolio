import * as style from "./PopularProducts.module.scss";
import { popularProducts } from "@data/popularProducts";
import { Link } from "react-router-dom";
import IconArrowRight from "@assets/iconArrowRight.svg";
import Card from "@components/Card/Card";

export default function PopularProducts() {
  return (
    <section className={style.popularProducts}>
      <div className={style.popularProducts__blockTitle}>
        <h1 className={style.popularProducts__title}>Popular Products</h1>
        <div className={style.popularProducts__view}>
          <Link to="shop" className={style.popularProducts__viewLink}>
            <p className={style.popularProducts__viewText}>View All</p>
            <IconArrowRight
              stroke={"#00B207"}
              className={style.popularProducts__iconArrow}
            />
          </Link>
        </div>
      </div>
      <div className={style.popularProducts__blockProducts}>
        {popularProducts.map((product) => {
          return <Card path={"shop/"} key={product.id} product={product} />;
        })}
      </div>
    </section>
  );
}
