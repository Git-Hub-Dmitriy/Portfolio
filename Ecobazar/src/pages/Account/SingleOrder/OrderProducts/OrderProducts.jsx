import * as style from "./OrderProducts.module.scss";
import { products } from "@data/products";

export default function OrderProducts({ order }) {
  const copy = order.products.slice();
  const array = [];
  const result = copy.forEach((prod) => {
    const a = products.find((item) => item.id == prod.id);
    array.push({ name: a.pictures[0], img: a.name });
  });
  let finalArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let a = 0; a < copy.length; a++) {
      finalArray[a] = { ...copy[a], img: array[a].name, name: array[a].img };
    }
  }

  return (
    <section className={style.orderProducts}>
      <div className={style.orderProducts__wrapTitle}>
        <h4 className={style.orderProducts__title}>PRODUCT</h4>
        <h4 className={style.orderProducts__title}>PRICE</h4>
        <h4 className={style.orderProducts__title}>QUANTITY</h4>
        <h4 className={style.orderProducts__title}>SUBTOTAL</h4>
      </div>
      <div className={style.orderProducts__wrapProducts}>
        {finalArray.map((product) => {
          return (
            <div key={product.id} className={style.orderProducts__innerProduct}>
              <div className={style.orderProducts__inerImg}>
                <img
                  loading="lazy"
                  className={style.orderProducts__img}
                  src={product.img}
                  alt="product image"
                />
              </div>
              <h4 className={style.orderProducts__text}>{product.name}</h4>
              <h4
                className={style.orderProducts__text}
              >{`$${product.price}`}</h4>
              <h4
                className={style.orderProducts__text}
              >{`x${product.amount}`}</h4>
              <h4 className={style.orderProducts__text}>
                {`$${product.amount * product.price}`}
              </h4>
            </div>
          );
        })}
      </div>
    </section>
  );
}
