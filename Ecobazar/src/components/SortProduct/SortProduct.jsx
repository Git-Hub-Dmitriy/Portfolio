import * as style from "./SortProduct.module.scss";
import IconFilter from "@assets/iconFilter.svg";
import IconArrowDown from "@assets/iconArrowDown.svg";
import { useState } from "react";

export default function SortProduct({
  filter,
  resetFilters,
  array,
  resetStates,
  handleSelected,
  sorted,
}) {
  const [activeList, setActiveList] = useState(false);
  const listChoice = array.map((string) => {
    return `${string.slice(0, 1).toUpperCase()}${string
      .slice(1)
      .toLowerCase()}`;
  });

  function handleClick() {
    if (!activeList) {
      setActiveList(true);
    } else {
      setActiveList(false);
    }
  }
  return (
    <section className={style.sortProduct}>
      <button
        onClick={() => {
          resetFilters({});
          resetStates();
        }}
        className={style.sortProduct__buttonFilter}
      >
        <span className={style.sortProduct__buttonFilterText}>Filter</span>
        <IconFilter className={style.sortProduct__buttonFilterIcon} />
      </button>
      <div className={style.sortProduct__wrapSorted}>
        <div className={style.sortProduct__innerSort}>
          <h3 className={style.sortProduct__title}>Sort by:</h3>
          <div
            tabIndex={0}
            onBlur={() => setActiveList(false)}
            onClick={() => handleClick()}
            className={style.sortProduct__innerList}
          >
            <ul className={style.sortProduct__listSort}>
              <li className={style.sortProduct__point_selected}>{`${sorted
                .slice(0, 1)
                .toUpperCase()}${sorted.slice(1).toLowerCase()}`}</li>
              {listChoice.map((string, i) => (
                <li
                  key={i}
                  onClick={(e) => handleSelected(e.target.innerHTML)}
                  className={
                    !activeList
                      ? style.sortProduct__point
                      : `${style.sortProduct__point} ${style.sortProduct__point_active}`
                  }
                >
                  {string}
                </li>
              ))}
            </ul>
            <IconArrowDown
              className={
                activeList === false
                  ? style.sortProduct__iconArrow
                  : `${style.sortProduct__iconArrow} ${style.sortProduct__iconArrow_rotate}`
              }
              stroke={"#4d4d4d"}
            />
          </div>
        </div>
        <div className={style.sortProduct__resultFound}>
          <b>{`${filter.length} `}</b>
          <span>results found</span>
        </div>
      </div>
    </section>
  );
}
