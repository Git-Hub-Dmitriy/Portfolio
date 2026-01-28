import * as style from "./BlockNavigate.module.scss";
import BlockContact from "./BlockContact/BlockContact";
import { NavLink } from "react-router-dom";
import { categories } from "@data/categories";
import { useNavigate } from "react-router-dom";

export default function blockNavigate({ active }) {
  const fruit = categories.find((item) => item.id === 0);
  const meat = categories.find((item) => item.id === 2);
  const bread = categories.find((item) => item.id === 6);
  const vegetables = categories.find((item) => item.id === 1);
  const navigate = useNavigate();

  return (
    <div className={style.blockNavigate}>
      <BlockContact />
      <div className={style.blockNavigate__innerTitle}>
        <h1 className={style.blockNavigate__title}>My Account</h1>
        <NavLink className={active} to="account/dashboard">
          My Account
        </NavLink>
        <NavLink className={active} to="account/orderHistory">
          Order History
        </NavLink>
        <h1 className={style.blockNavigate__title_small}>Shoping Cart</h1>
        <NavLink className={active} to="account/accountWishlist">
          Wishlist
        </NavLink>
      </div>
      <div className={style.blockNavigate__innerTitle}>
        <h1 className={style.blockNavigate__title}>Helps</h1>
        <NavLink className={active} to="contact">
          Contact
        </NavLink>
        <NavLink className={active} to="faqs">
          Faqs
        </NavLink>
        <NavLink className={active} to="terms">
          Terms & Condition
        </NavLink>
        <NavLink className={active} to="privacyPolicy">
          Privacy Policy
        </NavLink>
      </div>
      <div className={style.blockNavigate__innerTitle}>
        <h1 className={style.blockNavigate__title}>Proxy</h1>
        <NavLink className={active} to="about">
          About
        </NavLink>
        <NavLink className={active} to="shop">
          Shop
        </NavLink>
        <NavLink className={active} to="shop">
          Product
        </NavLink>
        <NavLink className={active} to="ordersHistory">
          Track Order
        </NavLink>
      </div>
      <div className={style.blockNavigate__innerTitle}>
        <h1 className={style.blockNavigate__title}>Categories</h1>
        <h3
          onClick={() =>
            navigate("/shop", {
              state: { category: fruit.category.toLowerCase() },
            })
          }
          className={style.blockNavigate__subtitle}
        >
          {fruit.name}
        </h3>
        <h3
          className={style.blockNavigate__subtitle}
          onClick={() =>
            navigate("/shop", {
              state: { category: meat.category.toLowerCase() },
            })
          }
        >
          {meat.name}
        </h3>
        <h3
          className={style.blockNavigate__subtitle}
          onClick={() =>
            navigate("/shop", {
              state: { category: bread.category.toLowerCase() },
            })
          }
        >
          {bread.name}
        </h3>
        <h3
          className={style.blockNavigate__subtitle}
          onClick={() =>
            navigate("/shop", {
              state: { category: vegetables.category.toLowerCase() },
            })
          }
        >
          {vegetables.name}
        </h3>
      </div>
    </div>
  );
}
