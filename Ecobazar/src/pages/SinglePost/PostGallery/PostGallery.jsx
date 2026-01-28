import * as style from "./PostGallery.module.scss";

export default function PostGallery() {
  return (
    <section className={style.postGallery}>
      <h2 className={style.postGallery__title}>Our Gallery</h2>
      <div className={style.postGallery__wrapImg}>
        {images.map((img, i) => (
          <img
            loading="lazy"
            className={style.postGallery__img}
            key={i}
            src={img}
            alt="image gallery"
          />
        ))}
      </div>
    </section>
  );
}

export const images = [
  "/images/gallery-one.webp",
  "/images/gallery-two.webp",
  "/images/gallery-three.webp",
  "/images/gallery-four.webp",
  "/images/gallery-five.webp",
  "/images/gallery-six.webp",
  "/images/gallery-seven.webp",
  "/images/gallery-eight.webp",
];
