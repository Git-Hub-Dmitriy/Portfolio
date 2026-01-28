import * as style from "./Search.module.scss";
import IconSearch from "@assets/iconSearch.svg";
import { products } from "@data/products";
import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Search() {
  const ref = useRef();
  const location = useLocation();
  const [searchValue, setSearchValue] = useState("");
  const resultSearch = products?.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    setSearchValue("");
    ref.current.addEventListener("mousedown", function (e) {
      e.preventDefault();
    });
  }, []);

  useEffect(() => {
    setSearchValue("");
  }, [location]);

  return (
    <div className={style.search}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          return;
        }}
        id="globalSearch"
        name="search"
        className={style.search__form}
      >
        <div className={style.search__innerIcon}>
          <IconSearch stroke="#1a1a1a" className={style.search__icon} />
        </div>
        <input
          onBlur={() => setSearchValue("")}
          id="formSearch"
          autoSave="no"
          autoComplete="no"
          placeholder="Search"
          className={style.search__input}
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
      </form>
      <button formAction="globalSearch" className={style.search__button}>
        Search
      </button>
      <ul
        ref={ref}
        tabIndex={1}
        onBlur={() => setSearchValue("")}
        className={
          searchValue === ""
            ? style.search__listProducts
            : resultSearch.length === 0
            ? `${style.search__listProducts} ${style.search__listProducts_small}`
            : `${style.search__listProducts} ${style.search__listProducts_visible}`
        }
      >
        {searchValue === "" ? (
          false
        ) : resultSearch.length === 0 ? (
          <h3 className={style.search__notProducts}>
            Similar products not found
          </h3>
        ) : (
          resultSearch?.map((item) => (
            <NavLink
              to={`/shop/${item.id}/description`}
              key={item.id}
              className={style.search__productLink}
            >
              <div className={style.search__innerProductImage}>
                <img
                  loading="lazy"
                  className={style.search__productImg}
                  src={item.pictures[0]}
                  alt="image product"
                />
              </div>
              <h2 className={style.search__productName}>{item.name}</h2>
              <h2 className={style.search__productPrice}>{item.price}</h2>
            </NavLink>
          ))
        )}
      </ul>
    </div>
  );
}
