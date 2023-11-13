import React from "react";
import styles from "./Main.module.css";
import Items from "./Items/Items";
import Cart from "../Cart/Cart";

export default function Main({
  category,
  onSaveLikesNumber,
  onSaveOrders,
  cartBtnState,
  orders,
}) {
  return (
    <div className={styles.main}>
      <div className={styles["main__container"]}>
        {cartBtnState ? <Cart orders={orders} /> : (
          <div>
            <Items
              category={category}
              onSaveLikesNumber={onSaveLikesNumber}
              onSaveOrders={onSaveOrders}
            />
          </div>
        )}
      </div>
    </div>
  );
}
