import * as style from "./SliderImage.module.scss";
import IconArrowUp from "@assets/iconArrowUp.svg";
import IconArrowDown from "@assets/iconArrowDown.svg";

export default function SliderImage({ product, setIndex, index }) {
  function handleClickUp() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(3);
    }
  }
  function handleClickDown() {
    if (index < 3) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  return (
    <section className={style.sliderImage}>
      <div className={style.sliderImage__innerArrowUp}>
        <IconArrowUp
          stroke={"#1a1a1a"}
          onClick={() => handleClickUp()}
          className={style.sliderImage__arrowUp}
        />
      </div>
      <div className={style.sliderImage__wrapImages}>
        {product.pictures.map((img, i) => {
          if (i < 4) {
            return (
              <img
                loading="lazy"
                onMouseDown={(e) => {
                  e.preventDefault();
                }}
                onClick={() => setIndex(i)}
                className={
                  i !== index
                    ? style.sliderImage__img
                    : `${style.sliderImage__img} ${style.sliderImage__img_light}`
                }
                key={i}
                src={`/${img}`}
                alt="mini image"
              />
            );
          }
        })}
      </div>
      <div className={style.sliderImage__innerArrowDown}>
        <IconArrowDown
          stroke={"#1a1a1a"}
          onClick={() => handleClickDown()}
          className={style.sliderImage__arrowDown}
        />
      </div>
    </section>
  );
}
