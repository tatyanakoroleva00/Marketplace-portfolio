import React from "react";
import styles from "./HeaderBottom.module.css";
import Burger from "./Burger";
import SearchBar from "./SearchBar";
import PictureElements from "./PictureElements";
export default function HeaderBottom({
  burgerBtnStateHandler,
  logoutHandler,
  getLoginBtnState,
  onGetInputText,
  likes,
  orders,
  onGetClickedCartStatus,
  loggedIn, setLoginStatus, cartIsOpenedState, showHomePageHandler, setFavItemsBtnState, favItemBtnState, favItems}) {
  return (
    <div className={styles["header__bottom"]}>
      <div
        className={`${styles["header__nav-element"]} ${styles["nav-element"]}`}
      >
        <div className={styles["nav-element__burger"]}>
          <Burger burgerBtnStateHandler={burgerBtnStateHandler} />
        </div>
        <a className={styles["nav-element__marketplace"]} onClick={event => showHomePageHandler(event, true)}  href="/">
          Market Place
        </a>
      </div>

      <SearchBar onGetInputText={onGetInputText} />
      <PictureElements
        logoutHandler={logoutHandler}
        setLoginStatus={setLoginStatus}
        getLoginBtnState={getLoginBtnState}
        likes={likes}
        orders={orders}
        onGetClickedCartStatus={onGetClickedCartStatus}
        loggedIn={loggedIn}
        cartIsOpenedState={cartIsOpenedState}
        setFavItemsBtnState={setFavItemsBtnState}
        favItemBtnState={favItemBtnState}
        favItems={favItems}
        onGetInputText={onGetInputText}
      />
    </div>
  );
}
