import * as style from "./AddressSection.module.scss";

export default function AddressSection({ order, user }) {
  const subTotal = order.products.reduce((acum, item) => {
    let price = +item.price * item.amount;
    acum += price;
    return acum;
  }, 0);
  const total = () => {
    if (order.discount != 0 && order.discount != "") {
      let total = subTotal * `0.${100 - order.discount}`;
      return total.toFixed(2);
    } else {
      return subTotal.toFixed(2);
    }
  };

  return (
    <section className={style.addressSection}>
      <div className={style.addressSection__wrapAddress}>
        <div className={style.addressSection__innerAddress}>
          <h4 className={style.addressSection__title}>BILLING ADDRESS</h4>
          <div className={style.addressSection__innerName}>
            <p className={style.addressSection__userName}>{user.name}</p>
            <p className={style.addressSection__text_light}>{user.address}</p>
          </div>
          <div className={style.addressSection__innerInfo}>
            <h4 className={style.addressSection__title}>EMAIL</h4>
            <p className={style.addressSection__text}>{user.email}</p>
          </div>
          <div className={style.addressSection__innerInfo}>
            <h4 className={style.addressSection__title}>PHONE</h4>
            <p className={style.addressSection__text}>{user.tel}</p>
          </div>
        </div>
        <div className={style.addressSection__innerAddress}>
          <h4 className={style.addressSection__title}>SHIPPING ADDRES</h4>
          <div className={style.addressSection__innerName}>
            <p className={style.addressSection__userName}>{user.name}</p>
            <p className={style.addressSection__text_light}>{user.address}</p>
          </div>
          <div className={style.addressSection__innerInfo}>
            <h4 className={style.addressSection__title}>EMAIL</h4>
            <p className={style.addressSection__text}>{user.email}</p>
          </div>
          <div className={style.addressSection__innerInfo}>
            <h4 className={style.addressSection__title}>PHONE</h4>
            <p className={style.addressSection__text}>{user.tel}</p>
          </div>
        </div>
      </div>
      <div className={style.addressSection__wrapPrice}>
        <div className={style.addressSection__innerOrder}>
          <div className={style.addressSection__innerId}>
            <h4 className={style.addressSection__title}>ORDER ID:</h4>
            <p
              className={style.addressSection__text_dark}
            >{`# ${order.orderId}`}</p>
          </div>
          <div className={style.addressSection__innerPayment}>
            <h4 className={style.addressSection__title}>PAYMENT METHOD:</h4>
            <p className={style.addressSection__text_dark}>
              {order.paymentMethod}
            </p>
          </div>
        </div>
        <div className={style.addressSection__innerPrice}>
          <div className={style.addressSection__rowPrice}>
            <h4 className={style.addressSection__title}>Subtotal:</h4>
            <h4 className={style.addressSection__text}>{`$${subTotal.toFixed(
              2
            )}`}</h4>
          </div>
          <div className={style.addressSection__rowPrice}>
            <h4 className={style.addressSection__title}>Discount</h4>
            <h4 className={style.addressSection__text}>
              {order.discount == 0 || "" ? `${0}%` : `${order.discount}%`}
            </h4>
          </div>
          <div className={style.addressSection__rowPrice}>
            <h4 className={style.addressSection__title}>Shipping</h4>
            <h4 className={style.addressSection__text}>{order.shipping}</h4>
          </div>
          <div className={style.addressSection__rowPrice}>
            <h4 className={style.addressSection__title_huge}>Total</h4>
            <h4
              className={style.addressSection__text_green}
            >{`$${total()}`}</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
