import * as style from "./Shopping.module.scss";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import {
  minusAmountProductCart,
  plusAmountProductCart,
  removeShoppingCart,
} from "@store/reducers/shoppingCartSlice";
import NotProducts from "./NotProducts/NotProducts";

export default function Shopping() {
  const shoppingCart = useSelector((store) => store.shoppingCart.shoppingCart);
  const dispatch = useDispatch();

  return (
    <main
      className={
        shoppingCart?.length !== 0
          ? style.shopping
          : `${style.shopping} ${style.shopping_empty}`
      }
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shopping Cart</title>
      </Helmet>
      {shoppingCart?.length !== 0 ? (
        <div className={style.shopping__container}>
          <div className={style.shopping__innerTitle}>
            <h4 className={style.shopping__title}>PRODUCT</h4>
            <h4 className={style.shopping__title}>PRICE</h4>
            <h4 className={style.shopping__title}>QUANTITY</h4>
          </div>
          <div className={style.shopping__innerProduct}>
            {shoppingCart?.map((product) => (
              <div key={product.id} className={style.shopping__product}>
                <div className={style.shopping__innerImg}>
                  <img
                    loading="lazy"
                    className={style.shopping__img}
                    src={product?.pictures[0]}
                    alt="image product"
                  />
                  <p className={style.shopping__name}>{product.name}</p>
                </div>
                <h4 className={style.shopping__price}>{product.price}</h4>
                <div className={style.shopping__innerAmount}>
                  <button
                    className={style.shopping__btnMinus}
                    onClick={() => dispatch(minusAmountProductCart(product.id))}
                  >
                    &#8211;
                  </button>
                  <h4 className={style.shopping__amount}>{product.amount}</h4>
                  <button
                    className={style.shopping__btnPlus}
                    onClick={() => dispatch(plusAmountProductCart(product.id))}
                  >
                    &#43;
                  </button>
                </div>
                <button
                  onClick={() => dispatch(removeShoppingCart(product.id))}
                  className={style.shopping__deleteItem}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <NotProducts />
      )}
    </main>
  );
}
