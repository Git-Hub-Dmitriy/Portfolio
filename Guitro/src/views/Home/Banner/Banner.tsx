"use client";
import styles from "./Banner.module.css";
import Carousel from "@components/Carousel/Carousel";

const slides = [
  {
    id: 0,
    src: "/images/main-banner-1.webp",
    alt: "slide",
  },
  {
    id: 1,
    src: "/images/main-banner-2.webp",
    alt: "slide",
  },
];

export default function Banner() {
  return (
    <section className={styles.banner}>
      <Carousel slides={slides} />
    </section>
  );
}
