import React from "react";
import styles from "./Favourites.module.css";
import FavouriteItem from "./FavouriteItem";


export default function Favourites({ favItems, deleteFavItemHandler, setShowFavPage, onSaveOrderItemHandler }) {
  console.log(favItems);
  return (
    <div className={styles["favourite-items-modal-window"]}>
      <div className={styles["favourite-items-container"]}>
        {favItems.length > 0 && (
          <div>
            <p className={styles.title}>Товары в избранном: </p>
            <p onClick={(event)=>setShowFavPage(event, true)} className={styles.link} >
            Посмотреть все товары
          </p>
            {favItems.map((elem, index) => (
              <FavouriteItem
                key={favItems.id}
                index={index}
                deleteFavItemHandler={deleteFavItemHandler}
                favItem={elem}
                onSaveOrderItemHandler={onSaveOrderItemHandler}
              />
            ))}
          </div>
        )}
        {favItems.length > 3 && (
          <p onClick={(event)=>setShowFavPage(event, true)} className={styles.link} >
            Посмотреть больше
          </p>
        )}
        {favItems.length === 0 && <p>Нет товаров в Избранном</p>}
      </div>
    </div>
  );
}
