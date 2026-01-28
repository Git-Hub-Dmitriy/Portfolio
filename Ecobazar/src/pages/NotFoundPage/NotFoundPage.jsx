import * as style from "./NotFountPage.scss";
import { Helmet } from "react-helmet";
import Navigate from "@components/Navigate/Navigate";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function NotFoundPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={style.notFoundPage}>
      <Navigate one={"404 Error Page"} />
      <Helmet>
        <meta charSet="utf-8" />
        <title>NotFoundPage</title>
      </Helmet>
      <div className={style.notFoundPage__main}>
        <div className={style.notFoundPage__wrapImg}>
          <img
            loading="lazy"
            className={style.notFoundPage__image}
            src="/images/notFoundPage.webp"
            alt="Not Found Page"
          />
        </div>
        <div className={style.notFoundPage__wrapTitle}>
          <h2 className={style.notFoundPage__title}>Oops! page not found</h2>
          <h4 className={style.notFoundPage__text}>
            Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros.
            Maecenas sagittis tortor at metus mollis
          </h4>
        </div>
        <Link to={"/"} className={style.notFoundPage__btn}>
          Back to Home
        </Link>
      </div>
    </main>
  );
}
