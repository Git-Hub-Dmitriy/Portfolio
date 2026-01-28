import * as style from "./ChoiceCountry.module.scss";
import IconArrowDown from "@assets/iconArrowDown.svg";

export default function ChoiceCountry({
  activeCountries,
  setActiveCountries,
  selectedCountry,
  setSelectedCountry,
  activeCities,
  setActiveCities,
  selectedCity,
  setSelectedCity,
  countries,
  cities,
  changeUser,
  setChangeUser,
  activeBorder,
  setActiveBorder,
}) {
  return (
    <div className={style.choiceCountry__containerGrid}>
      <div className={style.choiceCountry__column}>
        <h4 className={style.choiceCountry__subtitle}>Country / Region</h4>
        <div
          tabIndex={0}
          onBlur={() => setActiveCountries(false)}
          onClick={() => setActiveCountries(!activeCountries)}
          className={style.choiceCountry__innerList}
        >
          <li className={style.choiceCountry__selectedCountry}>
            {selectedCountry}
          </li>
          <ul
            className={
              activeCountries === false
                ? style.choiceCountry__listCountries
                : `${style.choiceCountry__listCountries} ${style.choiceCountry__listCountries_active}`
            }
          >
            {countries.map((post, i) => (
              <li
                onClick={() => setSelectedCountry(post.name)}
                className={style.choiceCountry__country}
                key={i}
              >
                {post.name}
              </li>
            ))}
          </ul>
          <IconArrowDown
            className={
              activeCountries === false
                ? style.choiceCountry__iconArrow
                : `${style.choiceCountry__iconArrow} ${style.choiceCountry__iconArrow_active}`
            }
            stroke={"#999999"}
          />
        </div>
      </div>
      <div className={style.choiceCountry__column}>
        <h4 className={style.choiceCountry__subtitle}>States</h4>
        <div
          tabIndex={1}
          onBlur={() => setActiveCities(false)}
          onClick={() => setActiveCities(!activeCities)}
          className={style.choiceCountry__innerList}
        >
          <li className={style.choiceCountry__selectedCountry}>
            {selectedCity}
          </li>
          <ul
            className={
              activeCities === false
                ? style.choiceCountry__listCountries
                : `${style.choiceCountry__listCountries} ${style.choiceCountry__listCountries_active}`
            }
          >
            {cities.map((city, i) => (
              <li
                onClick={() => setSelectedCity(city.name)}
                className={style.choiceCountry__country}
                key={i}
              >
                {city.name}
              </li>
            ))}
          </ul>
          <IconArrowDown
            className={
              activeCities === false
                ? style.choiceCountry__iconArrow
                : `${style.choiceCountry__iconArrow} ${style.choiceCountry__iconArrow_active}`
            }
            stroke={"#999999"}
          />
        </div>
      </div>
      <div className={style.choiceCountry__column}>
        <h4 className={style.choiceCountry__subtitle}>Zip Code</h4>
        <input
          onFocus={() =>
            setActiveBorder({
              ...activeBorder,
              code: true,
            })
          }
          onBlur={() =>
            setActiveBorder({
              ...activeBorder,
              code: false,
            })
          }
          value={changeUser.code}
          type="text"
          id="changeCode"
          autoComplete="off"
          onChange={(e) =>
            setChangeUser({
              ...changeUser,
              code: e.target.value,
            })
          }
          className={
            activeBorder.code === false
              ? style.choiceCountry__inputCode
              : `${style.choiceCountry__inputCode} ${style.choiceCountry__inputCode_active}`
          }
        />
      </div>
    </div>
  );
}
