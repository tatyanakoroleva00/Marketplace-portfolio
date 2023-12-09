import React from 'react'
import styles from './FavouriteItem.module.css';
import {GoTrash} from 'react-icons/go';
import { BsCart3 } from "react-icons/bs";

export default function FavouriteItem({favItem, deleteFavItemHandler, index, onSaveOrderItemHandler}) {
  return (
    <div className={styles['fav-items-table']}>
    {index < 4 &&  <div className={styles['fav-item-card']}>
        <div className={styles['left-col']}>
            <img className={styles['fav-item-img']} src={favItem.img} alt={favItem.img}/>
            <p className={styles['fav-item-description']}>{favItem.description}</p>
        </div>
        <div className={styles['right-col']}>
                <span onClick={()=>deleteFavItemHandler(favItem)} className={styles['trash-bin']}><GoTrash /></span>
                <span onClick={()=>onSaveOrderItemHandler(favItem)} className={styles['add-to-cart-btn']}><BsCart3 /></span>
        </div>
    </div>}
    </div>
  )
}
