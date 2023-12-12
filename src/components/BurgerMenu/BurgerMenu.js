import React from "react";
import styles from "./BurgerMenu.module.css";
const BurgerMenu = ({ burgerBtnStateHandler, onGetCategory}) => {
  const clickHandler = (event, value, rusCategory) => {
    event.preventDefault();
    onGetCategory(value, rusCategory);
    burgerBtnStateHandler();
  };

  return (
    <div className={styles["burger-menu-wrapper"]}>
      <div onClick={() => burgerBtnStateHandler()} className={styles["menu-close-btn"]}>
        <span className="material-symbols-outlined">close</span>
      </div>
      <nav>
        <ul className={styles["burger-menu"]}>
          <li
            onClick={(event) => clickHandler(event, "shoes", "Обувь")}
            className={styles["burger-menu__item"]}
          >
            <a className={styles["burger-menu__link"]} href="/">
              <span className="material-symbols-outlined">steps</span>
              <span>Обувь</span>
            </a>
          </li>
          <li
            onClick={(event) => clickHandler(event, "clothes", "Одежда")}
            className={styles["burger-menu__item"]}
          >
            <a className={styles["burger-menu__link"]} href="/">
              <span className="material-symbols-outlined">apparel</span>
              <span>Одежда</span>
            </a>
          </li>
          <li
            onClick={(event) => clickHandler(event, "furniture", "Мебель")}
            className={styles["burger-menu__item"]}
          >
            <a className={styles["burger-menu__link"]} href="/">
              <span className="material-symbols-outlined">bed</span>
              <span>Мебель</span>
            </a>
          </li>
          <li
            onClick={(event) =>
              clickHandler(event, "selfcare", "Уход за телом")
            }
            className={styles["burger-menu__item"]}
          >
            <a className={styles["burger-menu__link"]} href="/">
              <span className="material-symbols-outlined">self_care</span>
              <span>Уход за телом</span>
            </a>
          </li>
          <li
            onClick={(event) => clickHandler(event, "toys", "Игрушки")}
            className={styles["burger-menu__item"]}
          >
            <a className={styles["burger-menu__link"]} href="/">
              <span className="material-symbols-outlined">toys</span>
              <span>Игрушки</span>
            </a>
          </li>
          <li
            onClick={(event) => clickHandler(event, "grocery", "Продукты")}
            className={styles["burger-menu__item"]}
          >
            <a className={styles["burger-menu__link"]} href="/">
              <span className="material-symbols-outlined">grocery</span>
              <span>Продукты</span>
            </a>
          </li>
          <li
            onClick={(event) =>
              clickHandler(event, "electronics", "Электроника")
            }
            className={styles["burger-menu__item"]}
          >
            <a className={styles["burger-menu__link"]} href="/">
              <span className="material-symbols-outlined">phone_iphone</span>
              <span>Электроника</span>
            </a>
          </li>
          <li
            onClick={(event) => clickHandler(event, "sports", "Спорт")}
            className={styles["burger-menu__item"]}
          >
            <a className={styles["burger-menu__link"]} href="/">
              <span className="material-symbols-outlined">
                sports_volleyball
              </span>
              <span>Спорт</span>
            </a>
          </li>
          <li
            onClick={(event) => clickHandler(event, "auto", "Авто")}
            className={styles["burger-menu__item"]}
          >
            <a className={styles["burger-menu__link"]} href="/">
              <span className="material-symbols-outlined">two_wheeler</span>
              <span>Авто</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default BurgerMenu;
