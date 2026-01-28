import * as style from "./SectionBurger.module.scss";
import Logo from "@components/Logo/Logo";

export default function SectionBurger({
  languages,
  currencies,
  showLanguage,
  setShowLanguage,
  showCurrency,
  setShowCurrency,
  setShowMenu,
  showMenu,
  changeLanguage,
  changeCurrency,
}) {
  return (
    <div className={style.sectionBurger}>
      <div
        onClick={() => setShowMenu(!showMenu)}
        className={style.sectionBurger__burger}
      >
        <div className={style.sectionBurger__line}></div>
        <div className={style.sectionBurger__line}></div>
        <div className={style.sectionBurger__line}></div>
      </div>
      <Logo colorText={"#ffffff"} />
      <div className={style.sectionBurger__wrapLanguage}>
        <div
          tabIndex={0}
          onBlur={() => setShowLanguage(false)}
          onClick={() => setShowLanguage(!showLanguage)}
          className={style.sectionBurger__innerLanguage}
        >
          <li className={style.sectionBurger__selectedLang}>
            {languages.selectedLanguage}
          </li>
          <ul
            className={
              showLanguage !== true
                ? style.sectionBurger__listLang
                : `${style.sectionBurger__listLang} ${style.sectionBurger__listLang_active}`
            }
          >
            {languages.languages?.map((lang, i) => (
              <li
                onClick={() => changeLanguage(lang)}
                key={i}
                className={style.sectionBurger__langItem}
              >
                {lang}
              </li>
            ))}
          </ul>
        </div>
        <div
          tabIndex={1}
          onClick={() => setShowCurrency(!showCurrency)}
          onBlur={() => setShowCurrency(false)}
          className={style.sectionBurger__innerCurrency}
        >
          <li className={style.sectionBurger__selectedCurrency}>
            {currencies.selectedCurrency}
          </li>
          <ul
            className={
              showCurrency !== true
                ? style.sectionBurger__listCurrency
                : `${style.sectionBurger__listCurrency} ${style.sectionBurger__listCurrency_active}`
            }
          >
            {currencies.currencies?.map((curr, i) => (
              <li
                onClick={() => changeCurrency(curr)}
                key={i}
                className={style.sectionBurger__currencyItem}
              >
                {curr}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
