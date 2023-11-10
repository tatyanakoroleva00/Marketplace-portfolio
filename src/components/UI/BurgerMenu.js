import React from "react";
import styles from "./BurgerMenu.module.css";
const BurgerMenu = ({menuHandler, onGetCategory}) => {
  const clickHandler = (event, value) => {
    event.preventDefault();
    onGetCategory(value);
  };

  return (
    <div className={styles["burger-menu-container"]}>
      <nav>
        <ul className={styles["burger-menu"]}>
          <li>
            <span className="material-symbols-outlined">close</span>
          </li>
          <li onClick={(event) => clickHandler(event, 'shoes')} className={styles["burger-menu__item"]}>
            <a
              className={styles["burger-menu__link"]}
              href="/"
            >
              <span className="material-symbols-outlined">steps</span>
              <span>Обувь</span>
            </a>
          </li>
          <li onClick={(event) => clickHandler(event, 'clothes')} className={styles["burger-menu__item"]}>
            <a
              className={styles["burger-menu__link"]}
              href="/"
            >
              <span className="material-symbols-outlined">apparel</span>
              <span>Одежда</span>
            </a>
          </li>
          <li onClick={(event) => clickHandler(event, 'furniture')} className={styles["burger-menu__item"]}>
            <a
              className={styles["burger-menu__link"]}
              href="/"
            >
              <span className="material-symbols-outlined">bed</span>
              <span>Мебель</span>
            </a>
          </li>
          <li onClick={(event) => clickHandler(event, 'selfcare')}  className={styles["burger-menu__item"]}>
            <a
              className={styles["burger-menu__link"]}
              href="/"
            >
              <span className="material-symbols-outlined">self_care</span>
              <span>Уход за телом</span>
            </a>
          </li>
          <li onClick={(event) => clickHandler(event, 'toys')}  className={styles["burger-menu__item"]}>
            <a
              className={styles["burger-menu__link"]}
              href="/"
            >
              <span className="material-symbols-outlined">toys</span>
              <span>Игрушки</span>
            </a>
          </li>
          <li onClick={(event) => clickHandler(event, 'grocery')}  className={styles["burger-menu__item"]}>
            <a
              className={styles["burger-menu__link"]}
              href="/"
            >
              <span className="material-symbols-outlined">grocery</span>
              <span>Продукты</span>
            </a>
          </li>
          <li onClick={(event) => clickHandler(event, 'electronics')}  className={styles["burger-menu__item"]}>
            <a
              className={styles["burger-menu__link"]}
              href="/"
            >
              <span className="material-symbols-outlined">phone_iphone</span>
              <span>Электроника</span>
            </a>
          </li>
          <li onClick={(event) => clickHandler(event, 'sports')}  className={styles["burger-menu__item"]}>
            <a
              className={styles["burger-menu__link"]}
              href="/"
            >
              <span className="material-symbols-outlined">sports_volleyball</span>
              <span>Спорт</span>
            </a>
          </li>
          <li onClick={(event) => clickHandler(event, 'auto')} className={styles["burger-menu__item"]}>
            <a
              className={styles["burger-menu__link"]}
              href="/"
            >
              <span className="material-symbols-outlined">two_wheeler</span>
              <span>Авто</span>
            </a>
          </li>
        </ul>
        <div onClick={menuHandler} className={styles["menu-close-btn"]}>
          <span className="material-symbols-outlined">close</span>
        </div>
      </nav>
    </div>
  );
};
export default BurgerMenu;
