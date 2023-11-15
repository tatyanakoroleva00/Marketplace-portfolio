import React from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

export default function Cart({
  orders,
  deleteOrder,
  setOrders,
  setSubmitBtn,
  submitBtn
}) {

  const increase = (id) => {
    console.log("Increase", id);

    setOrders((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          if (item.count === item.quantity) {
            return item;
          } else {
            return { ...item, count: item.count + 1 };
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
            return { ...item, count: item.count - 1 };
          }
        }
        return item;
      })
    );
  };

  const total = orders
  .map((elem) => elem.price * elem.count)
  .reduce((total, item) => {
    return total + item;
  }, 0);
const numberOfOrders = orders
  .map((elem) => elem.count)
  .reduce((total, item) => {
    return total + item;
  }, 0);

const submitBtnHandler = (event) => {
  event.preventDefault();
  setSubmitBtn(true);
  setOrders([]);
};


  return (
    <div className={styles["cart-wrapper"]}>
      <div className={styles.cart}>
        <div className={styles["cart-items"]}>
          <p className={styles["cart-title"]}>Корзина</p>

          {!submitBtn && (
            <div>
              <div>
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
              </div>
              <div>
                {orders.length === 0 && (
                  <p className={styles.empty}>В корзине нет товаров.</p>
                )}
              </div>
            </div>
          )}
          {submitBtn && (
            <p className={styles["order-made-notification"]}>
              Спасибо за заказ!
            </p>
          )}
        </div>
        <div className={styles.total}>
          <div>Итого: {total} &#8381; </div>
          <div>Товары: {numberOfOrders} шт. </div>
          <button
            className={`${styles["order-btn"]} ${submitBtn && styles.ordered}`}
            onClick={(event) => submitBtnHandler(event)}
          >
            {!submitBtn ? "Заказать" : "Заказ оформлен"}
          </button>
        </div>
      </div>
    </div>
  );
}
