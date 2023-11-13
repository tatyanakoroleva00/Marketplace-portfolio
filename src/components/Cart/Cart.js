import React from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

export default function Cart({ orders, deleteOrder, setOrders }) {

  const total = orders.map(elem => elem.price * elem.count).reduce((total, item) => {return total + item}, 0);


  const increase = (id) => {
    console.log("Increase", id);

    setOrders((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          if (item.count === item.quantity) {
            return item;
          } else {
            return { ...item, count: item.count++ };
          }
        }
        return item;
      })
    );
  };
  const decrease = (id) => {
    console.log("Decrease", id);

    setOrders((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          if (item.count === 0) {
            return item;
          } else {
            return { ...item, count: item.count--};
          }
        }
        return item;
      })
    );
  };


  return (
    <div className={styles["cart-wrapper"]}>
      <div className={styles.cart}>
        <div className={styles["cart-items"]}>
          <p className={styles["cart-title"]}>Корзина</p>
          {orders.map((elem) => (
            <CartItem
              key={`${elem.id} ${elem.description}`}
              quantity={elem.quantity}
              count={elem.count}
              item={elem}
              deleteOrder={deleteOrder}
              increase={increase}
              decrease={decrease}
            />
          ))}
          {orders.length === 0 && (
            <p className={styles.empty}>В корзине нет товаров.</p>
          )}
        </div>
        <div className={styles.total}>
          <div>Итого: {total}  </div>
          <div>Товары: {orders.length} шт. </div>
        </div>
      </div>
    </div>
  );
}
