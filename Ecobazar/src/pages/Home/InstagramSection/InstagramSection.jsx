import * as style from "./InstagramSection.module.scss";
import { Link } from "react-router-dom";
import IconInstagram from "@assets/iconInstagram.svg";
import { imageInstagram } from "@data/imageInstagram";
import { useState } from "react";

export default function InstagramSection() {
  const [index, setIndex] = useState(null);
  return (
    <section className={style.instagramSection}>
      <h1 className={style.instagramSection__title}>Follow us on Instagram</h1>
      <div className={style.instagramSection__wrapContent}>
        {imageInstagram.map((img, i) => {
          if (i < 6) {
            return (
              <Link
                onMouseOver={() => setIndex(img.id)}
                onMouseOut={() => setIndex(null)}
                key={img.id}
                className={style.instagramSection__wrapImage}
                to="https://www.instagram.com/"
              >
                <div
                  className={
                    index !== img.id
                      ? style.instagramSection__background
                      : `${style.instagramSection__background} ${style.instagramSection__background_active}`
                  }
                >
                  <IconInstagram
                    fill={"#ffffff"}
                    className={style.instagramSection__iconInstagram}
                  />
                </div>
                <img
                  loading="lazy"
                  className={style.instagramSection__img}
                  src={img.img}
                  alt="image instagram"
                />
              </Link>
            );
          }
        })}
      </div>
    </section>
  );
}
