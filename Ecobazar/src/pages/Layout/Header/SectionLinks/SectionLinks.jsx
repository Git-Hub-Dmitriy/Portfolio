import * as style from "./SectionLinks.module.scss";
import { NavLink } from "react-router-dom";
import IconPhone from "@assets/iconPhone.svg";
import IconProfile from "@assets/iconProfile.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {
  setBlogFiltersContext,
  setShopFiltersContext,
} from "@pages/Layout/Layout";
import { useDispatch } from "react-redux";
import { resetProduct } from "@store/reducers/amountProductSlice";
import { statesShopReset } from "@store/reducers/statesShopSlice";
import { resetBlogStates } from "@store/reducers/statesBlogSlice";

export default function PagesLinks() {
  const dispatch = useDispatch();
  const resetBlogFilters = useContext(setBlogFiltersContext);
  const resetFiltersShop = useContext(setShopFiltersContext);

  const activeLink = ({ isActive }) =>
    isActive ? style.active : style.notActive;

  return (
    <section className={style.sectionLinks}>
      <div className={style.sectionLinks__wrapper}>
        <ul className={style.sectionLinks__listLinks}>
          <li className={style.sectionLinks__item}>
            <NavLink
              onClick={() => {
                dispatch(resetProduct(1));
                dispatch(statesShopReset({}));
                dispatch(resetBlogStates({}));
              }}
              className={activeLink}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className={style.sectionLinks__item}>
            <NavLink
              onClick={() => {
                dispatch(resetProduct(1));
                resetFiltersShop({});
                dispatch(statesShopReset({}));
                dispatch(resetBlogStates({}));
              }}
              className={activeLink}
              to="shop"
            >
              Shop
            </NavLink>
          </li>
          <li className={style.sectionLinks__item}>
            <NavLink
              onClick={() => {
                dispatch(resetProduct(1));
                dispatch(resetBlogStates({}));
                dispatch(statesShopReset({}));
                resetBlogFilters({});
              }}
              className={activeLink}
              to="blog"
            >
              Blog
            </NavLink>
          </li>
          <li className={style.sectionLinks__item}>
            <NavLink
              onClick={() => {
                dispatch(resetProduct(1));
                dispatch(statesShopReset({}));
                dispatch(resetBlogStates({}));
              }}
              className={activeLink}
              to="about"
            >
              About Us
            </NavLink>
          </li>
          <li className={style.sectionLinks__item}>
            <NavLink
              onClick={() => {
                dispatch(resetProduct(1));
                dispatch(statesShopReset({}));
                dispatch(resetBlogStates({}));
              }}
              className={activeLink}
              to="contact"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className={style.sectionLinks__innerPhone}>
          <Link className={style.sectionBottom__phone} to="tel:2195550114">
            <IconPhone
              stroke={"#ffffff"}
              className={style.sectionLinks__iconPhone}
            />
            (219) 555-0114
          </Link>
          <NavLink
            className={style.sectionLinks__account}
            to="account/dashboard"
          >
            <IconProfile
              stroke={"#ffffff"}
              className={style.sectionLinks__iconUser}
            />
          </NavLink>
        </div>
      </div>
    </section>
  );
}
