import React from "react";
import styles from "./FullItem.module.css";

export default function FullItem({showFullItemHandler, itemChosen}) {
  return (
    <div className="item">
      <div className={styles.backdrop} onClick={()=>showFullItemHandler(itemChosen, false)}>
      <div className={styles.fullItem}>
        <img className={styles['fullItem-image']} src={itemChosen.img} alt={itemChosen.img}/>
        <p className={styles.description}>{itemChosen.description}</p>
        <p className={styles.price}>{itemChosen.price}&#8381;</p>
      </div>
      </div>
    </div>
  );
}
