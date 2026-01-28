import * as style from "./Price.module.scss";
import IconArrowUp from "@assets/iconArrowUp.svg";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Price({ min, max, handlePrice }) {
  const statePrice = useSelector((store) => store.statesShop);
  const [hidden, setHidden] = useState(true);
  const trackRef = useRef(null);
  const minInputRef = useRef(null);
  const maxInputRef = useRef(null);
  const zIndexMin = 10;
  const zIndexMax = 20;

  useEffect(() => {
    if (trackRef && trackRef.current) {
      const minLeft = `${((statePrice.min - min) / (max - min)) * 100}%`;
      const maxRight = `${((max - statePrice.max) / (max - min)) * 100}%`;
      trackRef.current.style.left = minLeft;
      trackRef.current.style.right = maxRight;
    }
  }, [max, statePrice.max, min, statePrice.min]);

  function handleMin(e) {
    if (
      minInputRef &&
      minInputRef.current &&
      maxInputRef &&
      maxInputRef.current
    ) {
      minInputRef.current.style.zIndex = zIndexMax;
      maxInputRef.current.style.zIndex = zIndexMin;
    }
    const value = Number(e.target.value);
    if (value <= statePrice.max) {
      handlePrice(value, statePrice.max);
    }
  }

  function handleMax(e) {
    if (
      minInputRef &&
      minInputRef.current &&
      maxInputRef &&
      maxInputRef.current
    ) {
      minInputRef.current.style.zIndex = zIndexMin;
      maxInputRef.current.style.zIndex = zIndexMax;
    }
    const value = Number(e.target.value);
    if (value >= statePrice.min) {
      handlePrice(statePrice.min, value);
    }
  }

  return (
    <section
      className={
        hidden === false ? style.price : `${style.price} ${style.price_hidden}`
      }
    >
      <div
        onClick={() => {
          if (!hidden) {
            setHidden(true);
          } else {
            setHidden(false);
          }
        }}
        className={style.price__innerTitle}
      >
        <h1 className={style.price__title}>Price</h1>
        <IconArrowUp
          className={
            hidden === false
              ? style.price__iconArrowUp
              : `${style.price__iconArrowUp} ${style.price__iconArrowUp_rotate}`
          }
          stroke={"#1a1a1a"}
        />
      </div>
      <div
        className={
          hidden === false
            ? style.slider
            : `${style.slider} ${style.slider_hidden}`
        }
      >
        <div className={style.slider__track} ref={trackRef}></div>
        <input
          className={style.slider__input}
          type="range"
          min={min}
          max={max}
          step={1}
          name="min"
          onChange={(e) => handleMin(e)}
          value={statePrice.min}
          ref={minInputRef}
        />
        <input
          className={style.slider__input}
          type="range"
          min={min}
          max={max}
          step={1}
          name="max"
          onChange={(e) => handleMax(e)}
          value={statePrice.max}
          ref={maxInputRef}
        />
      </div>
      <div
        className={
          hidden === false
            ? style.price__innerValue
            : `${style.price__innerValue} ${style.price__innerValue_hidden}`
        }
      >
        <h3 className={style.price__min}>{statePrice.min}</h3>
        <div className={style.price__separator}></div>
        <h3 className={style.price__max}>{statePrice.max}</h3>
      </div>
    </section>
  );
}
