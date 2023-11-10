import React from "react";
import styles from "./HeaderTop.module.css";
import flag from '../../assets/images/russia-flag.png';

export default function HeaderTop() {
  return (
    <div className={styles["header__top"]}>
      <nav>
        <ul className={`${styles["header__menu"]} ${styles.menu}`}>
          <li className={`${styles["menu__item"]} ${styles["country-item"]}`}>
            <span><img className={styles.flag} src={flag} alt={flag} /></span>
            <span>RUB</span>
          </li>
          <li className={`${styles["menu__item"]} ${styles["geocity-item"]}`}>
            <span> Москва</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
