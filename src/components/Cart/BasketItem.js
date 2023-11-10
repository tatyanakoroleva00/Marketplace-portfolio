import React, { useState } from "react";
import styles from "./BasketItem.module.css";
import ItemsQuantity from "./ItemsQuantity";
export default function BasketItem({ item, getPrice }) {
  const [sum, setSum] = useState(item.price);
  const itemSum = item.price * sum;

  const getFinalItemQuantityHandler = (quantity) => {
    setSum(quantity);
    };


  return (
    <div className={styles["basket-item-wrap"]}>
      <div className={styles["left-col"]}>
        <div>
          <img className={styles["item-pic"]} src={item.pic} alt={item.pic} />
        </div>
        <div className={styles["item-description"]}>
          <p>{item.description}</p>
        </div>
        <div className={styles["item-quantity"]}>{item.number}</div>
        <div>
          <ItemsQuantity
            quantity={item.quantity}
            description={item.description}
            price={item.price}
            id={item.id}
            getFinalItemQuantity={getFinalItemQuantityHandler}
          />
        </div>
      </div>
      <div className={styles["right-col"]}>
        <div className={styles["item-price"]}>{itemSum}</div>
      </div>
    </div>
  );
}
