import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Registration/Login";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import "./App.css";
import SliderCarousel from "./components/SliderCarousel/SliderCarousel";
import Items from "./components/Main/Items/Items";
import FullItem from "./components/Main/Items/FullItem";
import Favourites from "./components/Favourites/Favourites";
import FavouritesPage from "./components/Favourites/FavouritesPage";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import AboutUs from "./components/Footer/links/AboutUs";
import Contacts from "./components/Footer/links/Contacts";
import Delivery from "./components/Footer/links/Delivery";
import HowToBecomeOurPartner from "./components/Footer/links/HowToBecomeOurPartner";
import HowToOrder from "./components/Footer/links/HowToOrder";
import HowToReturnTheGood from "./components/Footer/links/HowToReturnTheGood";
import OurPartners from "./components/Footer/links/OurPartners";
import Payment from "./components/Footer/links/Payment";
import OrderedGoods from "./components/OrderedGoods/OrderedGoods";

const ordersFromLocalStorage = JSON.parse(
  localStorage.getItem("orders") || "[]"
);
const favouritesFromLocalStorage = JSON.parse(
  localStorage.getItem("favourites") || "[]"
);
const orderedGoodsFromLocalStorage = JSON.parse(
  localStorage.getItem("orderedGoods") || "[]"
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
  const [itemChosen, setItemChosen] = useState("");
  const [submitBtn, setSubmitBtn] = useState(false);
  const [burgerMenuBtnIsClicked, setBurgerMenuBtnIsClicked] = useState(true);
  const [filterByPriceBtn, setFilterByPriceBtn] = useState(false);
  const [orderedGoods, setOrderedGoods] = useState(orderedGoodsFromLocalStorage);
  /**************************************************FUNCTIONS *********************************/
  /*Авто-изменение данных в хранилище при изменении кол-ва заказов или фаворитов */
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.setItem("favourites", JSON.stringify(favItems));
    localStorage.setItem("orderedGoods", JSON.stringify(orderedGoods));
  }, [orders, favItems, orderedGoods]);
  //БУРГЕР. Открыть бургер-меню
  const burgerBtnStateHandler = () => {
    setBurgerBtnState((burgerBtn) => !burgerBtn);
    burgerBtnState ? setBurgerMenuIsOpened(true) : setBurgerMenuIsOpened(false);
  };
  //CART-PAGE. Добавление заказов в корзину. Повторное добавление невозможно.
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
  //CART. Удаление заказа из корзины
  const deleteOrderHandler = (order) => {
    setOrders(orders.filter((el) => el.id !== order.id));
  };
  //CART. Передача данных по заказам.
  const orderedGoodsHandler = (id, goods, numberOfOrders, total, date) => {


    if (orderedGoods === null) {
      setOrderedGoods([{ id: id, goods: goods, numberOfOrders: numberOfOrders, total: total, date: date}])
    } else {
      setOrderedGoods((prev) => {
          return [
            { id: id, goods: goods, numberOfOrders: numberOfOrders, total: total, date: date}, 
            ...prev,
          ];
    })
   
    // console.log(orderedGoods);
  };
}
  //FAVs. Добавление товаров в фавориты.
  const onSaveFavItemsHandler = (value, item) => {
    let isInArray = false;
    if (favItems.length > 0) {
      favItems.forEach((el) => {
        if (el.id === item.id) {
          isInArray = true;
        }
      });
    }
    if (!isInArray) {
      setFavItems((prev) => {
        return [...prev, item];
      });
    }

    if (!value) {
      setFavItems(favItems.filter((el) => el.id !== item.id));
    }
  };
  //FAVs. Удаление товара из фаворитов
  const deleteFavItemHandler = (favItem) => {
    setFavItems(favItems.filter((el) => el.id !== favItem.id));
  };
  //HEADER. FAVs. Подсчет количества фаворитов в хэдере
  const onSaveLikesNumberHandler = (data) => {
    setLikes((prevState) => {
      return prevState + data;
    });
  };
  //Выбирается категория товара
  const categoryHandler = (categoryItem, rusCategory) => {
    setCategory(categoryItem);
    setRusCategory(rusCategory);
  };
  //HEADER. LOGIN. Смена статуса кнопки "вход-выход" в систему
  const loginBtnStateHandler = () => {
    setLoginBtnState((loginBtnState) => !loginBtnState);
  };
  //HEADER. LOGIN. Статус: пользователь в системе или нет
  const loginStatusHandler = (loginStatus) => {
    setLoggedIn(loginStatus);
  };
  //HEADER. SEARCH-BAR. Строка поиска. Ввод и вывод текста.
  const inputTextHandler = (input, rusCategory) => {
    setCategory(input);
    setRusCategory(rusCategory);
  };
  //HEADER. LOGIN. Выход из системы по нажатию на кнопку "выйти из системы"
  const logoutHandler = () => {
    setLoginBtnState((loginBtnState) => !loginBtnState);
    localStorage.clear();
    window.location.reload();
    setLoggedIn(false);
  };
  //По нажатию на товар - модальное окно. Показывается полное описание товара.
  const showFullItemHandler = (item, value) => {
    setShowFullItem(value);
    setItemChosen(item);
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
        setFavItemsBtnState={setFavItemsBtnState}
        favItemsBtnState={favItemsBtnState}
        favItems={favItems}
      />
      <div className="main">
        <SliderCarousel />
        <div className="main-container">
          {/* Переходы между страницами */}
          <Routes>
            {/* Main */}
            <Route
              path="/"
              element={
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
              }
            />
            {/* Basket */}
            <Route
              path="/cart"
              element={
                <div>
                  <Cart
                    orders={orders}
                    deleteOrder={deleteOrderHandler}
                    setOrders={setOrders}
                    setSubmitBtn={setSubmitBtn}
                    submitBtn={submitBtn}
                    saveOrderedGoods={orderedGoodsHandler}
                    orderedGoods={orderedGoods}
                    showFullItemHandler={showFullItemHandler}
                  />
                </div>
              }
            />
            {/* Favourites */}
            <Route
              path="/favourites"
              element={
                <FavouritesPage
                  deleteFavItemHandler={deleteFavItemHandler}
                  onSaveOrderItemHandler={onSaveOrderItemHandler}
                  favItems={favItems}
                  showFullItemHandler={showFullItemHandler}
                />
              }
            />
            <Route path="/orders" element={<OrderedGoods orderedGoods={orderedGoods} />}
            />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-partners" element={<OurPartners />} />
            <Route
              path="/become-our-partner"
              element={<HowToBecomeOurPartner />}
            />
            <Route path="/to-order" element={<HowToOrder />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/return-the-good" element={<HowToReturnTheGood />} />
          </Routes>
        </div>
      </div>

      {/* Кнопки */}
      {favItemsBtnState && (
        <Favourites
          onSaveOrderItemHandler={onSaveOrderItemHandler}
          favItems={favItems}
          deleteFavItemHandler={deleteFavItemHandler}
        />
      )}

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

      <Footer />
    </div>
  );
}
