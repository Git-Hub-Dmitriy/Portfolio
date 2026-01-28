import * as style from "./SectionPassword.module.scss";
import IconEye from "@assets/iconMiniEye.svg";
import { useState, useRef, useEffect } from "react";

export default function SectionPassword({ activeBorder, setActiveBorder }) {
  const [visiblePass, setVisiblePass] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const currentPass = useRef();
  const newPass = useRef();
  const confirmPass = useRef();

  useEffect(() => {
    const changeCurrent =
      visiblePass.current === true
        ? currentPass.current.setAttribute("type", "text")
        : currentPass.current.setAttribute("type", "password");
    const changeNew =
      visiblePass.new === true
        ? newPass.current.setAttribute("type", "text")
        : newPass.current.setAttribute("type", "password");
    const changeConfirm =
      visiblePass.confirm === true
        ? confirmPass.current.setAttribute("type", "text")
        : confirmPass.current.setAttribute("type", "password");
  }, [visiblePass.current, visiblePass.new, visiblePass.confirm]);

  return (
    <section className={style.sectionPass}>
      <h2 className={style.sectionPass__title}>Change Password</h2>
      <form name="changePassword" action="" className={style.sectionPass__form}>
        <div className={style.sectionPass__wrapPass}>
          <h4 className={style.sectionPass__subtitle}>Current Password</h4>
          <div
            tabIndex={0}
            className={
              activeBorder.currentPassword === false
                ? style.sectionPass__innerInput
                : `${style.sectionPass__innerInput} ${style.sectionPass__innerInput_active}`
            }
            onFocus={() =>
              setActiveBorder({
                ...activeBorder,
                currentPassword: true,
              })
            }
            onBlur={() =>
              setActiveBorder({
                ...activeBorder,
                currentPassword: false,
              })
            }
          >
            <input
              ref={currentPass}
              placeholder="Password"
              autoComplete="off"
              id="currentPassword"
              className={style.sectionPass__input}
              type="password"
              required
            />
            <IconEye
              onClick={() =>
                setVisiblePass({
                  ...visiblePass,
                  current: !visiblePass.current,
                })
              }
              className={
                visiblePass.current == false
                  ? style.sectionPass__iconEye
                  : `${style.sectionPass__iconEye} ${style.sectionPass__iconEye_active}`
              }
            />
          </div>
        </div>
        <div className={style.sectionPass__wrapNewPass}>
          <div className={style.sectionPass__column}>
            <h4 className={style.sectionPass__subtitle}>New Password</h4>
            <div
              className={
                activeBorder.newPassword === false
                  ? style.sectionPass__innerInput
                  : `${style.sectionPass__innerInput} ${style.sectionPass__innerInput_active}`
              }
              tabIndex={1}
              onFocus={() =>
                setActiveBorder({
                  ...activeBorder,
                  newPassword: true,
                })
              }
              onBlur={() =>
                setActiveBorder({
                  ...activeBorder,
                  newPassword: false,
                })
              }
            >
              <input
                ref={newPass}
                placeholder="Password"
                autoComplete="off"
                id="newPassword"
                className={style.sectionPass__input}
                type="password"
                required
              />
              <IconEye
                onClick={() =>
                  setVisiblePass({
                    ...visiblePass,
                    new: !visiblePass.new,
                  })
                }
                className={
                  visiblePass.new == false
                    ? style.sectionPass__iconEye
                    : `${style.sectionPass__iconEye} ${style.sectionPass__iconEye_active}`
                }
              />
            </div>
          </div>
          <div className={style.sectionPass__column}>
            <h4 className={style.sectionPass__subtitle}>Current Password</h4>
            <div
              className={
                activeBorder.confirmPassword === false
                  ? style.sectionPass__innerInput
                  : `${style.sectionPass__innerInput} ${style.sectionPass__innerInput_active}`
              }
              tabIndex={2}
              onFocus={() =>
                setActiveBorder({
                  ...activeBorder,
                  confirmPassword: true,
                })
              }
              onBlur={() =>
                setActiveBorder({
                  ...activeBorder,
                  confirmPassword: false,
                })
              }
            >
              <input
                ref={confirmPass}
                placeholder="Password"
                autoComplete="off"
                id="confirmPassword"
                className={style.sectionPass__input}
                type="password"
                required
              />
              <IconEye
                onClick={() =>
                  setVisiblePass({
                    ...visiblePass,
                    confirm: !visiblePass.confirm,
                  })
                }
                className={
                  visiblePass.confirm == false
                    ? style.sectionPass__iconEye
                    : `${style.sectionPass__iconEye} ${style.sectionPass__iconEye_active}`
                }
              />
            </div>
          </div>
        </div>
        <button type="submit" className={style.sectionPass__btnSavePass}>
          Change Password
        </button>
      </form>
    </section>
  );
}
