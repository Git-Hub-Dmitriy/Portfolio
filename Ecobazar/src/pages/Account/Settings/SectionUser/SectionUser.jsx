import * as style from "./SectionUser.scss";
import { useState } from "react";

export default function SectionUser({ user, changeUser, setChangeUser }) {
  const [border, setBorder] = useState({
    name: false,
    surname: false,
    email: false,
    phone: false,
  });

  return (
    <section className={style.sectionUser}>
      <h2 className={style.sectionUser__title}>Account Settings</h2>
      <div className={style.sectionUser__wrapForm}>
        <form
          action=""
          name="changeNameEmailPhone"
          className={style.sectionUser__form}
        >
          <div className={style.sectionUser__innerField}>
            <h4 className={style.sectionUser__subtitle}>First name</h4>
            <input
              onFocus={() => {
                setBorder({
                  ...border,
                  name: true,
                });
              }}
              onBlur={() => {
                setBorder({
                  ...border,
                  name: false,
                });
              }}
              className={
                border.name === false
                  ? style.sectionUser__input
                  : `${style.sectionUser__input} ${style.sectionUser__input_active}`
              }
              type="text"
              value={changeUser.name}
              id="changeName"
              required
              autoComplete="off"
              onChange={(e) =>
                setChangeUser({
                  ...changeUser,
                  name: e.target.value,
                })
              }
            />
          </div>
          <div className={style.sectionUser__innerField}>
            <h4 className={style.sectionUser__subtitle}>Last name</h4>
            <input
              id="changeSurname"
              required
              autoComplete="off"
              className={
                border.surname === false
                  ? style.sectionUser__input
                  : `${style.sectionUser__input} ${style.sectionUser__input_active}`
              }
              type="text"
              value={changeUser.surname}
              onChange={(e) =>
                setChangeUser({
                  ...changeUser,
                  surname: e.target.value,
                })
              }
              onFocus={() => {
                setBorder({
                  ...border,
                  surname: true,
                });
              }}
              onBlur={() => {
                setBorder({
                  ...border,
                  surname: false,
                });
              }}
            />
          </div>
          <div className={style.sectionUser__innerField}>
            <h4 className={style.sectionUser__subtitle}>Email</h4>
            <input
              className={
                border.email === false
                  ? style.sectionUser__input
                  : `${style.sectionUser__input} ${style.sectionUser__input_active}`
              }
              type="email"
              id="changeEmail"
              autoComplete="on"
              required
              value={changeUser.email}
              onChange={(e) =>
                setChangeUser({
                  ...changeUser,
                  email: e.target.value,
                })
              }
              onFocus={() => {
                setBorder({
                  ...border,
                  email: true,
                });
              }}
              onBlur={() => {
                setBorder({
                  ...border,
                  email: false,
                });
              }}
            />
          </div>
          <div className={style.sectionUser__innerField}>
            <h4 className={style.sectionUser__subtitle}>Phone Number</h4>
            <input
              id="changePhone"
              autoComplete="off"
              required
              className={
                border.phone === false
                  ? style.sectionUser__input
                  : `${style.sectionUser__input} ${style.sectionUser__input_active}`
              }
              type="tel"
              value={changeUser.phone}
              onChange={(e) =>
                setChangeUser({
                  ...changeUser,
                  phone: e.target.value,
                })
              }
              onFocus={() => {
                setBorder({
                  ...border,
                  phone: true,
                });
              }}
              onBlur={() => {
                setBorder({
                  ...border,
                  phone: false,
                });
              }}
            />
          </div>
          <button className={style.sectionUser__changeNameBtn}>
            Save Changes
          </button>
        </form>
        <div className={style.sectionUser__wrapChangeImg}>
          <div className={style.sectionUser__innerImg}>
            <img
              loading="lazy"
              className={style.sectionUser__img}
              src={user.img}
              alt="user photo"
            />
          </div>
          <label className={style.sectionUser__changeImgBtn}>
            Choose Image
            <input
              type="file"
              placeholder=""
              name="changeImg"
              id="changeImg"
              className={style.sectionUser__inputFile}
            />
          </label>
        </div>
      </div>
    </section>
  );
}
