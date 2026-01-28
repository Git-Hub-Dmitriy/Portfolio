import * as style from "./Wishlist.module.scss";
import { Helmet } from "react-helmet";
import Navigate from "@components/Navigate/Navigate";
import { useSelector, useDispatch } from "react-redux";
import { removeProductWishlist } from "@store/reducers/wishlistSlice";
import SocialMedia from "@components/SocialMedia/SocialMedia";
import BtnAddBasket from "@components/Buttons/BtnAddBasket/BtnAddBasket";
import NotProducts from "./NotProducts/NotProducts";

export default function Wishlist() {
  const wishlist = useSelector((store) => store.wishlist.wishlist);
  const dispatch = useDispatch();

  return (
    <main className={style.wishlist}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wishlist</title>
      </Helmet>
      <Navigate one={"Wishlist"} />
      <div className={style.wishlist__wrapper}>
        <h1 className={style.wishlist__title}>My Wishlist</h1>
        {wishlist?.length !== 0 ? (
          <section className={style.wishlist__wrapContent}>
            <div className={style.wishlist__innerSubtitle}>
              <h4 className={style.wishlist__subtitle}>PRODUCT</h4>
              <h4 className={style.wishlist__subtitle}>PRICE</h4>
              <h4 className={style.wishlist__subtitle}>STOCK STATUS</h4>
            </div>
            <div className={style.wishlist__wrapProducts}>
              {wishlist?.map((product) => {
                return (
                  <div
                    key={product.id}
                    className={style.wishlist__innerProduct}
                  >
                    <div className={style.wishlist__innerImg}>
                      <img
                        loading="lazy"
                        className={style.wishlist__img}
                        src={product?.pictures[0]}
                        alt="product image"
                      />
                      <h4 className={style.wishlist__productName}>
                        {product.name}
                      </h4>
                    </div>
                    <div className={style.wishlist__innerPrice}>
                      <h4 className={style.wishlist__price}>{product.price}</h4>
                      <h4 className={style.wishlist__price_old}>
                        {product.oldPrice}
                      </h4>
                    </div>
                    <div
                      style={
                        product.inStock === true
                          ? { backgroundColor: "rgba(32, 181, 38, 20%)" }
                          : { backgroundColor: "rgba(234, 75, 72, 30%)" }
                      }
                      className={style.wishlist__inStore}
                    >
                      {product.inStock === true ? "In Stock" : "Out of Stock"}
                    </div>
                    <div className={style.wishlist__innerBtn}>
                      <BtnAddBasket product={product} iconVisible={false} />
                      <button
                        onClick={() =>
                          dispatch(removeProductWishlist(product.id))
                        }
                        className={style.wishlist__btnRemove}
                      >
                        X
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={style.wishlist__innerSocial}>
              <h4 className={style.wishlist__textSocial}>Share: </h4>
              <SocialMedia />
            </div>
          </section>
        ) : (
          <NotProducts />
        )}
      </div>
    </main>
  );
}
