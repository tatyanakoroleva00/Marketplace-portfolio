import React from 'react'
import styles from './OrderedGood.module.css';
export default function OrderedGood({good, numberOfOrders, total}) {
  return (
    <tr>
        <td>{good.goods.name}</td>
        <td>Количество: {good.quantity}</td>
        <td>Стоимость: {good.totalPrice}</td>
        <td>Кол-во заказов: {numberOfOrders}</td>
        <td>Итог: {total}</td>
    </tr>
  )
}
