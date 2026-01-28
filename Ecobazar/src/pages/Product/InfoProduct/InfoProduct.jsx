import * as style from "./InfoProduct.module.scss";
import StarsRating from "@components/StarsRating/StarsRating";
import SocialMedia from "@components/SocialMedia/SocialMedia";
import AmountProduct from "@components/Buttons/AmountProduct/AmountProduct";
import BtnAddBasket from "@components/Buttons/BtnAddBasket/BtnAddBasket";
import BtnAddWishlist from "@components/Buttons/BtnAddWishlist/BtnAddWishlist";

export default function InfoProduct({ product, index }) {
  const price = product.price.slice(1);
  const oldPrice = product.oldPrice.slice(1);
  const discount = 100 - (price / oldPrice) * 100;

  return (
    <section className={style.infoProduct}>
      <div className={style.infoProduct__wrapImg}>
        <img
          loading="lazy"
          className={style.infoProduct__img}
          src={`/${product.pictures[index]}`}
          alt="Big image"
        />
      </div>
      <div className={style.infoProduct__info}>
        <div className={style.infoProduct__innerTitle}>
          <h1 className={style.infoProduct__title}>{product.name}</h1>
          <h3
            className={
              product.inStock
                ? style.reviewProduct__presence
                : style.reviewProduct__absence
            }
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </h3>
        </div>
        <div className={style.infoProduct__innerRating}>
          <StarsRating card={product} />
          <h3
            className={style.infoProduct__feedback}
          >{`${product.feedback.length} Review`}</h3>
          <h3 className={style.infoProduct__sku}>
            <b>SKU:</b> 2,51,594
          </h3>
        </div>
        <div className={style.infoProduct__wrapPrice}>
          <h2 className={style.infoProduct__price}>{product.oldPrice}</h2>
          <h2 className={style.infoProduct__oldPrice}>{product.price}</h2>
          <h2 className={style.infoProduct__discount}>
            {product.oldPrice ? `${discount.toFixed(0)}% Off` : ""}
          </h2>
        </div>
        <div className={style.infoProduct__wrapSocial}>
          <div className={style.infoProduct__innerBrand}>
            <h3 className={style.infoProduct__brand}>
              <strong>Brand:</strong>
            </h3>
            <img
              loading="lazy"
              className={style.infoProduct__imgBrand}
              src={`/${product.imgBrand}`}
              alt="image brand"
            />
          </div>
          <div className={style.infoProduct__innerSocial}>
            <h3 className={style.infoProduct__textShare}>Share item:</h3>
            <SocialMedia />
          </div>
        </div>
        <p className={style.infoProduct__text}>{product.description}</p>
        <div className={style.infoProduct__wrapBtn}>
          <AmountProduct />
          <BtnAddBasket activeCard={product.id} product={product} />
          <BtnAddWishlist product={product} />
        </div>
        <h3 className={style.infoProduct__category}>
          <span>Category:</span>
          {product.category}
        </h3>
        <div className={style.infoProduct__innerTags}>
          <span className={style.infoProduct__tagText}>{"Tag:"}</span>
          {product.tags.map((tag, i) => {
            return (
              <span key={i} className={style.infoProduct__tag}>
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
