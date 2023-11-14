import React from "react";
import styles from "./FavouritesPage.module.css";
import FavPageItem from "./FavPageItem";

export default function FavouritesPage({ favItems, onSaveOrderItemHandler, deleteFavItemHandler }) {
  console.log(favItems);
  return (
    <div className={styles["favItems-wrapper"]}>
      <div className={styles["favItems-container"]}>
        <div className={styles["favItems-column"]}>
          <p className={styles.title}>Избранное</p>
          <div className={styles.items}>
            {favItems.map((item) => (
              <div className={styles["fav-item"]}>
                <FavPageItem onSaveOrderItemHandler={onSaveOrderItemHandler} deleteFavItemHandler={deleteFavItemHandler} item={item} />
              </div>
            ))}
          </div>
          <div>
            {favItems.length === 0 && (
            <p className={styles.empty}>В избранном нет товаров.</p>
          )}
      </div>
        </div>
      </div>
    </div>
  );
}
