import * as style from "./SectionDeliver.module.scss";
import IconMark from "@assets/iconMark.svg";
import BtnLinkShop from "@components/Buttons/BtnLinkShop/BtnLinkShop";

export default function SectionDeliver() {
  return (
    <section className={style.sectionDeliver}>
      <div className={style.sectionDeliver__wrapContent}>
        <div className={style.sectionDeliver__innerTitle}>
          <h1 className={style.sectionDeliver__title}>
            We Delivered, You Enjoy Your Order.
          </h1>
          <h3 className={style.sectionDeliver__text}>
            Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
            ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim
            diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum
            nunc eget elementum.
          </h3>
        </div>
        <div className={style.sectionDeliver__wrapBtn}>
          <h4 className={style.sectionDeliver__string}>
            <IconMark
              stroke={"#2C742F"}
              className={style.sectionDeliver__iconMark}
            />
            Sed in metus pellentesque.
          </h4>
          <h4 className={style.sectionDeliver__string}>
            <IconMark
              stroke={"#2C742F"}
              className={style.sectionDeliver__iconMark}
            />
            Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.
          </h4>
          <h4 className={style.sectionDeliver__string}>
            <IconMark
              stroke={"#2C742F"}
              className={style.sectionDeliver__iconMark}
            />
            Maecenas ut nunc fringilla erat varius.
          </h4>
          <BtnLinkShop />
        </div>
      </div>
      <div className={style.sectionDeliver__innerImg}>
        <img
          loading="lazy"
          className={style.sectionDeliver__img}
          src="/images/abount-image-three.webp"
          alt="about image"
        />
      </div>
    </section>
  );
}
