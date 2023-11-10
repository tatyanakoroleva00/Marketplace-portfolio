import React from "react";
import Item from "./Item";
import styles from "./Items.module.css";
import {listedItems} from '../../../assets/Data/listedItems';

export default function Items({category, onSaveLikesNumber, onSaveItemsChosen}) {
    const filteredItems = listedItems[`${category}`];

      const getDataHandler = (data) => {
    onSaveItemsChosen(data);
  };
  return (
    <div>
      <div className={styles.items}>
        {filteredItems.map((elem) => (
          <Item
            key={`${elem.id}${elem.description}`}
            id = {elem.id}
            pic={elem.img}
            price={elem.price}
            description={elem.description}
            quantity={elem.quantity}
            onSaveLikesNumber = {onSaveLikesNumber}
            onSaveItemsChosen={onSaveItemsChosen}
            getData={getDataHandler}
          />
        ))}
      </div>
    </div>
  );
}
