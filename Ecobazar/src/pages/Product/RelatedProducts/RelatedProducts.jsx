import * as style from "./RelatedProducts.module.scss";
import Card from "@components/Card/Card";
import { products } from "@data/products";

export default function RelatedProducts() {
  return (
    <section className={style.relatedProducts}>
      <div className={style.relatedProducts__wrapTitle}>
        <h1 className={style.relatedProducts__title}>Related Products</h1>
      </div>
      <div className={style.relatedProducts__wrapProducts}>
        {products.map((card, i) => {
          if (i <= 3) {
            return <Card key={i} product={card} path={"/shop/"} />;
          }
        })}
      </div>
    </section>
  );
}
