import React from "react";
import Slider from "./Slider/Slider";
import styles from "./Main.module.css";
import Items from "./Items/Items";
import Cart from "../Cart/Cart";

export default function Main({
  category,
  onSaveLikesNumber,
  onSaveItemsChosen,
  openedBasket,
  itemsInTheBasket,
}) {
  return (
    <div className={styles.main}>
      <div className={styles["main__container"]}>
        {openedBasket ? <Cart itemsInTheBasket={itemsInTheBasket} /> : (
          <div>
            <Slider />
            <Items
              category={category}
              onSaveLikesNumber={onSaveLikesNumber}
              onSaveItemsChosen={onSaveItemsChosen}
            />
          </div>
        )}
      </div>
    </div>
  );
}
