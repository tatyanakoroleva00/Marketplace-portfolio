import React from "react";
import styles from "./ItemsQuantity.module.css";

export default function ItemsQuantity({ quantity, increase,  id, count, decrease}) {

  return (
      <div>
        <span
          className={`material-symbols-outlined ${styles["subtr-btn"]}`} onClick={() => decrease(id)}
        >
          do_not_disturb_on
        </span>
        <input
          className={styles.quantity}
          type="number"
          value={count}
          max={quantity}
          min={0}
        />
        <span
          className={`material-symbols-outlined ${styles["add-btn"]}`}
          onClick={()=>increase(id)}
        >
          add_circle
        </span>
        </div>
  );
}
