import * as style from "./BtnAddWishlist.module.scss";
import IconHeart from "@assets/iconHeart.svg";
import { useDispatch, useSelector } from "react-redux";
import { addProductWishlist } from "@store/reducers/wishlistSlice";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { changeModalReview } from "@store/reducers/activeModalSlice";
import { resetProduct } from "@store/reducers/amountProductSlice";

export default function BtnAddWishlist({ product }) {
  const [modal, setModal] = useState({
    active: false,
    message: null,
  });
  const dispatch = useDispatch();
  const wishlist = useSelector((store) => store.wishlist.wishlist);
  const authorization = useSelector(
    (store) => store.authorization.authorization
  );
  const foundProduct = wishlist?.find((item) => item?.id === product?.id);
  const navigate = useNavigate();
  const location = useLocation();

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
          if (authorization) {
            if (!foundProduct) {
              setModal({
                active: true,
                message: "This product added in your wishlist",
              });
              dispatch(addProductWishlist({ product: product }));
            } else {
              setModal({
                active: true,
                message: "this product already has been added in your wishlist",
              });
            }
          } else {
            dispatch(
              changeModalReview({
                modalReview: false,
                activeImage: false,
                id: 0,
              })
            );
            dispatch(resetProduct(1));
            navigate("/login", { replace: true, state: { from: location } });
          }
        }}
        className={style.btnAddWishlist}
      >
        <IconHeart className={style.btnAddWishlist__icon} stroke={"#1a1a1a"} />
      </button>
      <div
        className={
          modal.active
            ? `${style.wishlistModal} ${style.wishlistModal_active}`
            : style.wishlistModal
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
              ? `${style.wishlistModal__content} ${style.wishlistModal__content_active}`
              : style.wishlistModal__content
          }
          onClick={(e) => e.stopPropagation()}
        >
          {modal.message}
        </div>
      </div>
    </>
  );
}
