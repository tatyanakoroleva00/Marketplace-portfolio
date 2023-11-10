import React from "react";
import styles from "./Header.module.css";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import BurgerMenu from "../UI/BurgerMenu";

const Header = ({
  setLoggedIn,
  loggedIn,
  setLoginBtnState,
  onGetCategory,
  onGetInputText,
  likes, 
  itemsInTheBasket,
  onGetClickedBasketStatus, 
  menuHandler, menuIsOpened
}) => {
  

  const logoutHandler = () => {
    localStorage.clear();
    window.location.reload();
    setLoggedIn(false);
  };

  return (
    <>
      <div className={styles.header}>
        {menuIsOpened && (
          <BurgerMenu menuHandler={menuHandler} onGetCategory={onGetCategory} />
        )}
        <div className={styles["header__container"]}>
          <HeaderTop />
          <HeaderBottom
            logoutHandler={logoutHandler}
            menuHandler={menuHandler}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            setLoginBtnState={setLoginBtnState}
            onGetInputText={onGetInputText}
            likes={likes}
            itemsInTheBasket={itemsInTheBasket}
            onGetClickedBasketStatus={onGetClickedBasketStatus}
          />
        </div>
      </div>
    </>
  );
};
export default Header;
