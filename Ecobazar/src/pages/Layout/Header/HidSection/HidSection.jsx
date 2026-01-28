import * as style from "./HidSection.module.scss";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeAuthorization } from "@store/reducers/authorizationSlice";

export default function HidSection({ setShowMenu }) {
  const authorization = useSelector(
    (store) => store.authorization.authorization
  );
  const dispatch = useDispatch();

  return (
    <section className={style.hidSection}>
      <NavLink
        onClick={() => setShowMenu(false)}
        to="/"
        className={style.hidSection__link}
      >
        Home
      </NavLink>
      <NavLink
        onClick={() => setShowMenu(false)}
        to="shop"
        className={style.hidSection__link}
      >
        Shop
      </NavLink>
      <NavLink
        onClick={() => setShowMenu(false)}
        to="blog"
        className={style.hidSection__link}
      >
        Blog
      </NavLink>
      <NavLink
        onClick={() => setShowMenu(false)}
        to="about"
        className={style.hidSection__link}
      >
        About Us
      </NavLink>
      <NavLink
        onClick={() => setShowMenu(false)}
        to="contact"
        className={style.hidSection__link}
      >
        Contact Us
      </NavLink>
      <NavLink
        onClick={() => setShowMenu(false)}
        to="shoppingCart"
        className={style.hidSection__link}
      >
        Shopping Cart
      </NavLink>
      <NavLink
        onClick={() => setShowMenu(false)}
        to="account/dashboard"
        className={style.hidSection__link}
      >
        Account
      </NavLink>
      <NavLink
        onClick={() => setShowMenu(false)}
        to="wishlist"
        className={style.hidSection__link}
      >
        Wishlist
      </NavLink>
      {authorization === false ? (
        <NavLink
          onClick={() => setShowMenu(false)}
          to="login"
          className={style.hidSection__link_login}
        >
          Login
        </NavLink>
      ) : (
        <div
          onClick={() => {
            setShowMenu(false);
            dispatch(changeAuthorization(false));
          }}
          className={style.hidSection__link_login}
        >
          Log Out
        </div>
      )}
    </section>
  );
}
