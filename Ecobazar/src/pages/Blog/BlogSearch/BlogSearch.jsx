import * as style from "./BlogSearch.module.scss";
import IconSearch from "@assets/iconSearch.svg";

export default function BlogSearch() {
  return (
    <form name="search-post" action="" className={style.blogSearch}>
      <IconSearch stroke={"#1a1a1a"} className={style.blogSearch__icon} />
      <input
        className={style.blogSearch__input}
        placeholder="Search..."
        type="text"
      />
    </form>
  );
}
