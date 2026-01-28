import * as style from "./Loading.module.scss";

export default function Loading() {
  return (
    <section className={style.loading}>
      <h2 className={style.loading__title}>Please wait, loadding...</h2>
    </section>
  );
}
