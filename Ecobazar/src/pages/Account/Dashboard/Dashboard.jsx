import * as style from "./Dashboard.module.scss";
import { Link } from "react-router-dom";
import { users } from "@data/users";

export default function Dashboard() {
  const user = users.find((user) => user.id === 0);
  const sortHistory = user.history.sort((a, b) => b.date - a.date);

  function getMonth(month) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return months[month];
  }

  return (
    <main className={style.dashboard}>
      <div className={style.dashboard__gridRow}>
        <div className={style.dashboard__wrapImg}>
          <div className={style.dashboard__innerImg}>
            <img
              loading="lazy"
              className={style.dashboard__userPhoto}
              src={user.img}
              alt="user Photo"
            />
          </div>
          <div className={style.dashboard__innerUserName}>
            <h2 className={style.dashboard__userName}>{user.name}</h2>
            <h4 className={style.dashboard__userGroup}>{user.group}</h4>
            <Link
              className={style.dashboard__linkSettings}
              to={"/account/settings"}
            >
              Edit Profile
            </Link>
          </div>
        </div>
        <div className={style.dashboard__wrapInfo}>
          <h3 className={style.dashboard__text}>BILLING ADDRESS</h3>
          <h3 className={style.dashboard__name}>{user.name}</h3>
          <h3 className={style.dashboard__text}>{user.address}</h3>
          <h3 className={style.dashboard__text_dark}>{user.email}</h3>
          <h3 className={style.dashboard__text_dark}>{user.tel}</h3>
          <Link
            to={"/account/settings"}
            className={style.dashboard__linkSettings}
          >
            Edit Address
          </Link>
        </div>
      </div>
      <div className={style.dashboard__wrapRecenOrder}>
        <div className={style.dashboard__innerTitle}>
          <h2 className={style.dashboard__title}>Recent Order History</h2>
          <Link
            to={"/account/orderHistory"}
            className={style.dashboard__linkHistory}
          >
            View All
          </Link>
        </div>
        <div className={style.dashboard__innerSubtitles}>
          <span className={style.dashboard__subtitle}>ORDER ID</span>
          <span className={style.dashboard__subtitle}>DATE</span>
          <span className={style.dashboard__subtitle}>TOTAL</span>
          <span className={style.dashboard__subtitle}>STATUS</span>
        </div>
        <div className={style.dashboard__wrapOrders}>
          {sortHistory.map((order) => {
            return (
              <div key={order.id} className={style.dashboard__innerOrder}>
                <span
                  className={style.dashboard__orderInfo}
                >{`#${order.orderId}`}</span>
                <span
                  className={style.dashboard__orderInfo}
                >{`${order.date.getDate()} ${getMonth(
                  order.date.getMonth()
                )}, ${order.date.getFullYear()}`}</span>
                <span className={style.dashboard__orderInfo}>
                  <b>{`$${order.products.reduce((acum, item) => {
                    const total = +item.price * item.amount;
                    acum += total;
                    return Math.round(acum);
                  }, 0)}`}</b>{" "}
                  {` (${order.products.reduce((acum, item) => {
                    acum += item.amount;
                    return acum;
                  }, 0)} products)`}
                </span>
                <span className={style.dashboard__orderInfo}>
                  {order.status}
                </span>
                <div className={style.dashboard__innerLink}>
                  <Link
                    to={`${"/account/orderHistory"}/${order.id}`}
                    className={style.dashboard__orderLink}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
