import React from "react";
import styles from "./HeaderBottom.module.css";
import Burger from "../UI/Burger";
import SearchBar from "../UI/SearchBar";
import PictureElements from "./PictureElements";
export default function HeaderBottom({
  menuHandler,
  logoutHandler,
  loggedIn,
  setLoginBtnState,
  onGetInputText,
  likes,
  itemsInTheBasket,
  onGetClickedBasketStatus
}) {
  return (
    <div className={styles["header__bottom"]}>
      <div
        onClick={menuHandler}
        className={`${styles["header__nav-element"]} ${styles["nav-element"]}`}
      >
        <div className={styles["nav-element__burger"]}>
          <Burger />
        </div>
        <a className={styles["nav-element__marketplace"]} href="/">
          Market Place
        </a>
      </div>

      <SearchBar onGetInputText={onGetInputText} />
      <PictureElements
        logoutHandler={logoutHandler}
        loggedIn={loggedIn}
        setLoginBtnState={setLoginBtnState}
        likes={likes}
        itemsInTheBasket={itemsInTheBasket}
        onGetClickedBasketStatus={onGetClickedBasketStatus}
      />
    </div>
  );
}
