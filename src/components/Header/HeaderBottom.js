import React from "react";
import styles from "./HeaderBottom.module.css";
import Burger from "./Burger";
import SearchBar from "./SearchBar";
import PictureElements from "./PictureElements";
import { Link } from "react-router-dom";
export default function HeaderBottom({
  burgerBtnStateHandler,
  logoutHandler,
  getLoginBtnState,
  onGetInputText,
  likes,
  orders,
  onGetClickedCartStatus,
  loggedIn, setLoginStatus, cartIsOpenedState, setFavItemsBtnState, favItemBtnState, favItems}) {
  return (
    <div className={styles["header__bottom"]}>
      <div
        className={`${styles["header__nav-element"]} ${styles["nav-element"]}`}
      >
        <div className={styles["nav-element__burger"]}>
          <Burger burgerBtnStateHandler={burgerBtnStateHandler} />
        </div>
        <Link to="/home" className={styles["nav-element__marketplace"]} >Market Place</Link>
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
