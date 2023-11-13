import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Registration/Login";
import Cart from "./components/Cart/Cart";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import "./App.css";
import SliderCarousel from "./components/SliderCarousel/SliderCarousel";
import Items from "./components/Main/Items/Items";
import FullItem from "./components/Main/Items/FullItem";

const ordersFromLocalStorage = JSON.parse(localStorage.getItem('orders') || "[]")

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginBtnState, setLoginBtnState] = useState(false);
  const [showFullItem, setShowFullItem] = useState(false);
  const [burgerBtnState, setBurgerBtnState] = useState(false);
  const [burgerMenuIsOpened, setBurgerMenuIsOpened] = useState(false);
  const [category, setCategory] = useState(["furniture"]);
  const [rusCategory, setRusCategory] = useState("Мебель");
  const [likes, setLikes] = useState(0);
  const [orders, setOrders] = useState(ordersFromLocalStorage);
  const [cartIsOpened, setCartIsOpened] = useState();
  const [showHomePage, setShowHomePage] = useState(true);
  const [itemChosen, setItemChosen] = useState('');

  /**************************************************FUNCTIONS *********************************/

  useEffect(() => {localStorage.setItem('orders', JSON.stringify(orders))}, [orders]);
  const burgerBtnStateHandler = () => {
    setBurgerBtnState(burgerBtn => !burgerBtn);
    burgerBtnState ? setBurgerMenuIsOpened(true) : setBurgerMenuIsOpened(false);
  };

  /*Товары в корзине - кладутся, фильтр одинаковых. Если уже есть такой товар, он не добавляется в корзину. */
  const onSaveOrderItemHandler = (item) => {
    let isInArray = false;
    if (orders.length > 0) {
      orders.forEach((el) => {
        if (el.id === item.id) {
          console.log("oups");
          isInArray = true;
        }
      });
    }
    if (!isInArray) {
      setOrders((prevState) => {
        return [...prevState, 
          {...item, totalPrice: item.price} ];
      });
    }
  };
  console.log(orders);

  /*Удалить заказ из корзины */
  const deleteOrderHandler = (order) => {
    setOrders(orders.filter((el) => el.id !== order.id));
  };
  /*Кол-во фаворитов*/
  const onSaveLikesNumberHandler = (data) => {
    setLikes((prevState) => {
      return prevState + data;
    });
  };
  /*Выбранная категория товара*/
  const categoryHandler = (categoryItem, rusCategory) => {
    setCategory(categoryItem);
    setRusCategory(rusCategory);
  };

  /*Статус кнопки входа / выхода в систему */
  const loginBtnStateHandler = () => {
    setLoginBtnState((loginBtnState) => !loginBtnState);
  };

  //Статус: пользователь в системе или нет
  const loginStatusHandler = (loginStatus) => {
    setLoggedIn(loginStatus);
  };

  const inputTextHandler = (input) => {
    setCategory(input);
  };

  //Выход из системы
  const logoutHandler = () => {
    setLoginBtnState((loginBtnState) => !loginBtnState);
    localStorage.clear();
    window.location.reload();
    setLoggedIn(false);
  };

  const showFullItemHandler = (item, value) => {
    setShowFullItem(value);
    setItemChosen(item);
    console.log(item);
  };

  const openCartHandler = () => {
    setCartIsOpened((cartIsOpened) => !cartIsOpened);
    setShowHomePage(false);
  };

  const showHomePageHandler = (event, value) => {
    event.preventDefault();
    setShowHomePage(value);
    setCartIsOpened(false);
  };
  return (
    <div>
      <Header
        loggedIn={loggedIn}
        setLoginStatus={loginStatusHandler}
        getLoginBtnState={loginBtnStateHandler}
        onGetCategory={categoryHandler}
        onGetInputText={inputTextHandler}
        logoutHandler={logoutHandler}
        likes={likes}
        orders={orders}
        burgerBtnStateHandler={burgerBtnStateHandler}
        cartIsOpenedState={openCartHandler}
        showHomePageHandler={showHomePageHandler}
      />
      {cartIsOpened &&
        <Cart orders={orders} deleteOrder={deleteOrderHandler} setOrders={setOrders} />
      } 
      {showHomePage && (
        <div>
          <SliderCarousel />
          <Items
            category={category}
            rusCategory={rusCategory}
            onSaveLikesNumber={onSaveLikesNumberHandler}
            onSaveOrderItem={onSaveOrderItemHandler}
            showFullItemHandler={showFullItemHandler}
            showFullItem={showFullItem}
          />
          {burgerBtnState && <BurgerMenu
              onGetCategory={categoryHandler}
              burgerBtnStateHandler={burgerBtnStateHandler}
              burgerMenuIsOpened={burgerMenuIsOpened}
            /> }
            
            {showFullItem && <FullItem itemChosen={itemChosen} showFullItemHandler={showFullItemHandler}/>}

          {!loggedIn && loginBtnState && (
            <Login
              getLoginStatus={loginStatusHandler}
              getLoginBtnState={loginBtnStateHandler}
            />
          )}
        </div>
      )}
      <Footer />
    </div>
  );
}
