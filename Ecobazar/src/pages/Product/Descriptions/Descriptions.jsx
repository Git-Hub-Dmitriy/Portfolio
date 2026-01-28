import * as style from "./Descriptions.module.scss";
import IconMark from "@assets/iconMark.svg";
import { useParams } from "react-router-dom";
import { products } from "@data/products";
import IconDiscount from "@assets/iconDiscount.svg";
import IconLeaf from "@assets/iconLeaf.svg";

export default function Descriptions() {
  const { id } = useParams();
  const card = products.find((item) => item.id == id);
  return (
    <section className={style.descriptions}>
      <div className={style.description__wrapDescribe}>
        <div className={style.description__innerDescribe}>
          <h3 className={style.description__text}>{card.fullDescription}</h3>
        </div>
        <div className={style.description__innerFeatures}>
          {card.features.map((text, i) => {
            return (
              <div key={i} className={style.description__feature}>
                <div className={style.description__circleGreen}>
                  <IconMark
                    stroke={"white"}
                    className={style.description__iconMark}
                  />
                </div>
                <h3 className={style.description__featureText}>{text}</h3>
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.descriptions__wrapVideo}>
        <iframe
          className={style.descriptions__video}
          src="https://www.youtube.com/embed/ScP-j6hELzY?si=WGRMnj3uLoE_6e7F"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        <div className={style.descriptions__wrapFeatures}>
          <div className={style.descriptions__featureShop}>
            <IconDiscount className={style.descriptions__iconDiscount} />
            <div className={style.descriptions__innerDiscountText}>
              <h3 className={style.descriptions__discountTitle}>
                64% Discount
              </h3>
              <h2 className={style.descriptions__discountText}>
                Save your 64% money with us
              </h2>
            </div>
          </div>
          <div className={style.descriptions__featureShop}>
            <IconLeaf className={style.descriptions__iconLeaf} />
            <div className={style.descriptions__innerDiscountText}>
              <h3 className={style.descriptions__discountTitle}>
                100% Organic
              </h3>
              <h2 className={style.descriptions__discountText}>
                100% Organic Vegetables
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
