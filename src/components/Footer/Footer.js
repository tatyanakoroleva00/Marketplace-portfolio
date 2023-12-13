import React from "react";
import styles from "./Footer.module.css";
import qrcode from './images/qr-code.png';
import { Link } from "react-router-dom";
import InfoLink from "./links/InfoLink";
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
          <Link to="/about-us" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><InfoLink>О нас</InfoLink></Link>
          <Link to="/our-partners" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><InfoLink>Наши партнеры</InfoLink></Link>
          <Link to="/become-our-partner" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><InfoLink>Стать партнером</InfoLink></Link>
        </ul>
        <ul className={styles["info-column"]}>
        <li className={styles['title']}>Помощь</li>
        <Link to="/to-order" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><InfoLink>Как сделать заказ</InfoLink></Link>
        <Link to="/payment" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><InfoLink>Оплата</InfoLink></Link>
        <Link to="/delivery" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><InfoLink>Доставка</InfoLink></Link>
        <Link to="/return-the-good" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><InfoLink>Как вернуть товар</InfoLink></Link>
        <Link to="/contacts" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><InfoLink>Контакты</InfoLink></Link>
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
