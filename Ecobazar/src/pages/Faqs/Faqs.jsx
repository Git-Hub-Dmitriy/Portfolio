import { Helmet } from "react-helmet";
import * as style from "./Faqs.module.scss";
import Navigate from "@components/Navigate/Navigate";
import { useState, useEffect } from "react";
import IconPlus from "@assets/iconPlus.svg";

export default function Faqs() {
  const [showText, setShowText] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={style.faqs}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Faqs</title>
      </Helmet>
      <Navigate one={"Faqs"} />
      <div className={style.faqs__wrapContent}>
        <div className={style.faqs__innerContent}>
          <h1 className={style.faqs__title}>
            Welcome, Let's Talk About Our Ecobazar
          </h1>
          <div className={style.faqs__innerDescriptions}>
            <div
              className={
                showText !== 0
                  ? style.faqs__article
                  : `${style.faqs__article} ${style.faqs__article_active}`
              }
            >
              <div
                onClick={() => {
                  if (showText !== 0) {
                    setShowText(0);
                  }
                  if (showText === 0) {
                    setShowText(null);
                  }
                }}
                className={style.faqs__innerSubtitle}
              >
                <h3 className={style.faqs__subtitle}>
                  In elementum est a ante sodales iaculis.
                </h3>
                <IconPlus className={style.faqs__plus} />
              </div>
              <p className={style.faqs__text}>
                Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
                laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies
                elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at
                accumsan. Donec a eros non massa vulputate ornare. Vivamus
                ornare commodo ante, at commodo felis congue vitae.
              </p>
            </div>
            <div
              className={
                showText !== 1
                  ? style.faqs__article
                  : `${style.faqs__article} ${style.faqs__article_active}`
              }
            >
              <div
                onClick={() => {
                  if (showText !== 1) {
                    setShowText(1);
                  }
                  if (showText === 1) {
                    setShowText(null);
                  }
                }}
                className={style.faqs__innerSubtitle}
              >
                <h3 className={style.faqs__subtitle}>
                  Etiam lobortis massa eu nibh tempor elementum.
                </h3>
                <IconPlus className={style.faqs__plus} />
              </div>
              <p className={style.faqs__text}>
                Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
                laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies
                elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at
                accumsan. Donec a eros non massa vulputate ornare. Vivamus
                ornare commodo ante, at commodo felis congue vitae.
              </p>
            </div>
            <div
              className={
                showText !== 2
                  ? style.faqs__article
                  : `${style.faqs__article} ${style.faqs__article_active}`
              }
            >
              <div
                onClick={() => {
                  if (showText !== 2) {
                    setShowText(2);
                  }
                  if (showText === 2) {
                    setShowText(null);
                  }
                }}
                className={style.faqs__innerSubtitle}
              >
                <h3 className={style.faqs__subtitle}>
                  In elementum est a ante sodales iaculis.
                </h3>
                <IconPlus className={style.faqs__plus} />
              </div>
              <p className={style.faqs__text}>
                Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
                laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies
                elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at
                accumsan. Donec a eros non massa vulputate ornare. Vivamus
                ornare commodo ante, at commodo felis congue vitae.
              </p>
            </div>
            <div
              className={
                showText !== 3
                  ? style.faqs__article
                  : `${style.faqs__article} ${style.faqs__article_active}`
              }
            >
              <div
                onClick={() => {
                  if (showText !== 3) {
                    setShowText(3);
                  }
                  if (showText === 3) {
                    setShowText(null);
                  }
                }}
                className={style.faqs__innerSubtitle}
              >
                <h3 className={style.faqs__subtitle}>
                  Aenean quis quam nec lacus semper dignissim.
                </h3>
                <IconPlus className={style.faqs__plus} />
              </div>
              <p className={style.faqs__text}>
                Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
                laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies
                elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at
                accumsan. Donec a eros non massa vulputate ornare. Vivamus
                ornare commodo ante, at commodo felis congue vitae.
              </p>
            </div>
            <div
              className={
                showText !== 4
                  ? style.faqs__article
                  : `${style.faqs__article} ${style.faqs__article_active}`
              }
            >
              <div
                onClick={() => {
                  if (showText !== 4) {
                    setShowText(4);
                  }
                  if (showText === 4) {
                    setShowText(null);
                  }
                }}
                className={style.faqs__innerSubtitle}
              >
                <h3 className={style.faqs__subtitle}>
                  Nulla tincidunt eros id tempus accumsan.
                </h3>
                <IconPlus className={style.faqs__plus} />
              </div>
              <p className={style.faqs__text}>
                Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
                laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies
                elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at
                accumsan. Donec a eros non massa vulputate ornare. Vivamus
                ornare commodo ante, at commodo felis congue vitae.
              </p>
            </div>
          </div>
        </div>
        <div className={style.faqs__innerImg}>
          <img
            loading="lazy"
            className={style.faqs__img}
            src="/images/imageFaqs.webp"
            alt="image shop"
          />
        </div>
      </div>
    </main>
  );
}
