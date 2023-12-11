import React from "react";
import styles from "./FavouritesPage.module.css";
import FavPageItem from "./FavPageItem";

export default function FavouritesPage({ favItems, onSaveOrderItemHandler, deleteFavItemHandler, showFullItemHandler }) {
  return (
    <div className={styles["favItems-wrapper"]}>
      <div className={styles["favItems-container"]}>
        <div className={styles["favItems-column"]}>
          <p className={styles.title}>Избранное</p>
          <div className={styles.items}>
            {favItems.map((item) => (
                <FavPageItem key={item.id} onSaveOrderItemHandler={onSaveOrderItemHandler} deleteFavItemHandler={deleteFavItemHandler} item={item} showFullItemHandler={showFullItemHandler}/>
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
