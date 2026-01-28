import * as style from "./BtnLinkShop.module.scss";
import IconArrowRight from "@assets/iconArrowRight.svg";
import { Link } from "react-router-dom";

export default function BtnLinkShop({ colorArrow }) {
  return (
    <Link to={"/shop"}>
      <button className={style.btnShop}>
        Shop Now
        <IconArrowRight stroke={colorArrow} className={style.btnShop__arrow} />
      </button>
    </Link>
  );
}
