import * as style from "./PostSearch.module.scss";
import IconSearch from "@assets/iconSearch.svg";

export default function PostSearch() {
  return (
    <form name="search-post" action="" className={style.postSearch}>
      <IconSearch stroke={"#1a1a1a"} className={style.postSearch__icon} />
      <input
        className={style.postSearch__input}
        placeholder="Search..."
        type="search"
      />
    </form>
  );
}
