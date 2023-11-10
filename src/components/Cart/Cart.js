import React from "react";
import styles from "./Cart.module.css";
import BasketItem from "./BasketItem";
export default function Cart({ itemsInTheBasket }) {



  return (
    <div className={styles["cart-wrapper"]}>
      <div className={styles.cart}>
        <div className={styles["basket-items"]}>
          <p className={styles["cart-title"]}>Корзина</p>
          {itemsInTheBasket.map((elem) => (
            <BasketItem key={`${elem.id} ${elem.description}`} item={elem} />
          ))}
          {itemsInTheBasket.length === 0 && (
            <p className={styles.empty}>В корзине нет товаров.</p>
          )}
        </div>
        <div className={styles.total}>
          <div>Итого:</div>
            <div>Товары: {itemsInTheBasket.length} шт. </div>
        </div>
      </div>
    </div>
  );
}
