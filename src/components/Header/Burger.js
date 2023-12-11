import React from "react";
import styles from './Burger.module.css';
import { Link } from "react-router-dom";
export default function Burger({burgerBtnStateHandler}) {
  return (
    <>
    <Link to="/">
    <div onClick={()=>burgerBtnStateHandler()} className={styles.burger}>
    
      <span></span>
      <span></span>
      <span></span>
    </div>
    </Link>
    </>
  );
}
