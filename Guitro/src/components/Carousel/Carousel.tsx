"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import styles from "./Carousel.module.css";

interface PropsCarousel {
  slides: Array<{ id: number; src: string; alt: string }>;
}

export default function Carousel(props: PropsCarousel) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (!props.slides || props.slides.length === 0) return null;

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {props.slides.map((slide, index) => (
            <div className={styles.slide} key={slide.id}>
              <Image
                src={slide.src}
                alt={slide.alt || "Slide image"}
                fill
                priority={index === 0}
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>

      {props.slides.length > 1 && (
        <>
          <button
            className={`${styles.button} ${styles.prev}`}
            onClick={scrollPrev}
          >
            ‹
          </button>
          <button
            className={`${styles.button} ${styles.next}`}
            onClick={scrollNext}
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}
