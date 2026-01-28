import * as style from "./AccountWishlist.module.scss";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { removeProductWishlist } from "@store/reducers/wishlistSlice";
import SocialMedia from "@components/SocialMedia/SocialMedia";
import BtnAddBasket from "@components/Buttons/BtnAddBasket/BtnAddBasket";
import NotProducts from "./NotProducts/NotProducts";

export default function AccountWishlist() {
  const wishlist = useSelector((store) => store.wishlist.wishlist);
  const dispatch = useDispatch();

  return (
    <main
      className={
        wishlist?.length !== 0
          ? style.accountWishlist
          : `${style.accountWishlist} ${style.accountWishlist_empty}`
      }
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wishlist</title>
      </Helmet>
      {wishlist?.length !== 0 ? (
        <div className={style.accountWishlist__wrapContent}>
          <div className={style.accountWishlist__innerSubtitle}>
            <h4 className={style.accountWishlist__subtitle}>PRODUCT</h4>
            <h4 className={style.accountWishlist__subtitle}>PRICE</h4>
            <h4 className={style.accountWishlist__subtitle}>STOCK STATUS</h4>
          </div>
          <div className={style.accountWishlist__wrapProducts}>
            {wishlist?.map((product) => {
              return (
                <div
                  key={product.id}
                  className={style.accountWishlist__innerProduct}
                >
                  <div className={style.accountWishlist__innerImg}>
                    <img
                      loading="lazy"
                      className={style.accountWishlist__img}
                      src={product?.pictures[0]}
                      alt="product image"
                    />
                    <h4 className={style.accountWishlist__productName}>
                      {product.name}
                    </h4>
                  </div>
                  <div className={style.accountWishlist__innerPrice}>
                    <h4 className={style.accountWishlist__price}>
                      {product.price}
                    </h4>
                    <h4 className={style.accountWishlist__price_old}>
                      {product.oldPrice}
                    </h4>
                  </div>
                  <div
                    style={
                      product.inStock === true
                        ? { backgroundColor: "rgba(32, 181, 38, 20%)" }
                        : { backgroundColor: "rgba(234, 75, 72, 30%)" }
                    }
                    className={style.accountWishlist__inStore}
                  >
                    {product.inStock === true ? "In Stock" : "Out of Stock"}
                  </div>
                  <div className={style.accountWishlist__innerBtn}>
                    <BtnAddBasket product={product} iconVisible={false} />
                    <button
                      onClick={() =>
                        dispatch(removeProductWishlist(product.id))
                      }
                      className={style.accountWishlist__btnRemove}
                    >
                      X
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <NotProducts />
      )}
    </main>
  );
}
