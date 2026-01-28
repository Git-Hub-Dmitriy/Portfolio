import * as style from "./OrderProgress.module.scss";
import IconMark from "@assets/iconMark.svg";

export default function OrderProgress({ order }) {
  const received =
    order.status.toLowerCase() == "received" ||
    order.status.toLowerCase() == "processing" ||
    order.status.toLowerCase() == "on the way" ||
    order.status.toLowerCase() == "completed"
      ? style.orderProgress__circle_green
      : style.orderProgress__circle;
  const processing =
    order.status.toLowerCase() == "processing" ||
    order.status.toLowerCase() == "on the way" ||
    order.status.toLowerCase() == "completed"
      ? style.orderProgress__circle_green
      : style.orderProgress__circle;
  const onWay =
    order.status.toLowerCase() == "on the way" ||
    order.status.toLowerCase() == "completed"
      ? style.orderProgress__circle_green
      : style.orderProgress__circle;
  const completed =
    order.status.toLowerCase() == "completed"
      ? style.orderProgress__circle_green
      : style.orderProgress__circle;
  const trackOne =
    order.status.toLowerCase() == "processing" ||
    order.status.toLowerCase() == "on the way" ||
    order.status.toLowerCase() == "completed"
      ? style.orderProgress__track_green
      : style.orderProgress__track;
  const trackTwo =
    order.status.toLowerCase() == "on the way" ||
    order.status.toLowerCase() == "completed"
      ? style.orderProgress__track_green
      : style.orderProgress__track;
  const trackThree =
    order.status.toLowerCase() == "completed"
      ? style.orderProgress__track_green
      : style.orderProgress__track;
  return (
    <section className={style.orderProgress}>
      <div className={style.orderProgress__wrapTrack}>
        <div className={trackOne}></div>
        <div className={trackTwo}></div>
        <div className={trackThree}></div>
      </div>
      <div className={style.orderProgress__innerPoint}>
        <div className={received}>
          {received == style.orderProgress__circle_green ? "" : "01"}
          <IconMark className={style.orderProgress__icon} />
        </div>
        <h4
          className={
            received == style.orderProgress__circle_green
              ? style.orderProgress__text_green
              : style.orderProgress__text
          }
        >
          Order received
        </h4>
      </div>
      <div className={style.orderProgress__innerPoint}>
        <div className={processing}>
          {processing == style.orderProgress__circle_green ? "" : "02"}
          <IconMark className={style.orderProgress__icon} />
        </div>
        <h4
          className={
            processing == style.orderProgress__circle_green
              ? style.orderProgress__text_green
              : style.orderProgress__text
          }
        >
          Processing
        </h4>
      </div>
      <div className={style.orderProgress__innerPoint}>
        <div className={onWay}>
          {onWay == style.orderProgress__circle_green ? "" : "03"}
          <IconMark className={style.orderProgress__icon} />
        </div>
        <h4
          className={
            onWay == style.orderProgress__circle_green
              ? style.orderProgress__text_green
              : style.orderProgress__text
          }
        >
          On the way
        </h4>
      </div>
      <div className={style.orderProgress__innerPoint}>
        <div className={completed}>
          {completed == style.orderProgress__circle_green ? "" : "04"}
          <IconMark className={style.orderProgress__icon} />
        </div>
        <h4
          className={
            completed == style.orderProgress__circle_green
              ? style.orderProgress__text_green
              : style.orderProgress__text
          }
        >
          Delivered
        </h4>
      </div>
    </section>
  );
}
