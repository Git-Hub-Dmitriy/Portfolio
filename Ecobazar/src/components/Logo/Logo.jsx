import * as style from "./Logo.module.scss";
import IconLogo from "@assets/iconLogo.svg";
import { NavLink } from "react-router-dom";

export default function Logo({ colorText }) {
  return (
    <NavLink to={"/"} className={style.logo}>
      <IconLogo className={style.logo__icon} />
      <h1 className={style.logo__title} style={{ color: colorText }}>
        Ecobazar
      </h1>
    </NavLink>
  );
}
