import * as style from "./SingleOrder.module.scss";
import { useParams } from "react-router-dom";
import { users } from "@data/users";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import AddressSection from "./AddressSection/AddressSection";
import OrderProgress from "./OrderProgress/OrderProgress";
import OrderProducts from "./OrderProducts/OrderProducts";

export default function SingleOrder() {
  const { id } = useParams();
  const user = users.find((user) => user.id == 0);
  const order = user.history.find((item) => item.id == id);
  const amountProducts = order.products.reduce((acum, item) => {
    const amount = (acum += item.amount);
    return acum;
  }, 0);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  function getMonth(month) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[month];
  }

  return (
    <main className={style.singleOrder}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Single Order</title>
      </Helmet>
      <div className={style.singleOrder__wrapTitle}>
        <div className={style.singleOrder__innerTitle}>
          <h1 className={style.singleOrder__title}>Order Details</h1>
          <span className={style.singleOrder__point}>&bull;</span>
          <span className={style.singleOrder__date}>{`${getMonth(
            order.date.getMonth()
          )} ${order.date.getDate()}, ${order.date.getFullYear()}`}</span>
          <span className={style.singleOrder__point}>&bull;</span>
          <span
            className={style.singleOrder__date}
          >{`${amountProducts} Products`}</span>
        </div>
        <button
          className={style.singleOrder__btnBack}
          type="button"
          onClick={() => goBack()}
        >
          Back to List
        </button>
      </div>
      <AddressSection order={order} user={user} />
      <OrderProgress order={order} />
      <OrderProducts order={order} />
    </main>
  );
}
