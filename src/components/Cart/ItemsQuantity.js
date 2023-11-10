import React, { useState } from "react";
import styles from "./ItemsQuantity.module.css";

export default function ItemsQuantity({ quantity, id, price, getFinalItemQuantity }) {
  const [count, setCount] = useState(1);
  const subtractionHandler = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  const additionHandler = () => {
    if (count === quantity) {
      setCount(quantity);
    } else {
      setCount(count + 1);
    }
  };

  getFinalItemQuantity(count, id);
    
  return (
      <div>
        <span
          className={`material-symbols-outlined ${styles["subtr-btn"]}`}
          onClick={subtractionHandler}
        >
          do_not_disturb_on
        </span>
        <input
          className={styles.quantity}
          type="number"
          value={count}
          max={quantity}
          min={1}
        />
        <span
          className={`material-symbols-outlined ${styles["add-btn"]}`}
          onClick={additionHandler}
        >
          add_circle
        </span>
        </div>
  );
}
