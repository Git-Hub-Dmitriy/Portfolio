import * as style from "./SectionCurrency.module.scss";
import IconArrow from "@assets/iconArrowDown.svg";
import { NavLink } from "react-router-dom";
import IconMarker from "@assets/iconMarkerAddress.svg";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function SectionCurrency({
  languages,
  currencies,
  changeLanguage,
  changeCurrency,
}) {
  const [activeLang, setActiveLang] = useState(false);
  const [activeCurrency, setActiveCurrency] = useState(false);
  const authorization = useSelector(
    (store) => store.authorization.authorization
  );

  return (
    <section className={style.sectionCurrency}>
      <div className={style.sectionCurrency__innerAddress}>
        <IconMarker
          stroke={"#B3B3B3"}
          className={style.sectionCurrency__iconPoint}
        />
        <h2 className={style.sectionCurrency__title}>
          Store Location: Lincoln- 344, Illinois, Chicago, USA
        </h2>
      </div>
      <div
        className={
          authorization === false
            ? style.sectionCurrency__wrapCurrency
            : `${style.sectionCurrency__wrapCurrency} ${style.sectionCurrency__wrapCurrency_auth}`
        }
      >
        <div className={style.sectionCurrency__wrapLanguage}>
          <div
            tabIndex={0}
            onBlur={() => setActiveLang(false)}
            onClick={() => setActiveLang(!activeLang)}
            className={style.sectionCurrency__innerLanguage}
          >
            <h4 className={style.sectionCurrency__selectedLanguage}>
              {languages.selectedLanguage}
            </h4>
            <IconArrow
              stroke={"#1a1a1a"}
              className={
                activeLang !== true
                  ? style.sectionCurrency__iconArrowDown
                  : `${style.sectionCurrency__iconArrowDown} ${style.sectionCurrency__iconArrowDown_active}`
              }
            />
            <ul
              className={
                activeLang !== true
                  ? style.sectionCurrency__listLanguage
                  : `${style.sectionCurrency__listLanguage} ${style.sectionCurrency__listLanguage_active}`
              }
            >
              {languages.languages?.map((item, i) => (
                <li
                  onClick={() => changeLanguage(item)}
                  key={i}
                  className={style.sectionCurrency__item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            tabIndex={1}
            onBlur={() => setActiveCurrency(false)}
            onClick={() => setActiveCurrency(!activeCurrency)}
            className={style.sectionCurrency__innerCurrency}
          >
            <h4 className={style.sectionCurrency__selectedCurrency}>
              {currencies.selectedCurrency}
            </h4>
            <IconArrow
              stroke={"#1a1a1a"}
              className={
                activeCurrency !== true
                  ? style.sectionCurrency__iconArrowDown
                  : `${style.sectionCurrency__iconArrowDown} ${style.sectionCurrency__iconArrowDown_active}`
              }
            />
            <ul
              className={
                activeCurrency !== true
                  ? style.sectionCurrency__listCurrency
                  : `${style.sectionCurrency__listCurrency} ${style.sectionCurrency__listCurrency_active}`
              }
            >
              {currencies.currencies?.map((item, i) => (
                <li
                  onClick={() => changeCurrency(item)}
                  key={i}
                  className={style.sectionCurrency__item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {authorization === false ? (
          <NavLink
            to={"/login"}
            className={style.sectionCurrency__innerLinkLogin}
          >
            Sign in / Sign Up
          </NavLink>
        ) : (
          false
        )}
      </div>
    </section>
  );
}
