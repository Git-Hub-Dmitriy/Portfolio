import * as style from "./LatestNews.module.scss";
import { blogPosts } from "@data/blogPosts";
import Post from "@components/Post/Post";
import { useState } from "react";

export default function LatestNews() {
  const [active, setActive] = useState(null);

  return (
    <section className={style.latestNews}>
      <h1 className={style.latestNews__title}>Latest News</h1>
      <div className={style.latestNews__wrapBannar}>
        {blogPosts.map((bannar) => {
          if (bannar.id < 3) {
            return (
              <Post
                path={"blog/"}
                key={bannar.id}
                bannar={bannar}
                active={active}
                setActive={setActive}
              />
            );
          }
        })}
      </div>
    </section>
  );
}
