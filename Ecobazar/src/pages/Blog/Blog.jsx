import { Helmet } from "react-helmet";
import * as style from "./Blog.module.scss";
import Navigate from "@components/Navigate/Navigate";
import SortPosts from "@components/SortProduct/SortProduct";
import BlogCategories from "./BlogCategories/BlogCategories";
import BlogSearch from "./BlogSearch/BlogSearch";
import BlogTags from "./BlogTags/BlogTags";
import BlogGallery from "./BlogGallery/BlogGallery";
import BlogRecentlyAdded from "./BlogRecentlyAdded/BlogRecentlyAdded";
import Pagination from "@components/Pagination/Pagination";
import { useState, useEffect, useContext } from "react";
import { blogPosts } from "@data/blogPosts";
import Post from "@components/Post/Post";
import {
  blogFiltersContext,
  setBlogFiltersContext,
} from "@pages/Layout/Layout";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  changeBlogCategory,
  changeBlogTag,
  changeBlogSelected,
  changeBlogPage,
  resetBlogStates,
} from "@store/reducers/statesBlogSlice";
import changeFilterCategory from "@utils/functionsBlog/changeFilterCategory";
import changeFilterTag from "@utils/functionsBlog/changeFilterTag";

export default function Blog() {
  const [hoverPost, setHoverPost] = useState(null);
  const [postPerPage, setPostPerPage] = useState(10);
  const blogFilters = useContext(blogFiltersContext);
  const setBlogFilters = useContext(setBlogFiltersContext);
  const dispatch = useDispatch();
  const statesBlog = useSelector((store) => store.statesBlog);
  const category = blogFilters.get("category") || "";
  const tag = blogFilters.get("tag") || "";
  const location = useLocation();

  function handleChangeFilterCategory(value) {
    if (value.toLowerCase() === category) {
      changeFilterCategory("", tag, setBlogFilters);
    } else {
      changeFilterCategory(value, tag, setBlogFilters);
    }
  }

  function handleChangeFilterTag(value) {
    if (value.toLowerCase() === tag) {
      changeFilterTag("", category, setBlogFilters);
    } else {
      changeFilterTag(value, category, setBlogFilters);
    }
  }

  function handleResetStates() {
    dispatch(resetBlogStates({}));
  }

  function handleChangeSorted(string) {
    dispatch(changeBlogSelected({ selected: string }));
  }

  function handleChangeBlogPage(number) {
    dispatch(changeBlogPage({ page: number }));
  }

  useEffect(() => {
    if (!location.state?.category) {
      return;
    } else {
      setBlogFilters({
        category: location.state.category,
      });
    }
  }, [location.state?.category]);

  useEffect(() => {
    if (!location.state?.tag) {
      return;
    } else {
      setBlogFilters({
        tag: location.state.tag,
      });
    }
  }, [location.state?.tag]);

  useEffect(() => {
    dispatch(
      changeBlogCategory({
        category: category,
      })
    );
  }, [category]);

  useEffect(() => {
    dispatch(
      changeBlogTag({
        tag: tag,
      })
    );
  }, [tag]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [statesBlog.page]);

  useEffect(() => {
    dispatch(changeBlogPage({ page: 1 }));
  }, [statesBlog.category, statesBlog.tag]);

  const filterCategory = blogPosts.filter((post) =>
    post.category.toLowerCase().includes(category)
  );
  const filterTag = filterCategory.filter((post) => {
    const tagUpper = `${tag.slice(0, 1).toUpperCase()}${tag.slice(1)}`;
    if (!tagUpper) {
      return post;
    } else {
      return post.tags.includes(tagUpper);
    }
  });
  const sortedArray = filterTag.sort((a, b) => {
    if (statesBlog.selected.includes("olds")) {
      return b.date - a.date;
    }
    if (statesBlog.selected.includes("news")) {
      return a.date - b.date;
    }
  });
  const lastPage = statesBlog.page * postPerPage;
  const firstPage = lastPage - postPerPage;
  const resultPosts = sortedArray.slice(firstPage, lastPage);

  return (
    <main className={style.blog}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog</title>
      </Helmet>
      <Navigate one={"Blog"} />
      <SortPosts
        filter={sortedArray}
        resetFilters={setBlogFilters}
        array={arraySort}
        resetStates={handleResetStates}
        handleSelected={handleChangeSorted}
        sorted={statesBlog.selected}
      />
      <div className={style.blog__gridContainer}>
        <nav className={style.blog__wrapFilter}>
          <BlogSearch />
          <BlogCategories
            array={resultPosts}
            category={statesBlog}
            handleCategory={handleChangeFilterCategory}
          />
          <BlogTags tagState={statesBlog} handleTag={handleChangeFilterTag} />
          <BlogGallery />
          <BlogRecentlyAdded />
        </nav>
        <section className={style.blog__wrapPosts}>
          <div className={style.blog__innerPosts}>
            {resultPosts.map((post) => (
              <Post
                key={post.id}
                active={hoverPost}
                setActive={setHoverPost}
                bannar={post}
              />
            ))}
          </div>
          <Pagination
            page={statesBlog.page}
            productPerPage={postPerPage}
            totalProducts={sortedArray.length}
            handlePage={handleChangeBlogPage}
          />
        </section>
      </div>
    </main>
  );
}

const arraySort = ["Date: olds", "Date: news"];
