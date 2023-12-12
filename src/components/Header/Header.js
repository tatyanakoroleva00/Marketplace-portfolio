import React from "react";
import styles from "./Header.module.css";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";

const Header = ({
  loggedIn,
  getLoginBtnState,
  onGetInputText,
  likes,
  orders,
  onGetClickedCartStatus,
  burgerBtnStateHandler,
  setLoginStatus,
  logoutHandler,
  cartIsOpenedState,
  setFavItemsBtnState,
  favItemBtnState,
  favItems,
  listOpened,
  listOpenedHandler, enteredValue, enteredValueHandler
}) => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles["header__container"]}>
          <HeaderTop />
          <HeaderBottom
            logoutHandler={logoutHandler}
            burgerBtnStateHandler={burgerBtnStateHandler}
            loggedIn={loggedIn}
            setLoginStatus={setLoginStatus}
            getLoginBtnState={getLoginBtnState}
            onGetInputText={onGetInputText}
            likes={likes}
            orders={orders}
            onGetClickedCartStatus={onGetClickedCartStatus}
            cartIsOpenedState={cartIsOpenedState}
            setFavItemsBtnState={setFavItemsBtnState}
            favItemBtnState={favItemBtnState}
            favItems={favItems}
            listOpenedHandler={listOpenedHandler}
            listOpened={listOpened}
            enteredValue={enteredValue}
            enteredValueHandler={enteredValueHandler}
          />
        </div>
      </div>
    </>
  );
};
export default Header;
