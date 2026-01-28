import * as style from "./SectionCoupon.module.scss";

export default function SectionCoupon() {
  return (
    <section className={style.sectionCoupon}>
      <h3 className={style.sectionCoupon__title}>Coupon Code</h3>
      <form id="formCoupon" action="" className={style.sectionCoupon__form}>
        <input
          name="inputCoupon"
          placeholder="Enter code"
          type="text"
          className={style.sectionCoupon__input}
        />
        <button className={style.sectionCoupon__btn}>Apply Coupon</button>
      </form>
    </section>
  );
}
