import React from "react";
import styles from "./PictureElements.module.css";
import { Link } from "react-router-dom";
export default function PictureElements({
  logoutHandler,
  getLoginBtnState,
  orders,
  setFavItemsBtnState,
  favItems,
}) {
  const userIsLogged = localStorage.getItem("userIsLogged");
  const numberOfItemsInTheCart = orders.length;
  const numberOfFavourites = favItems.length;

  return (
    <div
      className={`${styles["header__pic-elements"]} ${styles["pic-elements"]}`}
    >
      <div
        className={styles["pic-element__login"]}
        onClick={() => getLoginBtnState()}
      >
        {userIsLogged ? (
          <div
            className={styles["pic-element"]}
            onClick={() => logoutHandler()}
          >
            <span className="material-symbols-outlined">logout</span>
            <span className={styles["picture-name"]}>Выйти</span>
          </div>
        ) : (
          <div className={styles["pic-element"]}>
            <span className="material-symbols-outlined">person</span>
            <span className={styles["picture-name"]}>Войти</span>
          </div>
        )}
      </div>
      <div className={styles["pic-element__shopping-cart"]}>
        <Link to="/cart" className={styles.link}>
          <div className={styles["pic-element"]}>
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className={styles["picture-name"]}>Корзина</span>
            {numberOfItemsInTheCart !== 0 && (
              <input
                className={styles["items-quantity"]}
                value={numberOfItemsInTheCart}
                type="text"
                disabled
              />
            )}
          </div>
        </Link>
      </div>
      <div
        className={styles["pic-element__favourite"]}
        onClick={() =>
          setFavItemsBtnState((favItemBtnState) => !favItemBtnState)
        }
      >
        <div
          className={`${styles["pic-element"]} ${styles["favourite-element"]}`}
        >
          <span className={`material-symbols-outlined ${styles.favourite}`}>
            favorite
          </span>
          <span className={styles["picture-name"]}>Избранное</span>
          {numberOfFavourites !== 0 && (
            <span>
              <input
                className={styles["favs-quantity"]}
                type="text"
                value={numberOfFavourites}
                disabled
              />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
