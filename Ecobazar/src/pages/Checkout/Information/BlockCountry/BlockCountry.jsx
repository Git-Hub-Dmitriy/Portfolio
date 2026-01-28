import * as style from "./BlockCountry.module.scss";
import IconArrowDown from "@assets/iconArrowDown.svg";
import { useState } from "react";

export default function BlockCountry({
  data,
  statesCheckout,
  setStatesCheckout,
}) {
  const [visibleLists, setVisibleLists] = useState({
    visibleCountries: false,
    visibleCities: false,
    empty: false,
  });

  return (
    <div className={style.blockCountry}>
      <div className={style.blockCountry__wrapList}>
        <h3 className={style.blockCountry__title}>Country / Region</h3>
        <div
          onBlur={() =>
            setVisibleLists({ ...visibleLists, visibleCountries: false })
          }
          onClick={() =>
            setVisibleLists({
              ...visibleLists,
              visibleCountries: !visibleLists.visibleCountries,
            })
          }
          tabIndex={0}
          className={style.blockCountry__innerList}
        >
          <li className={style.blockCountry__selected}>
            {statesCheckout.selectedCountry}
          </li>
          <IconArrowDown
            style={{
              transform: `${
                visibleLists.visibleCountries === true
                  ? "rotate(180deg)"
                  : "rotate(0deg)"
              }`,
            }}
            className={style.blockCountry__iconArrow}
          />
          <ul
            className={
              visibleLists.visibleCountries !== true
                ? style.blockCountry__list
                : `${style.blockCountry__list} ${style.blockCountry__list_visible}`
            }
          >
            {data?.countries.map((country, i) => (
              <li
                onClick={() =>
                  setStatesCheckout({
                    ...statesCheckout,
                    selectedCountry: country.name,
                  })
                }
                className={style.blockCountry__item}
                key={i}
              >
                {country.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={style.blockCountry__wrapList}>
        <h3 className={style.blockCountry__title}>States</h3>
        <div
          onBlur={() =>
            setVisibleLists({ ...visibleLists, visibleCities: false })
          }
          onClick={() => {
            setVisibleLists({
              ...visibleLists,
              visibleCities: !visibleLists.visibleCities,
            });
            if (data.length === 0) {
              setVisibleLists({
                ...visibleLists,
                empty: true,
              });
            }
          }}
          tabIndex={1}
          className={style.blockCountry__innerList}
        >
          <li className={style.blockCountry__selected}>
            {statesCheckout.selectedCity}
          </li>
          <IconArrowDown
            style={{
              transform: `${
                visibleLists.visibleCities === true
                  ? "rotate(180deg)"
                  : "rotate(0deg)"
              }`,
            }}
            className={style.blockCountry__iconArrow}
          />
          <ul
            className={
              visibleLists.visibleCities !== true
                ? style.blockCountry__list
                : `${style.blockCountry__list} ${style.blockCountry__list_visible}`
            }
          >
            {data?.cities.map((city, i) => {
              return (
                <li
                  onClick={() =>
                    setStatesCheckout({
                      ...statesCheckout,
                      selectedCity: city.name,
                    })
                  }
                  className={style.blockCountry__item}
                  key={i}
                >
                  {city.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={style.blockCountry__innerInput}>
        <h3 className={style.blockCountry__title}>ZipCode</h3>
        <input
          onChange={(e) =>
            setStatesCheckout({
              ...statesCheckout,
              zipCode: e.target.value,
            })
          }
          placeholder="Zip Code"
          className={style.blockCountry__input}
          name="checkoutZipCode"
          type="text"
          value={statesCheckout.zipCode}
        />
      </div>
    </div>
  );
}
