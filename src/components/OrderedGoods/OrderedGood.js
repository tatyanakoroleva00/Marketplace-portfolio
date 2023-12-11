import React from "react";
import styles from "./OrderedGood.module.css";
export default function OrderedGood({ good, number }) {
  // console.log(orderedGoods);
  // const dateObj = good.date;
  // console.log(dateObj);
  // let month = dateObj.toLocaleString("ru-RU", { month: "long" });
  // month = month.substr(0, month.length - 1);
  // month = month + "я";

  // const day = dateObj.toLocaleString("ru-RU", { day: "2-digit" });
  // const year = dateObj.getFullYear();

  let arr = [];
  good.goods.map(elem => arr.push(elem.description, elem.count));
  let arr2 = [];
  for (let i = 0; i <= arr.length - 2; i += 2) {
    let elem = arr[i] + ' - (' + arr[i + 1] + 'шт.)';
    arr2.push(elem);
  }
  arr2 = arr2.join(', ');
  return (
    <table className={styles.item}>
      <tr>
        <th style={{width: '10%'}}></th>
        <th style={{width: '90%'}}></th>
      </tr>
      <tr className={styles.line}>
        <td className={styles["order-number"]}>Заказ # {number}</td>
      </tr>
      <tr className={styles.line}>
        <td className={styles.title}>Дата Заказа :</td>
        <td>{good.date.day} {good.date.month} {good.date.year}</td>
      </tr>
      <tr className={styles.line}>
        <td className={styles.title}>Кол-во :</td>
        <td>{good.numberOfOrders} (шт.)</td>
      </tr>
      <tr className={styles.line}>
        <td className={styles.title}>Описание :</td>
        <td className={styles.description}>{arr2}</td>
      </tr>
      <tr className={styles.line}> 
        <td className={styles.title}>Итог :</td>
        <td>{good.total} &#8381;</td>
      </tr>
    </table>
  );
}
