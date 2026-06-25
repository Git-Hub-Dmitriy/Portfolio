"use client";
import styles from "./ShoppingCart.module.css";
import IconCart from "@icons/bag.svg";
import storeCart from "@store/stateCart";

export default function ShoppingCart() {
  const { cart } = storeCart();

  return (
    <div className={styles.shoppingCart}>
      <div className={styles.shoppingCart__wrapper}>
        <IconCart className={styles.shoppingCart__icon} />
        <div className={styles.shoppingCart__innerCounter}>
          <h2 className={styles.shoppingCart__counter}>{cart?.length}</h2>
        </div>
      </div>
    </div>
  );
}
