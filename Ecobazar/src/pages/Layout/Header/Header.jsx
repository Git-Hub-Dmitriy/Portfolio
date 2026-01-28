import * as style from "./Header.module.scss";
import SectionSearch from "./SectionSearch/SectionSearch";
import SectionCurrency from "./SectionCurrency/SectionCurrency";
import SectionLinks from "./SectionLinks/SectionLinks";
import SectionBurger from "./SectionBurger/SectionBurger";
import HidSection from "./HidSection/HidSection";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "@store/reducers/languagesSlice";
import { changeCurrency } from "@store/reducers/currenciesSlice";

export default function Header({ showMenu, setShowMenu }) {
  const [showLanguage, setShowLanguage] = useState(false);
  const [showCurrency, setShowCurrency] = useState(false);
  const dispatch = useDispatch();
  const language = useSelector((store) => store.language);
  const currency = useSelector((store) => store.currency);

  function handleChangeLanguage(language) {
    dispatch(changeLanguage({ selectedLanguage: language }));
  }

  function handleChangeCurrency(currency) {
    dispatch(changeCurrency({ selectedCurrency: currency }));
  }

  return (
    <header className={style.header}>
      <SectionBurger
        changeLanguage={handleChangeLanguage}
        changeCurrency={handleChangeCurrency}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        languages={language}
        currencies={currency}
        showLanguage={showLanguage}
        setShowLanguage={setShowLanguage}
        showCurrency={showCurrency}
        setShowCurrency={setShowCurrency}
      />
      <div
        className={
          showMenu !== true
            ? style.header__modal
            : `${style.header__modal} ${style.header__modal_active}`
        }
      >
        <div
          className={
            showMenu !== true
              ? style.header__modalContent
              : `${style.header__modalContent} ${style.header__modalContent_active}`
          }
        >
          <HidSection setShowMenu={setShowMenu} />
        </div>
      </div>
      <SectionCurrency
        changeLanguage={handleChangeLanguage}
        changeCurrency={handleChangeCurrency}
        languages={language}
        currencies={currency}
      />
      <SectionSearch />
      <SectionLinks />
    </header>
  );
}
