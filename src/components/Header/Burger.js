import React from "react";
import styles from './Burger.module.css';
export default function Burger({burgerBtnStateHandler}) {
  return (
    <>
    <div onClick={()=>burgerBtnStateHandler()} className={styles.burger}>
    
      <span></span>
      <span></span>
      <span></span>
    </div>
    </>
  );
}
