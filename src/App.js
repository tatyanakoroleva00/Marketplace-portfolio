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
import Favourites from "./components/Favourites/Favourites";
import FavouritesPage from "./components/Favourites/FavouritesPage";

const ordersFromLocalStorage = JSON.parse(
  localStorage.getItem("orders") || "[]"
);
const favouritesFromLocalStorage = JSON.parse(
  localStorage.getItem("favourites") || "[]"
);

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginBtnState, setLoginBtnState] = useState(false);
  const [showFullItem, setShowFullItem] = useState(false);
  const [burgerBtnState, setBurgerBtnState] = useState(false);
  const [burgerMenuIsOpened, setBurgerMenuIsOpened] = useState(false);
  const [category, setCategory] = useState(["furniture"]);
  const [rusCategory, setRusCategory] = useState("Мебель");
  const [likes, setLikes] = useState(0);
  const [favItems, setFavItems] = useState(favouritesFromLocalStorage);
  const [favItemsBtnState, setFavItemsBtnState] = useState(false);
  const [orders, setOrders] = useState(ordersFromLocalStorage);
  const [cartIsOpened, setCartIsOpened] = useState();
  const [showHomePage, setShowHomePage] = useState(true);
  const [itemChosen, setItemChosen] = useState("");
  const [submitBtn, setSubmitBtn] = useState(false);
  const [showFavPage, setShowFavPage] = useState(false);
  const [burgerMenuBtnIsClicked, setBurgerMenuBtnIsClicked] = useState(true);
  const [filterByPriceBtn, setFilterByPriceBtn] = useState(false);
  /**************************************************FUNCTIONS *********************************/

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.setItem("favourites", JSON.stringify(favItems));
  }, [orders, favItems]);

  const burgerBtnStateHandler = () => {
    setBurgerBtnState((burgerBtn) => !burgerBtn);
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
      setSubmitBtn(false);
    }
    if (!isInArray) {
      setOrders((prevState) => {
        return [...prevState, { ...item, totalPrice: item.price }];
      });
    }
  };
  // console.log(orders);

  /*Удалить заказ из корзины */
  const deleteOrderHandler = (order) => {
    setOrders(orders.filter((el) => el.id !== order.id));
  };
  const deleteFavItemHandler = (favItem) => {
    setFavItems(favItems.filter((el) => el.id !== favItem.id));
  };
  /*Кол-во фаворитов*/
  const onSaveLikesNumberHandler = (data) => {
    setLikes((prevState) => {
      return prevState + data;
    });
  };
  const onSaveFavItemsHandler = (value, item) => {
    let isInArray = false;
    if (favItems.length > 0) {
      favItems.forEach((el) => {
        if (el.id === item.id) {
          console.log("oups");
          isInArray = true;
        }
      });
    }
    if (!isInArray) {
      setFavItems((prev) => {
        return [...prev, item];
      });
    }
    console.log(favItems);

    if (!value) {
      setFavItems(favItems.filter((el) => el.id !== item.id));
    }
  };
  /*Выбранная категория товара*/
  const categoryHandler = (categoryItem, rusCategory) => {
    setCategory(categoryItem);
    setRusCategory(rusCategory);
    // setBurgerMenuBtnIsClicked(true);
    // setFilterByPriceBtn(false);
  };

  /*Статус кнопки входа / выхода в систему */
  const loginBtnStateHandler = () => {
    setLoginBtnState((loginBtnState) => !loginBtnState);
  };

  //Статус: пользователь в системе или нет
  const loginStatusHandler = (loginStatus) => {
    setLoggedIn(loginStatus);
  };

  const inputTextHandler = (input, rusCategory) => {
    setCategory(input);
    setRusCategory(rusCategory);
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
    setShowFavPage(false);
    // setFavItemsBtnState(false);
  };

  const showHomePageHandler = (event, value) => {
    event.preventDefault();
    setShowHomePage(value);
    setCartIsOpened(false);
    setShowFavPage(false);
    setBurgerMenuBtnIsClicked(true);
  };

  const showFavPageHandler = (event, value) => {
    event.preventDefault();
    setShowFavPage(value);
    setCartIsOpened(false);
    setShowHomePage(false);
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
        setFavItemsBtnState={setFavItemsBtnState}
        favItemsBtnState={favItemsBtnState}
        favItems={favItems}
      />

      {showFavPage && (
        <FavouritesPage
          deleteFavItemHandler={deleteFavItemHandler}
          onSaveOrderItemHandler={onSaveOrderItemHandler}
          favItems={favItems}
        />
      )}
      {favItemsBtnState && (
        <Favourites
          onSaveOrderItemHandler={onSaveOrderItemHandler}
          setShowFavPage={showFavPageHandler}
          favItems={favItems}
          deleteFavItemHandler={deleteFavItemHandler}
        />
      )}
      {cartIsOpened && (
        <Cart
          orders={orders}
          deleteOrder={deleteOrderHandler}
          setOrders={setOrders}
          setSubmitBtn={setSubmitBtn}
          submitBtn={submitBtn}
        />
      )}
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
            onSaveFavItems={onSaveFavItemsHandler}
            burgerMenuBtnIsClicked={burgerMenuBtnIsClicked}
            filterByPriceBtn={filterByPriceBtn}
            setFilterByPriceBtn={setFilterByPriceBtn}
            setBurgerMenuBtnIsClicked={setBurgerMenuBtnIsClicked}
          />
          {burgerBtnState && (
            <BurgerMenu
              onGetCategory={categoryHandler}
              burgerBtnStateHandler={burgerBtnStateHandler}
              burgerMenuIsOpened={burgerMenuIsOpened}
            />
          )}

          {showFullItem && (
            <FullItem
              itemChosen={itemChosen}
              showFullItemHandler={showFullItemHandler}
            />
          )}

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
