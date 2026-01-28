import * as style from "./BtnAddBasket.module.scss";
import IconBasket from "@assets/iconBasket.svg";
import { useDispatch, useSelector } from "react-redux";
import { resetProduct } from "@store/reducers/amountProductSlice";
import { addShoppingCart } from "@store/reducers/shoppingCartSlice";
import { useEffect, useState } from "react";
import classNames from "classnames";

export default function BtnAddBasket({ activeCard, product }) {
  const dispatch = useDispatch();
  const amountProduct = useSelector((store) => store.counter.value);
  const shopping = useSelector((store) => store.shoppingCart.shoppingCart);
  const found = shopping?.find((item) => item?.id === product?.id);
  const [modal, setModal] = useState({
    active: false,
    message: null,
  });

  useEffect(() => {
    if (modal.active === true) {
      document.body.addEventListener(
        "keydown",
        function (event) {
          if (event.code === "Escape") {
            setModal({
              active: false,
              message: null,
            });
          }
          return;
        },
        { once: true }
      );
    }
  }, [modal.active]);

  return (
    <>
      <button
        onClick={() => {
          if (!found) {
            if (product.inStock === true) {
              setModal({
                active: true,
                message: "This product added in your shopping cart",
              });
              dispatch(
                addShoppingCart({ product: product, amount: amountProduct })
              );
              dispatch(resetProduct(1));
            } else {
              dispatch(resetProduct(1));
              setModal({
                active: true,
                message: "Sorry, this product ended",
              });
            }
          } else {
            setModal({
              active: true,
              message:
                "this product already has been added in your shopping cart",
            });
            dispatch(resetProduct(1));
          }
        }}
        className={style.btnAddBasket}
      >
        <p className={style.btnAddBasket__title}>Add to Cart</p>
        <IconBasket
          className={style.btnAddBasket__icon}
          stroke={activeCard === product?.id ? "#ffffff" : "#1a1a1a"}
        />
      </button>
      <div
        className={
          modal.active
            ? classNames(style.addBasketModal, style.active)
            : style.addBasketModal
        }
        onClick={() =>
          setModal({
            active: false,
            message: null,
          })
        }
      >
        <div
          className={
            modal.active
              ? classNames(style.addBasketModal__content, style.active)
              : style.addBasketModal__content
          }
          onClick={(e) => e.stopPropagation()}
        >
          {modal.message}
        </div>
      </div>
    </>
  );
}
