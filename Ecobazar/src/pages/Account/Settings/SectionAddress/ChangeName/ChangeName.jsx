import * as style from "./ChangeName.module.scss";
import { useState } from "react";

export default function ChangeName({ changeUser, setChangeUser }) {
  const [border, setBorder] = useState({
    name: false,
    surname: false,
    company: false,
  });

  return (
    <div className={style.changeName__wrapName}>
      <div className={style.changeName__innerName}>
        <h4 className={style.changeName__subtitle}>First name</h4>
        <input
          onChange={(e) =>
            setChangeUser({
              ...changeUser,
              name: e.target.value,
            })
          }
          type="text"
          required
          autoComplete="off"
          id="changeName"
          value={changeUser.name}
          className={
            border.name === false
              ? style.changeName__inputName
              : `${style.changeName__inputName} ${style.changeName__inputName_active}`
          }
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
        />
      </div>
      <div className={style.changeName__innerName}>
        <h4 className={style.changeName__subtitle}>Last name</h4>
        <input
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
          type="text"
          required
          autoComplete="off"
          id="changeSurname"
          value={changeUser.surname}
          className={
            border.surname === false
              ? style.changeName__inputName
              : `${style.changeName__inputName} ${style.changeName__inputName_active}`
          }
        />
      </div>
      <div className={style.changeName__innerName}>
        <h4 className={style.changeName__subtitle}>
          Company Name{" "}
          <span className={style.changeName__span}>(optional)</span>
        </h4>
        <input
          onChange={(e) =>
            setChangeUser({
              ...changeUser,
              company: e.target.value,
            })
          }
          onFocus={() => {
            setBorder({
              ...border,
              company: true,
            });
          }}
          onBlur={() => {
            setBorder({
              ...border,
              company: false,
            });
          }}
          type="text"
          autoComplete="off"
          id="changeCompany"
          value={changeUser.company}
          className={
            border.company === false
              ? style.changeName__inputName
              : `${style.changeName__inputName} ${style.changeName__inputName_active}`
          }
        />
      </div>
    </div>
  );
}
