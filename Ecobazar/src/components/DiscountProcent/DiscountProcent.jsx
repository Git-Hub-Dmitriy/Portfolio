import * as style from "./DiscountProcent.module.scss";

export default function DiscountProcent({ product }) {
  return (
    <h3
      className={
        product.oldPrice.length > 1
          ? style.discountProcentSale
          : style.discountProcentSale_hidden
      }
    >
      {product.oldPrice.length > 1 &&
        `Sale ${(
          100 -
          (product.price.slice(1) / product.oldPrice.slice(1)) * 100
        ).toFixed(0)}%`}
    </h3>
  );
}
