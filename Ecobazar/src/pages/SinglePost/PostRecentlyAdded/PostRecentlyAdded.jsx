import * as style from "./PostRecentlyAdded.module.scss";
import { blogPosts } from "@data/blogPosts";
import IconCalendar from "@assets/iconCalendar.svg";

export default function PostRecentlyAdded() {
  function receiveMonth(month) {
    const nameMonth = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return nameMonth[month];
  }

  return (
    <section className={style.postRecentlyAdded}>
      <h2 className={style.postRecentlyAdded__title}>Recently Added</h2>
      <div className={style.postRecentlyAdded__wrapPost}>
        {blogPosts.reverse().map((post, i) => {
          if (i < 3) {
            return (
              <div key={i} className={style.postRecentlyAdded__innerPost}>
                <div className={style.postRecentlyAdded__wrapImg}>
                  <img
                    loading="lazy"
                    className={style.postRecentlyAdded__img}
                    src={post.img}
                    alt="image post"
                  />
                </div>
                <div className={style.postRecentlyAdded__descriptionPost}>
                  <h3 className={style.postRecentlyAdded__subtitle}>
                    {post.text}
                  </h3>
                  <div className={style.postRecentlyAdded__innerDate}>
                    <IconCalendar className={style.postRecentlyAdded__icon} />
                    <h3
                      className={style.postRecentlyAdded__date}
                    >{`${receiveMonth(
                      post.date.getMonth()
                    )} ${post.date.getDay()}, ${post.date.getFullYear()}`}</h3>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}
