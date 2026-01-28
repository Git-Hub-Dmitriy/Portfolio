import { NavLink, useNavigate } from "react-router-dom";
import * as style from "./Nav.module.scss";
import IconDashboard from "@assets/iconDashboard.svg";
import IconOrderHistory from "@assets/iconOrderHistory.svg";
import IconWishlist from "@assets/iconHeart.svg";
import IconShoppingCart from "@assets/iconBasket.svg";
import IconSettings from "@assets/iconSettings.svg";
import IconLogout from "@assets/iconLogout.svg";
import { changeAuthorization } from "@store/reducers/authorizationSlice";
import { useDispatch } from "react-redux";

export default function Nav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const activeLink = ({ isActive }) =>
    isActive ? style.activeLink : style.notActiveLink;

  return (
    <nav className={style.nav}>
      <h2 className={style.nav__title}>Navigation</h2>
      <div className={style.nav__wrapLink}>
        <NavLink to={"dashboard"} className={activeLink}>
          <IconDashboard className={style.nav__icon_fill} />
          Dashboard
        </NavLink>
        <NavLink to={"orderHistory"} className={activeLink}>
          <IconOrderHistory className={style.nav__icon_fill} />
          Order History
        </NavLink>
        <NavLink to={"accountWishlist"} className={activeLink}>
          <IconWishlist className={style.nav__icon_stroke} />
          Wishlist
        </NavLink>
        <NavLink to={"shopping"} className={activeLink}>
          <IconShoppingCart className={style.nav__icon_stroke} />
          Shopping Cart
        </NavLink>
        <NavLink to={"settings"} className={activeLink}>
          <IconSettings className={style.nav__icon_fill} />
          Settings
        </NavLink>
        <div
          onClick={() => {
            dispatch(changeAuthorization(false));
            navigate("/", { replace: true });
          }}
          className={style.nav__logOut}
        >
          <IconLogout className={style.nav__icon_fill} fill={"#b3afaf"} />
          Log-out
        </div>
      </div>
    </nav>
  );
}
