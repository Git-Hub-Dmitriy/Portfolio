import { Helmet } from "react-helmet";
import * as style from "./Shop.module.scss";
import Navigate from "@components/Navigate/Navigate";
import SortProduct from "@components/SortProduct/SortProduct";
import FiltersProduct from "./FiltersProduct/FiltersProduct";
import ListProducts from "./ListProducts/ListProducts";
import Pagination from "@components/Pagination/Pagination";
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { products } from "@data/products";
import {
  shopFiltersContext,
  setShopFiltersContext,
} from "@pages/Layout/Layout";
import changeFilterCategory from "@utils/functionsShop/changeFilterCategory";
import changeFilterRating from "@utils/functionsShop/changeFilterRating";
import changeFilterTag from "@utils/functionsShop/changeFilterTag";
import changeFilterPrice from "@utils/functionsShop/changeFilterPrice";
import { useSelector, useDispatch } from "react-redux";
import {
  changeShopCategory,
  changeShopPage,
  changeShopSort,
  statesShopReset,
  changeShopTag,
  changeShopRating,
  changeShopPrice,
} from "@store/reducers/statesShopSlice";

export default function Shop() {
  const statesShop = useSelector((store) => store.statesShop);
  const dispatch = useDispatch();
  const [productPerPage, setProductPerPage] = useState(15);
  const filtersShop = useContext(shopFiltersContext);
  const setFiltersShop = useContext(setShopFiltersContext);
  const category = filtersShop.get("category") || "";
  const min = filtersShop.get("min") || 0;
  const max = filtersShop.get("max") || 500;
  const rating = filtersShop.get("rating") || "";
  const tag = filtersShop.get("tag") || "";
  const valueMin = 0;
  const valueMax = 500;
  const location = useLocation();

  function handleResetStates() {
    dispatch(statesShopReset({}));
  }

  function handleChangeStateSelected(string) {
    dispatch(changeShopSort({ sorted: string }));
  }

  function handleChangeShopPage(number) {
    dispatch(changeShopPage({ page: number }));
  }

  function handleChangeFilterCategory(value) {
    if (value === category) {
      changeFilterCategory("", rating, tag, min, max, setFiltersShop);
    } else {
      changeFilterCategory(value, rating, tag, min, max, setFiltersShop);
    }
  }

  function handleChangeFilterRating(value) {
    if (value === rating) {
      changeFilterRating("", category, min, max, tag, setFiltersShop);
    } else {
      changeFilterRating(value, category, min, max, tag, setFiltersShop);
    }
  }

  function handleChangeFilterTag(value) {
    if (value === tag) {
      changeFilterTag("", category, rating, min, max, setFiltersShop);
    } else {
      changeFilterTag(value, category, rating, min, max, setFiltersShop);
    }
  }

  function handleChangeFilterPrice(minValue, maxValue) {
    if (minValue === min && maxValue === max) {
      changeFilterPrice(
        valueMin,
        valueMax,
        category,
        rating,
        tag,
        setFiltersShop
      );
    } else {
      changeFilterPrice(
        minValue,
        maxValue,
        category,
        rating,
        tag,
        setFiltersShop
      );
    }
  }

  useEffect(() => {
    if (location.state?.category) {
      setFiltersShop({
        category: location.state?.category,
      });
    }
  }, [location.state?.category]);

  useEffect(() => {
    dispatch(
      changeShopCategory({
        category: category,
      })
    );
  }, [category]);

  useEffect(() => {
    dispatch(
      changeShopRating({
        rating: rating,
      })
    );
  }, [rating]);

  useEffect(() => {
    dispatch(
      changeShopTag({
        tag: tag,
      })
    );
  }, [tag]);

  useEffect(() => {
    dispatch(
      changeShopPrice({
        min: min,
        max: max,
      })
    );
  }, [min, max]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [statesShop.page]);

  useEffect(() => {
    dispatch(changeShopPage({ page: 1 }));
  }, [
    statesShop.category,
    statesShop.rating,
    statesShop.tag,
    statesShop.min,
    statesShop.max,
  ]);

  const filterCategory = products.filter((card) =>
    card.category.toLowerCase().includes(category)
  );
  const filterPrice = filterCategory.filter(
    (card) =>
      parseInt(card.price.slice(1)) >= min &&
      Math.round(card.price.slice(1)) <= max
  );
  const filterRating = filterPrice.filter((card) => {
    let result =
      card.stars.reduce((acum, item) => acum + Number(item), 0) /
      card.stars.length;
    if (result.toFixed(0) === rating) {
      return card;
    } else if (!rating) {
      return card;
    }
  });
  const filterTag = filterRating.filter((card) => {
    if (tag) {
      return card.tags.includes(tag);
    } else {
      return card;
    }
  });
  const sortedFilter = filterTag.sort((one, two) => {
    if (statesShop.sorted.includes("high to low")) {
      return two.price.slice(1) - one.price.slice(1);
    }
    if (statesShop.sorted.includes("low to high")) {
      return one.price.slice(1) - two.price.slice(1);
    }
    if (statesShop.sorted.includes("rating")) {
      let oneItem =
        one.stars.reduce((acum, item) => acum + Number(item), 0) /
        one.stars.length;
      let twoItem =
        two.stars.reduce((acum, item) => acum + Number(item), 0) /
        two.stars.length;
      return twoItem - oneItem;
    }
  });

  const lastPage = statesShop.page * productPerPage;
  const firstPage = lastPage - productPerPage;
  const resultProducts = sortedFilter.slice(firstPage, lastPage);

  return (
    <main className={style.shop}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shop</title>
      </Helmet>
      <Navigate one={"Categories"} two={statesShop.category} />
      <SortProduct
        filter={sortedFilter}
        resetFilters={setFiltersShop}
        array={arraySort}
        resetStates={handleResetStates}
        handleSelected={handleChangeStateSelected}
        sorted={statesShop.sorted}
      />
      <div className={style.shop__gridProducts}>
        <FiltersProduct
          min={valueMin}
          max={valueMax}
          handleRating={handleChangeFilterRating}
          handleCategory={handleChangeFilterCategory}
          handleTag={handleChangeFilterTag}
          handlePrice={handleChangeFilterPrice}
        />
        <ListProducts filter={resultProducts} />
      </div>
      <Pagination
        page={statesShop.page}
        handlePage={handleChangeShopPage}
        productPerPage={productPerPage}
        totalProducts={sortedFilter.length}
      />
    </main>
  );
}
const arraySort = [
  "Latest",
  "Price: low to high",
  "Price: high to low",
  "Rating",
];
