import React from "react";
import styles from "./PictureElements.module.css";
export default function PictureElements({
  logoutHandler,
  getLoginBtnState,
  likes,
  orders, cartIsOpenedState
}) {
  const userIsLogged = localStorage.getItem("userIsLogged");
  const numberOfItemsInTheCart = orders.length;

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
      <div
        onClick={()=>cartIsOpenedState()}
        className={styles["pic-element__shopping-cart"]}
      >
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
      </div>
      <div className={styles["pic-element__favourite"]}>
        <div
          className={`${styles["pic-element"]} ${styles["favourite-element"]}`}
        >
          <span className={`material-symbols-outlined ${styles.favourite}`}>
            favorite
          </span>
          <span className={styles["picture-name"]}>Избранное</span>
          {likes !== 0 && (
            <span>
              <input
                className={styles["favs-quantity"]}
                type="text"
                value={likes}
                disabled
              />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
