import React, {useState} from "react";
import styles from "./SearchBar.module.css";
import List from "./List";
export default function SearchBar({onGetInputText}) {
  const [listOpened, setListOpened] = useState(false);
  const [enteredValue, setEnteredValue] = useState('');

  const onChangeInputHandler = (event) => {
    const value = event.target.value.toLowerCase();
    setEnteredValue(value);
    if(enteredValue.length === 0) {
      setListOpened(true);
    }
    
  };

  const deleteInputHandler = () => {
    setEnteredValue('');
    setListOpened(false);
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
          onChange={onChangeInputHandler}
          value={enteredValue}
        />
        {listOpened &&  
        <List input={enteredValue} listOpened={listOpened} onGetInputText={onGetInputText}/>}
       
      </div>
  );
}
