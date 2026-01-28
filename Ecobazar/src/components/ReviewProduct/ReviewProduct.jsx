import * as style from "./ReviewProduct.module.scss";
import StarsRating from "@components/StarsRating/StarsRating";
import SliderImage from "./SliderImage/SliderImage";
import SocialMedia from "@components/SocialMedia/SocialMedia";
import { useState } from "react";
import AmountProduct from "@components/Buttons/AmountProduct/AmountProduct";
import BtnAddBasket from "@components/Buttons/BtnAddBasket/BtnAddBasket";
import BtnAddWishlist from "@components/Buttons/BtnAddWishlist/BtnAddWishlist";
import { useSelector, useDispatch } from "react-redux";
import { changeModalReview } from "@store/reducers/activeModalSlice";

export default function ReviewProduct({ product }) {
  const [index, setIndex] = useState(0);
  const price = product.price.slice(1);
  const oldPrice = product.oldPrice.slice(1);
  const discount = 100 - (price / oldPrice) * 100;
  const dispatch = useDispatch();
  const activeImage = useSelector((store) => store.activeModal.activeImage);

  return (
    <main
      className={
        activeImage === false
          ? style.reviewProduct
          : `${style.reviewProduct} ${style.reviewProduct_active}`
      }
    >
      <div className={style.reviewProduct__sectionOne}>
        <SliderImage product={product} index={index} setIndex={setIndex} />
        <div className={style.reviewProduct__wrapImage}>
          <img
            loading="lazy"
            onClick={() => {
              if (!activeImage) {
                dispatch(changeModalReview({ activeImage: true }));
              } else {
                dispatch(changeModalReview({ activeImage: false }));
              }
            }}
            className={
              activeImage === false
                ? style.reviewProduct__hugeImage
                : `${style.reviewProduct__hugeImage} ${style.reviewProduct__hugeImage_active}`
            }
            src={`/${product.pictures[index]}`}
            alt="big image"
          />
        </div>
      </div>
      <div className={style.reviewProduct__sectionTwo}>
        <div className={style.reviewProduct__boxContent}>
          <div className={style.reviewProduct__wrapTitle}>
            <h1 className={style.reviewProduct__title}>{product.name}</h1>
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
          <div className={style.reviewProduct__wrapRating}>
            <StarsRating card={product} />
            <h3
              className={style.reviewProduct__countReview}
            >{`${product.feedback.length} Review`}</h3>
            <div className={style.reviewProduct__innerSku}>
              <h2 className={style.reviewProduct__sku}>SKU:</h2>
              <h3 className={style.reviewProduct__skuNumbers}>2,51,594</h3>
            </div>
          </div>
          <div className={style.reviewProduct__wrapPrice}>
            <h2 className={style.reviewProduct__oldPrice}>
              {product.oldPrice}
            </h2>
            <h2
              className={
                product.oldPrice
                  ? style.reviewProduct__price_discount
                  : style.reviewProduct__price
              }
            >
              {product.price}
            </h2>
            <h2 className={style.reviewProduct__discount}>
              {product.oldPrice ? `${discount.toFixed(0)}% Off` : ""}
            </h2>
          </div>
          <div className={style.reviewProduct__wrapInfo}>
            <div className={style.reviewProduct__innerBrand}>
              <h2 className={style.reviewProduct__brandText}>Brand:</h2>
              <div className={style.reviewProduct__innerBrandImg}>
                <img
                  loading="lazy"
                  className={style.reviewProduct__imgBrand}
                  src={product.imgBrand}
                  alt="Image Brand"
                />
              </div>
            </div>
            <div className={style.reviewProduct__innerSocial}>
              <h3 className={style.reviewProduct__socialText}>Share item:</h3>
              <SocialMedia />
            </div>
          </div>
          <p className={style.reviewProduct__description}>
            {product.description}
          </p>
        </div>
        <div className={style.reviewProduct__boxPurchase}>
          <div className={style.reviewProduct__purchase}>
            <AmountProduct />
            <BtnAddBasket product={product} activeCard={product.id} />
            <BtnAddWishlist product={product} />
          </div>
          <div className={style.reviewProduct__boxCategory}>
            <div className={style.reviewProduct__innerCategory}>
              <h2 className={style.reviewProduct__titleCategory}>Category: </h2>
              <p className={style.reviewProduct__category}>
                {product.category}
              </p>
            </div>
            <div className={style.reviewProduct__wrapTags}>
              <h3 className={style.reviewProduct__innerTag}>Tag:</h3>
              {product.tags.map((tag, i) => {
                if (i <= 4 && tag.length > 1) {
                  return (
                    <p key={i} className={style.reviewProduct__tag}>
                      {tag}
                    </p>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
