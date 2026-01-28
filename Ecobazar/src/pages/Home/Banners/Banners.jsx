import * as style from "./Banners.module.scss";
import { listBanners } from "@data/listBanners";
import BtnLinkShop from "@components/Buttons/BtnLinkShop/BtnLinkShop";

export default function Banners() {
  const banners = listBanners.map((item) => (
    <img
      loading="lazy"
      className={style.banners__img}
      src={item.img}
      alt="Banner"
      key={item.id}
    />
  ));
  return (
    <section className={style.banners}>
      <div className={style.banners__bannar}>
        {banners[0]}
        <BtnLinkShop colorArrow={"#00B207"} />
      </div>
      <div className={style.banners__bannarOne}>
        {banners[1]}
        <BtnLinkShop colorArrow={"#00B207"} />
      </div>
      <div className={style.banners__bannarTwo}>{banners[2]}</div>
    </section>
  );
}
