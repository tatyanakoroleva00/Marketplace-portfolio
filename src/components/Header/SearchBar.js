import React, {useState} from "react";
import styles from "./SearchBar.module.css";
import List from "./List";
export default function SearchBar({onGetInputText, listOpened, listOpenedHandler}) {
  const [enteredValue, setEnteredValue] = useState('');

  const onChangeInputHandler = (event) => {
    const value = event.target.value.toLowerCase();
    setEnteredValue(value);
    if(enteredValue.length === 0) {
      listOpenedHandler(true);
    }
  };

  const deleteInputHandler = () => {
    setEnteredValue('');
    listOpenedHandler(false);
  };
  return (
      <div className={styles["header__search-bar"]}>
        <span className={`material-symbols-outlined ${styles.search}`}>search</span>
        <span onClick={deleteInputHandler} className={`material-symbols-outlined ${styles.close}`}>close</span>
        <input
          className={enteredValue ? styles.white : styles["search-bar"]}
          type="text"
          placeholder="Поиск..."
          width={50}
          onChange={(event) => onChangeInputHandler(event)}
          value={enteredValue}
        />
        {listOpened &&  
        <List input={enteredValue} listOpened={listOpened} listOpenedHandler={listOpenedHandler} onGetInputText={onGetInputText}/>}
       
      </div>
  );
}
