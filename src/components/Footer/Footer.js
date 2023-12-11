import React from "react";
import styles from "./Footer.module.css";
import qrcode from './images/qr-code.png';
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className={styles["footer-wrap"]}>
      <div className={styles["footer-inner"]}>
        <div className={styles["info-column"]}>
            <img className={styles.qrcode} src={qrcode} alt={qrcode} />
            <p className={styles['qrcode-text']}>Отсканируйте qr-код <br /> и перейдите в приложение</p>
        </div>
        <ul className={styles["info-column"]}>
          <li className={styles['title']}>Market Place</li>
          <Link to="/about-us">О нас</Link>
          <Link to="/our-partners">Наши партнеры</Link>
          <Link to="/become-our-partner">Как стать нашим партнером</Link>
        </ul>
        <ul className={styles["info-column"]}>
          <Link to="/help" className={styles['title']}>Помощь</Link>
          <Link to="/to-order">Как сделать заказ</Link>
          <Link to="/payment">Оплата</Link>
          <Link to="/delivery">Доставка</Link>
          <Link to="/return-the-good">Как вернуть товар</Link>
          <Link to="/contacts">Контакты</Link>
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
