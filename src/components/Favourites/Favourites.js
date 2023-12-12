import React from "react";
import styles from "./Favourites.module.css";
import FavouriteItem from "./FavouriteItem";
import { Link } from "react-router-dom";

export default function Favourites({ favItems, deleteFavItemHandler, onSaveOrderItemHandler }) {
  return (
    <div className={styles["favourite-items-modal-window"]}>
      <div className={styles["favourite-items-container"]}>
        {favItems.length > 0 && (

          <div>
            <div className="marg">
        
            <p className={styles.title}>Товары в избранном: </p>
            <p className={styles['fav-page-link']}><Link to="/favourites">
            Посмотреть все товары</Link></p>
          
          </div>
            {favItems.map((elem, index) => (
              <FavouriteItem
                key={elem.id}
                index={index}
                deleteFavItemHandler={deleteFavItemHandler}
                favItem={elem}
                onSaveOrderItemHandler={onSaveOrderItemHandler}
              />
            ))}
          </div>
        )}
        {favItems.length > 3 && (
          <p className={styles['fav-page-link']}><Link to="/favourites">
            Посмотреть больше
          </Link></p>
        )}
        {favItems.length === 0 && <p>Нет товаров в Избранном</p>}
      </div>
    </div>
  );
}
