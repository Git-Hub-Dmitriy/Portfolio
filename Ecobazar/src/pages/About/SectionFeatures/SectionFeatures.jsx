import * as style from "./SectionFeatures.module.scss";
import IconLargeStar from "@assets/iconLargeStar.svg";
import IconLeaf from "@assets/iconLeaf-2.svg";
import IconTruck from "@assets/iconDeliveryTruck.svg";
import IconHeadphone from "@assets/iconHeadphones.svg";
import IconPack from "@assets/iconShoppingBag.svg";
import IconBox from "@assets/iconPackage.svg";

export default function SectionFeatures() {
  return (
    <section className={style.sectionFeatures}>
      <div className={style.sectionFeatures__innerImg}>
        <img
          loading="lazy"
          src="/images/abount-image-two.webp"
          alt="abount image"
        />
      </div>
      <div className={style.sectionFeatures__wrapContent}>
        <div className={style.sectionFeatures__innerTitle}>
          <h1 className={style.sectionFeatures__title}>
            100% Trusted Organic Food Store
          </h1>
          <h3 className={style.sectionFeatures__text}>
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
            mi. Nulla eu eros consequat tortor tincidunt feugiat.
          </h3>
        </div>
        <div className={style.sectionFeatures__wrapDescription}>
          <div className={style.sectionFeatures__section}>
            <IconLeaf className={style.sectionFeatures__icon} />
            <div className={style.sectionFeatures__gridRow}>
              <h3 className={style.sectionFeatures__subtitle}>
                100% Organic food
              </h3>
              <h4 className={style.sectionFeatures__subtext}>
                100% healthy & Fresh food.
              </h4>
            </div>
          </div>
          <div className={style.sectionFeatures__section}>
            <IconHeadphone className={style.sectionFeatures__icon} />
            <div className={style.sectionFeatures__gridRow}>
              <h3 className={style.sectionFeatures__subtitle}>
                Great Support 24/7
              </h3>
              <h4 className={style.sectionFeatures__subtext}>
                Instant access to Contact
              </h4>
            </div>
          </div>
          <div className={style.sectionFeatures__section}>
            <IconLargeStar className={style.sectionFeatures__icon} />
            <div className={style.sectionFeatures__gridRow}>
              <h3 className={style.sectionFeatures__subtitle}>
                Customer Feedback
              </h3>
              <h4 className={style.sectionFeatures__subtext}>
                Our happy customer
              </h4>
            </div>
          </div>
          <div className={style.sectionFeatures__section}>
            <IconPack className={style.sectionFeatures__icon} />
            <div className={style.sectionFeatures__gridRow}>
              <h3 className={style.sectionFeatures__subtitle}>
                100% Sucure Payment
              </h3>
              <h4 className={style.sectionFeatures__subtext}>
                We ensure your money is save
              </h4>
            </div>
          </div>
          <div className={style.sectionFeatures__section}>
            <IconTruck className={style.sectionFeatures__icon} />
            <div className={style.sectionFeatures__gridRow}>
              <h3 className={style.sectionFeatures__subtitle}>Free Shipping</h3>
              <h4 className={style.sectionFeatures__subtext}>
                Free shipping with discount
              </h4>
            </div>
          </div>
          <div className={style.sectionFeatures__section}>
            <IconBox className={style.sectionFeatures__icon} />
            <div className={style.sectionFeatures__gridRow}>
              <h3 className={style.sectionFeatures__subtitle}>
                100% Organic Food
              </h3>
              <h4 className={style.sectionFeatures__subtext}>
                100% healthy & Fresh food.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
