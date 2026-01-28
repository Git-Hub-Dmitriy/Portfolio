import * as style from "./NotProducts.module.scss";

export default function NotProducts() {
  return (
    <section className={style.notProducts}>
      <h1 className={style.notProducts__title}>
        you haven't added anything to your cart yet
      </h1>
    </section>
  );
}
