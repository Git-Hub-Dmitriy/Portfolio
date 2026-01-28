import * as style from "./FiltersProduct.module.scss";
import Categories from "./Categories/Categories";
import Price from "./Price/Price";
import Rating from "./Rating/Rating";
import Tags from "./Tags/Tags";
import Sales from "./Sales/Sales";

export default function FiltersProduct({
  min,
  max,
  handleCategory,
  handleRating,
  handleTag,
  handlePrice,
}) {
  return (
    <nav className={style.filterProducts}>
      <Categories handleCategory={handleCategory} />
      <Price min={min} max={max} handlePrice={handlePrice} />
      <Rating handleRating={handleRating} />
      <Tags handleTag={handleTag} />
      <Sales />
    </nav>
  );
}
