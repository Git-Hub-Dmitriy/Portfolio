import * as style from "./BlogGallery.module.scss";

export default function BlogGallery() {
  return (
    <section className={style.blogGallery}>
      <h2 className={style.blogGallery__title}>Our Gallery</h2>
      <div className={style.blogGallery__wrapImg}>
        {images.map((img, i) => (
          <img
            loading="lazy"
            className={style.blogGallery__img}
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
