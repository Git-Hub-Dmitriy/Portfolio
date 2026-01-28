import * as style from "./Login.module.scss";
import Navigate from "@components/Navigate/Navigate";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import IconPasswordEye from "@assets/iconPasswordEye.svg";
import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeAuthorization } from "@store/reducers/authorizationSlice";
import { users } from "@data/users";

export default function Login() {
  const dispatch = useDispatch();
  const [auth, setAuth] = useState({
    login: "",
    password: "",
  });
  const [message, setMessage] = useState({
    messagePass: null,
    messageLogin: null,
    rememberUser: false,
    incorrect: false,
  });
  const btnRef = useRef();
  const passRef = useRef();
  const [switchType, setSwitchType] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";

  function submitLogin() {
    const user = users.find(
      (user) =>
        user.login.toLowerCase() === auth.login.toLowerCase() &&
        user.password.toLowerCase() === auth.password.toLowerCase()
    );
    if (auth.login && auth.password) {
      if (user) {
        if (user.login && user.password) {
          setMessage({
            ...message,
            messageLogin: null,
            messagePass: null,
            incorrect: false,
            rememberUser: false,
          });
          setAuth({
            ...auth,
            login: "",
            password: "",
          });
          setSwitchType(false);
          navigate(fromPage, { replace: true });
          dispatch(changeAuthorization(true));
        }
      } else {
        setMessage({
          ...message,
          incorrect: true,
          messageLogin: "incorrect login or password",
          messagePass: "please try again",
        });
        setAuth({
          ...auth,
          login: "",
          password: "",
        });
      }
    } else {
      setMessage({
        ...message,
        messageLogin: "enter your login",
        messagePass: "enter your password",
      });
    }
    if (auth.login && !auth.password) {
      setMessage({
        ...message,
        messageLogin: null,
        messagePass: "enter your password",
      });
    }
    if (!auth.login && auth.password) {
      setMessage({
        ...message,
        messageLogin: "enter your login",
        messagePass: null,
      });
    }
  }

  useEffect(() => {
    const type =
      passRef.current.getAttribute("type") === "password" ? "text" : "password";
    passRef.current.setAttribute("type", type);
  }, [switchType]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={style.login}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
      </Helmet>
      <Navigate one={"Account"} two={"Login"} />
      <section className={style.login__wrap}>
        <h1 className={style.login__title}>Sign In</h1>
        <form
          name="login"
          onSubmit={(e) => {
            e.preventDefault();
            submitLogin();
          }}
          className={style.login__form}
        >
          <input
            onChange={(e) => setAuth({ ...auth, login: e.target.value })}
            name="login"
            id="login"
            value={auth.login}
            autoComplete="yes"
            autoSave="yes"
            placeholder={
              message.messageLogin === null ? "Login" : message.messageLogin
            }
            className={
              message.messageLogin === null
                ? style.login__email
                : `${style.login__email} ${style.login__email_red}`
            }
            type="text"
          />
          <div
            className={
              message.messagePass === null
                ? style.login__innerPassword
                : `${style.login__innerPassword} ${style.login__innerPassword_red}`
            }
          >
            <input
              ref={passRef}
              name="password"
              id="password"
              autoComplete="no"
              onChange={(e) => setAuth({ ...auth, password: e.target.value })}
              value={auth.password}
              autoSave="no"
              placeholder={
                message.messagePass === null ? "Password" : message.messagePass
              }
              className={style.login__password}
              type="password"
            />
            <IconPasswordEye
              ref={btnRef}
              onClick={() => setSwitchType(!switchType)}
              className={
                switchType === false
                  ? style.login__switchPassword
                  : `${style.login__switchPassword} ${style.login__switchPassword_show}`
              }
            />
          </div>
          <div className={style.login__wrapRememberBtn}>
            <label className={style.login__innerCheckbox}>
              <input
                onChange={() =>
                  setMessage({
                    ...message,
                    rememberUser: !message.rememberUser,
                  })
                }
                name="loginCheckbox"
                className={style.login__check}
                type="checkbox"
                checked={message.rememberUser}
              />
              Remember me
            </label>
            <span className={style.login__forgot}>Forget Password</span>
          </div>
          <button className={style.login__btn}>Login</button>
        </form>
        <div className={style.login__innerRegister}>
          <h4 className={style.login__subtitle}>Don't have account?</h4>
          <Link className={style.login__link} to={"/register"}>
            Register
          </Link>
        </div>
      </section>
    </main>
  );
}
