import * as style from "./SinglePost.module.scss";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import PostCategories from "./PostCategories/PostCategories";
import PostGallery from "./PostGallery/PostGallery";
import PostRecentlyAdded from "./PostRecentlyAdded/PostRecentlyAdded";
import PostSearch from "./PostSearch/PostSearch";
import PostTags from "./PostTags/PostTags";
import Navigate from "@components/Navigate/Navigate";
import PostInfo from "./PostInfo/PostInfo";
import { blogPosts } from "@data/blogPosts";
import { advertising } from "@data/advertising";
import { useEffect } from "react";

export default function SinglePost() {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id == id);
  const banner = advertising.find((banner) => banner.name === "singleBlog");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function getMonthString(month) {
    const arrayMonth = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "Septemnber",
      "October",
      "November",
      "December",
    ];
    return arrayMonth[month];
  }

  return (
    <main className={style.singlePost}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Post</title>
      </Helmet>
      <Navigate one={"Blog"} two={"Single Post"} />
      <div className={style.singlePost__container}>
        <PostInfo post={post} banner={banner} getMonthString={getMonthString} />
        <nav className={style.singlePost__nav}>
          <PostSearch />
          <PostCategories />
          <PostTags />
          <PostGallery />
          <PostRecentlyAdded />
        </nav>
      </div>
    </main>
  );
}

export const arrayTags = [
  "Healthy",
  "Low fat",
  "Vegetarian",
  "Bread",
  "Kid foods",
  "Vitamins",
  "Snacks",
  "Tiffin",
  "Meat",
  "Lunch",
  "Dinner",
];
