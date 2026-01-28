import * as style from "./Description.module.scss";

export default function Description() {
  return (
    <section className={style.description}>
      <div className={style.description__innerTitle}>
        <h1 className={style.description__title}>
          100% Trusted Organic Food Store
        </h1>
        <h3 className={style.description__text}>
          Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
          laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
          Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a
          eros non massa vulputate ornare. Vivamus ornare commodo ante, at
          commodo felis congue vitae.
        </h3>
      </div>
      <div className={style.description__innerImg}>
        <img
          loading="lazy"
          className={style.description__img}
          src={"/images/about-image-one.webp"}
          alt="abount image"
        />
      </div>
    </section>
  );
}
