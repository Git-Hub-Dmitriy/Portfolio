import * as style from "./OrderHistory.module.scss";
import { useState, useEffect } from "react";
import { users } from "@data/users";
import Pagination from "@components/Pagination/Pagination";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function OrderHistory() {
  const [orderPerPage, setOrderPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const user = users.find((user) => user.id == 0);
  const historySort = user.history.sort((a, b) => b.date - a.date);

  const lastPage = currentPage * orderPerPage;
  const firstPage = lastPage - orderPerPage;
  const amountOrders = historySort.slice(firstPage, lastPage);

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={style.orderHistory}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Order History</title>
      </Helmet>
      <div className={style.orderHistory__wrapper}>
        <h2 className={style.orderHistory__title}>Order History</h2>
        <div className={style.orderHistory__wrapGroups}>
          <span className={style.orderHistory__subtitle}>ORDER ID</span>
          <span className={style.orderHistory__subtitle}>DATE</span>
          <span className={style.orderHistory__subtitle}>TOTAL</span>
          <span className={style.orderHistory__subtitle}>STATUS</span>
        </div>
        <div className={style.orderHistory__wrapOrders}>
          {amountOrders.map((order) => {
            return (
              <div key={order.id} className={style.orderHistory__innerOrder}>
                <span
                  className={style.orderHistory__text}
                >{`#${order.orderId}`}</span>
                <span
                  className={style.orderHistory__text}
                >{`${order.date.getDate()} ${getMonth(
                  order.date.getMonth()
                )}, ${order.date.getFullYear()}`}</span>
                <span className={style.orderHistory__text}>
                  <b>{`
                  $${order.products.reduce((acum, item) => {
                    const total = +item.price * +item.amount;
                    acum += total;
                    Math.round(acum);
                    return acum;
                  }, 0)}`}</b>

                  {` ( ${order.products.reduce((acum, item) => {
                    return (acum += +item.amount);
                  }, 0)} Products )
                `}
                </span>
                <span className={style.orderHistory__text}>{order.status}</span>
                <div className={style.orderHistory__innerLink}>
                  <Link
                    to={`${order.id}`}
                    className={style.orderHistory__linkDetail}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Pagination
        page={currentPage}
        productPerPage={orderPerPage}
        totalProducts={historySort.length}
        handlePage={setCurrentPage}
      />
    </main>
  );
}
