import React from "react";
import data from '../../assets/Data/ListData.json'
import styles from "./List.module.css";
export default function List({ input, listOpened, onGetInputText }) {
  const filteredData = data.filter((el) => {
    if (input === "") {
      return el;
    } else {
      return el.text.toLowerCase().includes(input);
    }
  });
  const clickHandler = (item) => {
    onGetInputText(item);
  };
  return (
    <div>
      {input.length > 0 && (
        <ul className={listOpened ? styles["list-items"] : styles.white}>
          {filteredData.map((item) => (
            <li onClick={() => clickHandler(item.category)} className={styles["list-item"]} key={item.id}>
              {item.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
