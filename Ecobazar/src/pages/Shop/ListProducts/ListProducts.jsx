import * as style from "./ListProducts.module.scss";
import Card from "@components/Card/Card";

export default function ListProducts({ filter }) {
  return (
    <section className={style.listProducts}>
      {filter.map((product) => {
        return <Card key={product.id} product={product} />;
      })}
    </section>
  );
}
