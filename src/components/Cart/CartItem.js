import React from "react";
import styles from "./CartItem.module.css";
import ItemsQuantity from "./ItemsQuantity";
import { GoTrash } from "react-icons/go";
export default function CartItem({
  item,
  deleteOrder,
  increase,
  count,
  quantity,
  decrease,
  showFullItemHandler,
}) {
  return (
    <div className={styles["cart-item-wrap"]}>
      <div className={styles["left-col"]}>
        <div className={styles['image-field']}>
          <img
            className={styles["item-pic"]}
            src={item.img}
            alt={item.img}
            onClick={() => showFullItemHandler(item, true)}
          />
        </div>
        <div className={styles["item-description"]}>
          <p>{item.description}</p>
        </div>
        <div className={styles["item-quantity"]}>
          <div>{item.number}</div>
          <div>
            <div>
              <ItemsQuantity
                quantity={quantity}
                increase={increase}
                count={count}
                id={item.id}
                decrease={decrease}
              />
            </div>
          </div>
        </div>
        <div className={styles["trash-bin"]} onClick={() => deleteOrder(item)}>
          <GoTrash />
        </div>
        <div className={styles['existing-number']}>(В наличии {item.quantity} шт.)</div>
      </div>
      <div className={styles["right-col"]}>
        <div className={styles["item-price"]}>
          {item.price * item.count} &#8381;
        </div>
      </div>
    </div>
  );
}
