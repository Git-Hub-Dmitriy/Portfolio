import * as style from "./Subscribe.module.scss";

export default function Subscribe() {
  return (
    <div className={style.subscribe}>
      <form
        id="subscribtion"
        name="subscription"
        className={style.subscribe__form}
        action="/"
      >
        <input
          required
          name="subscribeInput"
          autoComplete="on"
          autoSave="on"
          placeholder="Your email address"
          className={style.subscribe__input}
          type="email"
        />
      </form>
      <button form="subscribtion" className={style.subscribe__button}>
        Subscribe
      </button>
    </div>
  );
}
