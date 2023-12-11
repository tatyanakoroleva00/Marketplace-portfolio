import React from "react";
import Item from "./Item";
import styles from "./Items.module.css";
import { listedItems } from "../../assets/Data/listedItems";

export default function Items({
  category,
  rusCategory,
  onSaveLikesNumber,
  onSaveOrderItem,
  showFullItemHandler,
  showFullItem,
  onSaveFavItems
}) {
  let filteredItems = listedItems[`${category}`];

  return (
    <div className="main">
      <div className={styles['main-container']}>
        <p className={styles["category-name"]}>{rusCategory}</p>
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
       
      </div>
    </div>
  );
}
