import * as style from "./SectionProducts.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  removeShoppingCart,
  plusAmountProductCart,
  minusAmountProductCart,
} from "@store/reducers/shoppingCartSlice";

export default function SectionProducts({ shoppingCart }) {
  const dispatch = useDispatch();

  return (
    <section className={style.sectionProducts}>
      <div className={style.sectionProducts__innerTitle}>
        <h4 className={style.sectionProducts__title}>PRODUCT</h4>
        <h4 className={style.sectionProducts__title}>PRICE</h4>
        <h4 className={style.sectionProducts__title}>QUANTITY</h4>
        <h4 className={style.sectionProducts__title}>SUBTOTAL</h4>
      </div>
      <div className={style.sectionProducts__innerProduct}>
        {shoppingCart?.map((product) => (
          <div key={product.id} className={style.sectionProducts__product}>
            <div className={style.sectionProducts__innerImg}>
              <img
                loading="lazy"
                className={style.sectionProducts__img}
                src={product?.pictures[0]}
                alt="image product"
              />
              <p className={style.sectionProducts__name}>{product.name}</p>
            </div>
            <h4 className={style.sectionProducts__price}>{product.price}</h4>
            <div className={style.sectionProducts__innerAmount}>
              <button
                className={style.sectionProducts__btnMinus}
                onClick={() => dispatch(minusAmountProductCart(product.id))}
              >
                &#8211;
              </button>
              <h4 className={style.sectionProducts__amount}>
                {product.amount}
              </h4>
              <button
                className={style.sectionProducts__btnPlus}
                onClick={() => dispatch(plusAmountProductCart(product.id))}
              >
                &#43;
              </button>
            </div>
            <h4 className={style.sectionProducts__subtotal}>
              {`$${(product.price.slice(1) * product.amount).toFixed(2)}`}
            </h4>
            <button
              onClick={() => dispatch(removeShoppingCart(product.id))}
              className={style.sectionProducts__deleteItem}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
      <div className={style.sectionProducts__innerReturnShop}>
        <Link to={"/shop"} className={style.sectionProducts__returnShop}>
          Return to shop
        </Link>
        <button className={style.sectionProducts__btnUpdate}>
          Update Cart
        </button>
      </div>
    </section>
  );
}
