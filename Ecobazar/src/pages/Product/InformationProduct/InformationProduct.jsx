import * as style from "./InformationProduct.module.scss";
import { useParams } from "react-router-dom";
import { products } from "@data/products";
import IconLeaf from "@assets/iconLeaf.svg";
import IconDiscount from "@assets/iconDiscount.svg";

export default function InformationProduct() {
  const { id } = useParams();
  const card = products.find((item) => item.id == id);
  return (
    <section className={style.informationProduct}>
      <div className={style.informationProduct__wrapDescription}>
        <div className={style.informationProduct__innerTitle}>
          <h3 className={style.informationProduct__title}>Weight:</h3>
          <h3 className={style.informationProduct__title}>Color:</h3>
          <h3 className={style.informationProduct__title}>Type:</h3>
          <h3 className={style.informationProduct__title}>Category:</h3>
          <h3 className={style.informationProduct__title}>Stock Status:</h3>
          <h3 className={style.informationProduct__title}>Tags:</h3>
        </div>
        <div className={style.informationProduct__innerCharacteristic}>
          <h3 className={style.informationProduct__characteristic}>
            {card.weight}
          </h3>
          <h3 className={style.informationProduct__characteristic}>
            {card.color}
          </h3>
          <h3 className={style.informationProduct__characteristic}>
            {card.type}
          </h3>
          <h3 className={style.informationProduct__characteristic}>
            {card.category}
          </h3>
          <h3 className={style.informationProduct__characteristic}>
            {card.inStock === true ? "Available" : ""}
          </h3>
          <div className={style.informationProduct__innerTags}>
            {card.tags.map((tag) => (
              <h3 className={style.informationProduct__tag}>{`${tag},`}</h3>
            ))}
          </div>
        </div>
      </div>
      <div className={style.informationProduct__wrapVideo}>
        <iframe
          className={style.informationProduct__video}
          src="https://www.youtube.com/embed/ScP-j6hELzY?si=WGRMnj3uLoE_6e7F"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
        <div className={style.informationProduct__wrapFeatures}>
          <div className={style.informationProduct__featureShop}>
            <IconDiscount className={style.informationProduct__iconDiscount} />
            <div className={style.informationProduct__innerDiscountText}>
              <h3 className={style.informationProduct__discountTitle}>
                64% Discount
              </h3>
              <h2 className={style.informationProduct__discountText}>
                Save your 64% money with us
              </h2>
            </div>
          </div>
          <div className={style.informationProduct__featureShop}>
            <IconLeaf className={style.informationProduct__iconLeaf} />
            <div className={style.informationProduct__innerDiscountText}>
              <h3 className={style.informationProduct__discountTitle}>
                100% Organic
              </h3>
              <h2 className={style.informationProduct__discountText}>
                100% Organic Vegetables
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
