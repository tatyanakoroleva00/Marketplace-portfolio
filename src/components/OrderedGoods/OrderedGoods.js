import React from "react";
import OrderedGood from "./OrderedGood";
import styles from "./OrderedGoods.module.css";
export default function OrderedGoods({ orderedGoods }) {
  // console.log(orderedGoods);
  return (
    <div className={styles["goods-wrapper"]}>
      <div className={styles["goods-table-wrapper"]}>
      {orderedGoods.length > 0 && (
        <div>
      <p className={styles.title}>Ваши заказы:</p>
          <div className={styles["goods-table"]}>
            
            {orderedGoods && orderedGoods.map((good, index) => (
              <OrderedGood good={good} key={good.id} number={orderedGoods.length - index} />
            ))}
          </div>
          </div>
        )}
        {orderedGoods.length === 0 && <p style={{textAlign: 'center'}}>У Вас пока нет заказов.</p>}
      </div>
    </div>
  );
}
