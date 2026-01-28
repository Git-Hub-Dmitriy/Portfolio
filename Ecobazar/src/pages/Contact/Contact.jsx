import { Helmet } from "react-helmet";
import * as style from "./Contact.module.scss";
import Navigate from "@components/Navigate/Navigate";
import IconContactMark from "@assets/iconContanctMark.svg";
import IconMail from "@assets/iconMail.svg";
import IconPhone from "@assets/iconPhone.svg";
import { useState, useEffect } from "react";

export default function Contact() {
  const [focusInput, setFocusInput] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={style.contact}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
      </Helmet>
      <Navigate one={"Contact"} />
      <section className={style.contact__wrapContent}>
        <div className={style.contact__innerContact}>
          <div className={style.contact__info}>
            <IconContactMark className={style.contact__icon} />
            <h3 className={style.contact__infoText}>
              2715 Ash Dr. San Jose, South Dakota 83475
            </h3>
          </div>
          <div className={style.contact__info}>
            <IconMail className={style.contact__icon} />
            <h3 className={style.contact__infoText}>
              Proxy@gmail.com Help.proxy@gmail.com
            </h3>
          </div>
          <div className={style.contact__info}>
            <IconPhone stroke={"#2C742F"} className={style.contact__icon} />
            <h3 className={style.contact__infoText}>
              (219) 555-0114
              <br />
              (164) 333-0487
            </h3>
          </div>
        </div>
        <div className={style.contact__innerForm}>
          <div className={style.contact__innerTitle}>
            <h1 className={style.contact__title}>Just Say Hello!</h1>
            <h3 className={style.contact__subtitle}>
              Do you fancy saying hi to me or you want to get started with your
              project and you need my help? Feel free to contact me.
            </h3>
          </div>
          <form
            id="formContact"
            name="messageContact"
            className={style.contact__form}
          >
            <div className={style.contact__innerInput}>
              <h3 className={style.contact__label}>Template Cookie</h3>
              <input
                onFocus={() => setFocusInput(1)}
                onBlur={() => setFocusInput(null)}
                placeholder="zakirsoft@gmail.com"
                className={
                  focusInput !== 1
                    ? style.contact__inputEmail
                    : `${style.contact__inputEmail} ${style.contact__inputEmail_focused}`
                }
                type="email"
                autoComplete="on"
                required
                id="contactEmail"
              />
            </div>
            <input
              onFocus={() => setFocusInput(2)}
              onBlur={() => setFocusInput(null)}
              placeholder="Hello"
              className={
                focusInput !== 2
                  ? style.contact__inputText
                  : `${style.contact__inputText} ${style.contact__inputText_focused}`
              }
              type="text"
              id="contactName"
              required
              autoComplete="off"
            />
            <textarea
              onFocus={() => setFocusInput(3)}
              onBlur={() => setFocusInput(null)}
              placeholder="Subjects"
              className={
                focusInput !== 3
                  ? style.contact__comment
                  : `${style.contact__comment} ${style.contact__comment_focused}`
              }
              id="userMessageContact"
              autoComplete="off"
            />
          </form>
          <button form="formContact" className={style.contact__button}>
            Send Message
          </button>
        </div>
      </section>
      <iframe
        className={style.contact__map}
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d339041.7944956286!2d-88.04452033292914!3d41.82534393093286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1736779187720!5m2!1sru!2sua"
        width="600"
        height="450"
        loading="lazy"
        referrerPolicy="origin-when-cross-origin"
      />
    </main>
  );
}
