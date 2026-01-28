import * as style from "./BlogRecentlyAdded.module.scss";
import { blogPosts } from "@data/blogPosts";
import IconCalendar from "@assets/iconCalendar.svg";

export default function BlogRecentlyAdded() {
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
    <section className={style.recentlyAdded}>
      <h2 className={style.recentlyAdded__title}>Recently Added</h2>
      <div className={style.recentlyAdded__wrapPost}>
        {blogPosts.reverse().map((post, i) => {
          if (i < 3) {
            return (
              <div key={i} className={style.recentlyAdded__innerPost}>
                <div className={style.recentlyAdded__wrapImg}>
                  <img
                    loading="lazy"
                    className={style.recentlyAdded__img}
                    src={post.img}
                    alt="image post"
                  />
                </div>
                <div className={style.recentlyAdded__descriptionPost}>
                  <h3 className={style.recentlyAdded__subtitle}>{post.text}</h3>
                  <div className={style.recentlyAdded__innerDate}>
                    <IconCalendar className={style.recentlyAdded__icon} />
                    <h3 className={style.recentlyAdded__date}>{`${receiveMonth(
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
