import React from 'react'
import OrderedGood from './OrderedGood';
import styles from './OrderedGoods.module.css';
export default function OrderedGoods({orderedGoods}) {
  return (
    <div className={styles.container}>
        <p>Ваш заказ: </p>
        <table className={styles['goods-table']}>
            {orderedGoods.map(good => (<OrderedGood good={good}  numberOfOrders={good.numberOfOrders} total={good.total}  />))}
        </table>
    </div>
  )
}
