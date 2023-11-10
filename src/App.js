import React, { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Login from "./components/Registration/Login";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginBtnState, setLoginBtnState] = useState(false);
  const [category, setCategory] = useState(["furniture"]);
  const [likes, setLikes] = useState(0);
  const [itemsInTheBasket, setItemsInTheBasket] = useState([]);
  const [openedBasket, setOpenedBasket] = useState(false);
  const [menuIsOpened, setMenuIsOpened] = useState(false);

  const menuHandler = () => {
    if (openedBasket === true) {
      setOpenedBasket(false);
    }
    setMenuIsOpened(!menuIsOpened);
  };

  const openTheBasketHandler = (data) => {
    setOpenedBasket(!openedBasket);
  }

  const itemsInTheBasketHandler = (data) => {
    setItemsInTheBasket(prevState => {
      return [...prevState, data];
    });
    
  };

  const likesHandler = (data) => {
    setLikes((prevState) => {
      return prevState + data;
    });
  };

  const categoryHandler = (value) => {
    setCategory(value);
  };

  const getLoginBtnStateHandler = (loginData) => {
    setLoginBtnState(loginData);
  };

  const getLoginStatusHandler = (loginStatus) => {
    setLoggedIn(loginStatus);
  };

  const inputTextHandler = (input) => {
    setCategory(input);
  };

  const getEmail = localStorage.getItem("userEmail");
  const getPassword = localStorage.getItem("userPassword");

  return (
    <div>
      <Header
        email={getEmail}
        password={getPassword}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        setLoginBtnState={setLoginBtnState}
        onGetCategory={categoryHandler}
        onGetInputText={inputTextHandler}
        likes={likes}
        itemsInTheBasket={itemsInTheBasket}
        onGetClickedBasketStatus = {openTheBasketHandler}
        menuIsOpened={menuIsOpened}
        menuHandler={menuHandler}
      />

      {loginBtnState && (
        <Login
          getloginStatus={getLoginStatusHandler}
          getLoginBtnState={getLoginBtnStateHandler}
        />
      )}

      {(!loginBtnState || (getEmail && getPassword && loggedIn)) && (
        <Main
          category={category}
          loggedIn={loggedIn}
          onSaveLikesNumber={likesHandler}
          onSaveItemsChosen={itemsInTheBasketHandler}
          openedBasket={openedBasket}
          itemsInTheBasket={itemsInTheBasket}
          menuIsOpened={menuIsOpened}
        />
      )}
      <Footer />
    </div>
  );
}
