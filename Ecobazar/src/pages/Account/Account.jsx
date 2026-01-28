import { Helmet } from "react-helmet";
import * as style from "./Account.module.scss";
import Navigate from "@components/Navigate/Navigate";
import Nav from "./Nav/Nav";
import { Outlet, useLocation } from "react-router-dom";

export default function Account() {
  const location = useLocation();
  const locate = () => {
    switch (location.pathname) {
      case "/account/dashboard": {
        return "Dashboard";
      }
      case "/account/orderHistory": {
        return "Order History";
      }
      case "/account/accountWishlist": {
        return "Wishlist";
      }
      case "/account/shoppingCart": {
        return "Shopping Cart";
      }
      case "/account/settings": {
        return "Settings";
      }
      default: {
        return "";
      }
    }
  };

  return (
    <div className={style.account}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Account</title>
      </Helmet>
      <Navigate one={"Account"} two={locate()} />
      <div className={style.account__container}>
        <Nav />
        <Outlet />
      </div>
    </div>
  );
}
