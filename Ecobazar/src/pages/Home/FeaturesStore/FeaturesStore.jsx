import * as style from "./FeaturesStore.module.scss";
import IconTruck from "@assets/iconDeliveryTruck.svg";
import IconHeadphones from "@assets/iconHeadphones.svg";
import IconShoppingBag from "@assets/iconShoppingBag.svg";
import IconPackage from "@assets/iconPackage.svg";

export default function FeaturesStore() {
  return (
    <section className={style.features}>
      <div className={style.features__innerBox}>
        <IconTruck className={style.features__iconTruck} />
        <div className={style.features__innerTitle}>
          <h2 className={style.features__title}>Free Shipping</h2>
          <p className={style.features__text}>
            Free shipping on all your order
          </p>
        </div>
      </div>
      <div className={style.features__innerBox}>
        <IconHeadphones className={style.features__iconHeadphones} />
        <div className={style.features__innerTitle}>
          <h2 className={style.features__title}>Customer Support 24/7</h2>
          <p className={style.features__text}>Instant access to Support</p>
        </div>
      </div>
      <div className={style.features__innerBox}>
        <IconShoppingBag className={style.features__iconShoppingBag} />
        <div className={style.features__innerTitle}>
          <h2 className={style.features__title}>100% Secure Payment</h2>
          <p className={style.features__text}>We ensure your money is save</p>
        </div>
      </div>
      <div className={style.features__innerBox}>
        <IconPackage className={style.features__iconPackage} />
        <div className={style.features__innerTitle}>
          <h2 className={style.features__title}>Money-Back Guarantee</h2>
          <p className={style.features__text}>30 Days Money-Back Guarantee</p>
        </div>
      </div>
    </section>
  );
}
