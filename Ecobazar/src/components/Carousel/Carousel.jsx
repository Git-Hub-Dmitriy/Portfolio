import * as style from "./Carousel.scss";
import IconArrowLeft from "@assets/iconArrowLeft.svg";
import IconArrowRight from "@assets/iconArrowRight.svg";
import { useState, useEffect, useRef } from "react";

export default function Carousel({ children, settings }) {
  const [amountVisibleElements, setAmountVisibleElements] = useState(
    settings.visibleElements
  );

  const [innerGap, setInnerGap] = useState();
  const [widthCard, setWidthCard] = useState(0);
  const [shift, setShift] = useState({
    shift: 0,
    pureValue: 0,
  });
  const refSlider = useRef(null);

  useEffect(() => {
    const deviceViewport = window.innerWidth;
    if (deviceViewport <= 1200 && amountVisibleElements !== 3) {
      setAmountVisibleElements(3);
    } else {
      return;
    }
    if (deviceViewport <= 760 && amountVisibleElements !== 2) {
      setAmountVisibleElements(2);
    } else {
      return;
    }
    if (deviceViewport <= 500 && amountVisibleElements !== 1) {
      setAmountVisibleElements(1);
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    const widthSlider = refSlider.current.getBoundingClientRect().width;
    const widthWithInnerGap = Number(
      widthSlider +
        parseInt(settings.innerColumnGap) * (amountVisibleElements - 1)
    );
    const resultInnerGap = Number(
      ((parseInt(settings.innerColumnGap) / widthWithInnerGap) * 100).toFixed(4)
    );
    setInnerGap(resultInnerGap);
  }, [amountVisibleElements]);

  useEffect(() => {
    const widthSlider = refSlider.current.getBoundingClientRect().width;
    const valueGap =
      (innerGap / 100) * widthSlider * (amountVisibleElements - 1);
    const widthWithGap = +widthSlider - +valueGap;
    const result = (
      (widthWithGap / amountVisibleElements / widthSlider) *
      100
    ).toFixed(3);
    setWidthCard(Number(result));
  }, [innerGap]);

  function handleRight() {
    setShift((current) => {
      const newValue = +current.shift - +widthCard - +innerGap;
      const withoutGap = +current.pureValue - +widthCard;
      if (
        -(children.length - +amountVisibleElements) >
        (+withoutGap / +widthCard).toFixed(1)
      ) {
        return {
          ...shift,
          shift: 0,
          pureValue: 0,
        };
      } else {
        return {
          ...shift,
          shift: newValue.toFixed(4),
          pureValue: withoutGap.toFixed(4),
        };
      }
    });
  }
  function handleLeft() {
    setShift((current) => {
      const value = +current.shift + +widthCard + +innerGap;
      const withoutGap = +current.pureValue + +widthCard;
      if (withoutGap > 0) {
        return {
          ...shift,
          shift: -(
            (children.length - +amountVisibleElements) *
            (+widthCard + +innerGap)
          ).toFixed(4),
          pureValue: -(
            (children.length - +amountVisibleElements) *
            +widthCard
          ).toFixed(4),
        };
      } else {
        return {
          ...shift,
          shift: value.toFixed(4),
          pureValue: withoutGap.toFixed(4),
        };
      }
    });
  }

  useEffect(() => {
    if (refSlider && refSlider.current) {
      refSlider.current.style.transform = `translate(${shift.shift}%)`;
    }
  }, [shift]);

  return (
    <div className={style.carousel}>
      <div onClick={() => handleLeft()} className={style.carousel__innerArrow}>
        <IconArrowLeft
          stroke={settings.colorArrow}
          className={style.carousel__arrow}
        />
      </div>
      <div className={style.carousel__wrapper}>
        <div
          style={{
            gridColumnGap: `${innerGap}%`,
          }}
          ref={refSlider}
          className={style.carousel__slider}
        >
          {children.map((item, i) => (
            <div
              style={{ width: `${widthCard}%` }}
              key={i}
              className={style.carousel__wrapCard}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div onClick={() => handleRight()} className={style.carousel__innerArrow}>
        <IconArrowRight
          stroke={settings.colorArrow}
          className={style.carousel__arrow}
        />
      </div>
    </div>
  );
}
