import * as style from "./Register.module.scss";
import Navigate from "@components/Navigate/Navigate";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import IconEye from "@assets/iconPasswordEye.svg";
import { useState, useEffect, useRef } from "react";
import newUser from "@utils/newUser";
import { users } from "@data/users";
import { useDispatch } from "react-redux";
import { changeAuthorization } from "@store/reducers/authorizationSlice";

export default function Register() {
  const refPassword = useRef();
  const refConfirmPassword = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [dataUser, setDataUser] = useState({
    login: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState({
    messageLogin: null,
    messagePass: null,
    confirmPassword: null,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function submitNewUser() {
    const regexp = dataUser.login.match(/[^а-яa-z0-9@.]+/i);
    if (dataUser.login && dataUser.password && dataUser.confirmPassword) {
      if (!regexp) {
        const user = users.find(
          (user) => user.login.toLowerCase() === dataUser.login.toLowerCase()
        );
        if (dataUser.password === dataUser.confirmPassword) {
          if (!user) {
            newUser(dataUser);
            setMessage({
              ...message,
              messageLogin: null,
              messagePass: null,
              confirmPassword: null,
            });
            setDataUser({
              ...dataUser,
              login: "",
              password: "",
              confirmPassword: "",
            });
            setShowPassword(false);
            setShowConfirmPassword(false);
            dispatch(changeAuthorization(true));
            navigate("/", { replace: true });
          } else {
            setDataUser({
              ...dataUser,
              login: "",
            });
            setMessage({
              ...message,
              messageLogin: "This login already exists.",
              messagePass: "Please enter a different login.",
            });
          }
        } else {
          setMessage({
            ...message,
            messageLogin: null,
            messagePass: "your passwords",
            confirmPassword: "don't match",
          });
          setDataUser({
            ...dataUser,
            password: "",
            confirmPassword: "",
          });
        }
      } else {
        setDataUser({
          ...dataUser,
          login: "",
        });
        setMessage({
          ...message,
          messageLogin: "please use only letters or numbers",
          messagePass: null,
          confirmPassword: null,
        });
      }
    } else {
      setMessage({
        ...message,
        messageLogin: "enter your login",
        messagePass: "enter your password",
        confirmPassword: "enter your password",
      });
    }
    if (dataUser.login && !dataUser.password && !dataUser.confirmPassword) {
      setMessage({
        ...message,
        messageLogin: null,
        messagePass: "enter your password",
        confirmPassword: "enter your password",
      });
    }
    if (dataUser.login && dataUser.password && !dataUser.confirmPassword) {
      setMessage({
        ...message,
        messageLogin: null,
        messagePass: null,
        confirmPassword: "enter your password",
      });
    }
    if (dataUser.login && !dataUser.password && dataUser.confirmPassword) {
      setMessage({
        ...message,
        messageLogin: null,
        messagePass: "enter your password",
        confirmPassword: null,
      });
    }
    if (!dataUser.login && dataUser.password && dataUser.confirmPassword) {
      setMessage({
        ...message,
        messageLogin: "enter your login",
        messagePass: null,
        confirmPassword: null,
      });
    }
    if (!dataUser.login && !dataUser.password && dataUser.confirmPassword) {
      setMessage({
        ...message,
        messageLogin: "enter your login",
        messagePass: "enter your password",
        confirmPassword: null,
      });
    }
    if (!dataUser.login && dataUser.password && !dataUser.confirmPassword) {
      setMessage({
        ...message,
        messageLogin: "enter your login",
        messagePass: null,
        confirmPassword: "enter your password",
      });
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (showPassword) {
      refPassword.current.setAttribute("type", "text");
    } else {
      refPassword.current.setAttribute("type", "password");
    }
    if (showConfirmPassword) {
      refConfirmPassword.current.setAttribute("type", "text");
    } else {
      refConfirmPassword.current.setAttribute("type", "password");
    }
  }, [showPassword, showConfirmPassword]);
  return (
    <main className={style.register}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register</title>
      </Helmet>
      <Navigate one={"Account"} two={"Create Account"} />
      <div className={style.register__container}>
        <h1 className={style.register__title}>Create Account</h1>
        <form
          name="register"
          onSubmit={(e) => {
            e.preventDefault();
            submitNewUser();
          }}
          className={style.register__form}
        >
          <div className={style.register__wrapInputs}>
            <input
              onChange={(e) =>
                setDataUser({ ...dataUser, login: e.target.value })
              }
              value={dataUser.login}
              className={
                message.messageLogin === null
                  ? style.register__input
                  : `${style.register__input} ${style.register__input_login}`
              }
              name="email"
              type="text"
              autoSave="yes"
              autoComplete="yes"
              placeholder={
                message.messageLogin === null ? "Email" : message.messageLogin
              }
            />
            <div
              className={
                message.messagePass === null
                  ? style.register__innerInput
                  : `${style.register__innerInput} ${style.register__innerInput_passRed}`
              }
            >
              <input
                onChange={(e) =>
                  setDataUser({ ...dataUser, password: e.target.value })
                }
                value={dataUser.password}
                ref={refPassword}
                placeholder={
                  message.messagePass === null
                    ? "Password"
                    : message.messagePass
                }
                className={style.register__input}
                name="password"
                type="password"
                minLength="4"
                autoSave="no"
                autoComplete="no"
                maxLength="25"
              />
              <IconEye
                onClick={() => setShowPassword(!showPassword)}
                stroke={showPassword === false ? "#1a1a1a" : "#00B207"}
                className={style.register__iconEye}
              />
            </div>
            <div
              className={
                message.confirmPassword === null
                  ? style.register__innerInput
                  : `${style.register__innerInput} ${style.register__innerInput_confirmPassRed}`
              }
            >
              <input
                onChange={(e) =>
                  setDataUser({ ...dataUser, confirmPassword: e.target.value })
                }
                value={dataUser.confirmPassword}
                ref={refConfirmPassword}
                placeholder={
                  message.confirmPassword === null
                    ? "Confirm Password"
                    : message.confirmPassword
                }
                className={style.register__input}
                name="confirmPassword"
                type="password"
                minLength="4"
                autoSave="no"
                autoComplete="no"
                maxLength="25"
              />
              <IconEye
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                stroke={showConfirmPassword === false ? "#1a1a1a" : "#00B207"}
                className={style.register__iconEye}
              />
            </div>
            <label className={style.register__innerCheckbox}>
              <input
                className={style.register__checkbox}
                name="register"
                type="checkbox"
              />
              Accept all terms & Conditions
            </label>
          </div>
          <button className={style.register__button}>Create Account</button>
        </form>
        <div className={style.register__innerLink}>
          <span className={style.register__subtitle}>Already have account</span>
          <Link to={"/login"} className={style.register__link}>
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}
