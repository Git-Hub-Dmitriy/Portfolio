import * as style from "./Slider.scss";

export default function Slider({ children, refSlider }) {
  return (
    <div className={style.slider}>
      <div ref={refSlider} className={style.slider__lineSlide}>
        {children.map((item, i) => (
          <div className={style.slider__card} key={i}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
