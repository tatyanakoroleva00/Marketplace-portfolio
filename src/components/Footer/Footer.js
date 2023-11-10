import React from "react";
import styles from "./Footer.module.css";
import qrcode from './images/qr-code.png';
export default function Footer() {
  return (
    <div className={styles["footer-wrap"]}>
      <div className={styles["footer-inner"]}>
        <div className={styles["info-column"]}>
            <img className={styles.qrcode} src={qrcode} alt={qrcode} />
            <p>Отсканируйте qr-код <br /> и перейдите в приложение</p>
        </div>
        <ul className={styles["info-column"]}>
          <li className={styles['title']}>Market Place</li>
          <li>О нас</li>
          <li>Наши партнеры</li>
          <li>Как стать нашим партнером</li>
        </ul>
        <ul className={styles["info-column"]}>
          <li className={styles['title']}>Помощь</li>
          <li>Как сделать заказ</li>
          <li>Оплата</li>
          <li>Доставка</li>
          <li>Как вернуть товар</li>
          <li>Контакты</li>
        </ul>
        <ul className={styles["info-column"]}>
          <li className={styles['title']}>Горячая линия</li>
          <li><a className={styles.hotline} href="tel: +74998561234">+7 (499) 856 12 34</a></li>
          <div><p className={styles['rights-reserved']}>&#64; 2023 Москва. Все права защищены.</p></div>
        </ul>
      </div>
    </div>
  );
}
