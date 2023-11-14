import React, { useState } from "react";
import Item from "./Item";
import styles from "./Items.module.css";
import { listedItems } from "../../../assets/Data/listedItems";

export default function Items({
  category,
  rusCategory,
  onSaveLikesNumber,
  onSaveOrderItem,
  showFullItemHandler,
  showFullItem,
  onSaveFavItems,  burgerMenuBtnIsClicked,
  filterByPriceBtn, setBurgerMenuBtnIsClicked,
  setFilterByPriceBtn
}) {
  let filteredItems = listedItems[`${category}`];

  const [filteredByPrice, setFilteredByPrice] = useState(filteredItems);

  let values = [
    "Все цены",
    "0 - 100",
    "101 - 500",
    "501 - 1000",
    "1001 - 2000",
    "2001 - 3000",
    "3001 - 4000",
    "4001 - 5000",
    "5001 - 6000",
    "6001 - ...",
  ];

  const priceChangeHandler = (event) => {
    setFilterByPriceBtn(true);
    setBurgerMenuBtnIsClicked(false);

    let value = event.target.value;

    if (value === values[0]) {
      let res = filteredItems;
      setFilteredByPrice(res);
    }

    if (value === values[1]) {
      let res = filteredItems.filter((el) => el.price > 0 && el.price < 101);
      setFilteredByPrice(res);
    }
    if (value === values[2]) {
      let res = filteredItems.filter((el) => el.price > 100 && el.price < 501);
      setFilteredByPrice(res);
    }
    if (value === values[3]) {
      let res = filteredItems.filter((el) => el.price > 500 && el.price < 1001);
      setFilteredByPrice(res);
    }
    if (value === values[4]) {
      let res = filteredItems.filter(
        (el) => el.price > 1000 && el.price < 2001
      );
      setFilteredByPrice(res);
    }
    if (value === values[5]) {
      let res = filteredItems.filter((el) => el.price > 2000 && el.price < 3001);
      setFilteredByPrice(res);
    }
    if (value === values[6]) {
      let res = filteredItems.filter((el) => el.price > 3000 && el.price < 4001);
      setFilteredByPrice(res);
    }
    if (value === values[7]) {
      let res = filteredItems.filter((el) => el.price > 4000 && el.price < 5001);
      setFilteredByPrice(res);
    }
    if (value === values[8]) {
      let res = filteredItems.filter((el) => el.price > 5000 && el.price < 6001);
      setFilteredByPrice(res);
    }
    if (value === values[9]) {
      let res = filteredItems.filter((el) => el.price > 6000 );
      setFilteredByPrice(res);
    }
  };

  return (
    <div className="main">
      <div className="main-container">
        <p className={styles["category-name"]}>{rusCategory}</p>
        <div className={styles["filters-wrapper"]}>
          <div>
            <p>Фильтрация по цене: </p>
            <select onChange={(event) => priceChangeHandler(event)}>
              <option>{values[0]}</option>
              <option>{values[1]}</option>
              <option>{values[2]}</option>
              <option>{values[3]}</option>
              <option>{values[4]}</option>
              <option>{values[6]}</option>
              <option>{values[7]}</option>
              <option>{values[8]}</option>
              <option>{values[9]}</option>
            </select>
          </div>
        </div>

        {filterByPriceBtn && (
          <div className={styles.items}>
          {filteredByPrice.map((elem) => (
            <Item
              key={`${elem.id}${elem.description}`}
              item={elem}
              id={elem.id}
              pic={elem.img}
              price={elem.price}
              description={elem.description}
              onSaveLikesNumber={onSaveLikesNumber}
              onSaveOrderItem={onSaveOrderItem}
              showFullItemHandler={showFullItemHandler}
              showFullItem={showFullItem}
              onSaveFavItems={onSaveFavItems}
            />
          ))}
        </div>)
} 
        {burgerMenuBtnIsClicked && 
          <div className={styles.items}>
          {filteredItems.map((elem) => (
            <Item
              key={`${elem.id}${elem.description}`}
              item={elem}
              id={elem.id}
              pic={elem.img}
              price={elem.price}
              description={elem.description}
              onSaveLikesNumber={onSaveLikesNumber}
              onSaveOrderItem={onSaveOrderItem}
              showFullItemHandler={showFullItemHandler}
              showFullItem={showFullItem}
              onSaveFavItems={onSaveFavItems}
            />
          ))}
        </div>
        }
       
      </div>
    </div>
  );
}
