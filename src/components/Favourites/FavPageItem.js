import React from "react";
import styles from "./FavPageItem.module.css";
import { BsCart3 } from "react-icons/bs";
import { GoTrash } from "react-icons/go";
export default function FavPageItem({
  item,
  onSaveOrderItemHandler,
  deleteFavItemHandler
}) {
  return (
    <div className={styles.item}>
      <img className={styles["item-image"]} src={item.img} alt={item.img} />
      <div className={styles["item-content"]}>
        <p className={styles.price}>{item.price} &#8381;</p>
        <p className={styles["item-description"]}>{item.description}</p>
        <div className={styles['picture-elements']}>
          <span
            onClick={() => onSaveOrderItemHandler(item)}
            className={styles["add-to-shopping-cart-btn"]}
          >
            <BsCart3 />
          </span>
          <span
            onClick={() => deleteFavItemHandler(item)}
            className={styles["trash-bin"]}
          >
            <GoTrash />
          </span>
        </div>
      </div>
    </div>
  );
}
