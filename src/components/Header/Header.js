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
  setLoginStatus, logoutHandler, cartIsOpenedState, showHomePageHandler, setFavItemsBtnState, favItemBtnState, favItems
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
            showHomePageHandler={showHomePageHandler}
            setFavItemsBtnState={setFavItemsBtnState}
            favItemBtnState={favItemBtnState}
            favItems={favItems}
          />
        </div>
      </div>
    </>
  );
};
export default Header;
