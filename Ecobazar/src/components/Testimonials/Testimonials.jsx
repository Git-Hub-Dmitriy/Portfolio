import * as style from "./Testimonials.module.scss";
import IconArrowLeft from "@assets/iconArrowLeft.svg";
import IconArrowRight from "@assets/iconArrowRight.svg";
import { testimonials } from "@data/testimonials";
import IconQuotes from "@assets/iconQuotes.svg";
import IconStar from "@assets/iconStar.svg";
import Slider from "./Slider/Slider";
import { useState, useRef, useEffect } from "react";

export default function Testimonials() {
  const deviceViewport = window.innerWidth;
  let amountVisibleElements = 3;
  let shiftSlider = 36.6;
  if (deviceViewport <= 760) {
    amountVisibleElements = 2;
    shiftSlider = 51.1;
  }
  if (deviceViewport <= 500) {
    amountVisibleElements = 1;
    shiftSlider = 101.6;
  }
  const [data, setData] = useState(testimonials);
  const [slide, setSlide] = useState(0);
  const refSlider = useRef(null);

  function handleRight() {
    setSlide((current) => {
      const newValue = current - shiftSlider;
      if (-(data.length - amountVisibleElements) > newValue / shiftSlider) {
        return 0;
      } else {
        return newValue;
      }
    });
  }
  function handleLeft() {
    setSlide((current) => {
      const newValue = current + shiftSlider;
      if (newValue > 0) {
        return -((data.length - amountVisibleElements) * shiftSlider);
      } else {
        return newValue;
      }
    });
  }

  useEffect(() => {
    if (refSlider && refSlider.current) {
      refSlider.current.style.transform = `translate(${slide}%)`;
    }
  }, [slide]);

  return (
    <section className={style.testimonials}>
      <div className={style.testimonials__wrapTitle}>
        <h1 className={style.testimonials__title}>Client Testimonials</h1>
        <div className={style.testimonials__innerSlide}>
          <div
            onClick={() => handleLeft()}
            className={style.testimonials__arrowLeft}
          >
            <IconArrowLeft
              stroke={"#1a1a1a"}
              className={style.testimonials__iconArrowLeft}
            />
          </div>
          <div
            onClick={() => handleRight()}
            className={style.testimonials__arrowRight}
          >
            <IconArrowRight
              stroke={"#1a1a1a"}
              className={style.testimonials__iconArrowRight}
            />
          </div>
        </div>
      </div>
      <div className={style.testimonials__wrapContent}>
        <Slider refSlider={refSlider}>
          {data.map((user, i) => {
            return (
              <div key={user.id} className={style.testimonials__user}>
                <div className={style.testimonials__innerQuotes}>
                  <IconQuotes className={style.testimonials__iconQuotes} />
                </div>
                <h3 className={style.testimonials__text}>{user.text}</h3>
                <div className={style.testimonials__wrapName}>
                  <div className={style.testimonials__innerName}>
                    <h2 className={style.testimonials__name}>{user.name}</h2>
                    <h3 className={style.testimonials__client}>Customer</h3>
                  </div>
                  <div className={style.testimonials__innerRating}>
                    <IconStar className={style.testimonials__iconStar} />
                    <IconStar className={style.testimonials__iconStar} />
                    <IconStar className={style.testimonials__iconStar} />
                    <IconStar className={style.testimonials__iconStar} />
                    <IconStar className={style.testimonials__iconStar} />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
