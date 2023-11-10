import React, { useState } from "react";
import styles from "./Item.module.css";
import like from "../../../assets/images/like.png";
export default function Item(props) {
  const [favClicked, setFavClicked] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const favClickHandler = () => {
    setFavClicked(!favClicked);
    if (favClicked === true) {
      props.onSaveLikesNumber(1);
    } else {
      props.onSaveLikesNumber(-1);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setIsSubmitted(true);
    if (!isSubmitted) {
      props.getData({
        id: props.id,
        pic: props.pic,
        description: props.description,
        price: props.price,
        quantity: props.quantity,
      });
    }
  };
  const deleteHandler = () => {
    setIsSubmitted(false);
  };

 

  return (
    <div className={styles["item-card"]}>
      <div className={styles["item-top"]}>
        <div>
          <img className={styles["item-pic"]} src={props.pic} alt={props.pic} />
          {favClicked ? (
            <span
              onClick={favClickHandler}
              className={`material-symbols-outlined ${styles.favourite}`}
            >
              favorite
            </span>
          ) : (
            <img
              onClick={favClickHandler}
              className={styles["clicked-fav"]}
              src={like}
              alt={like}
            ></img>
          )}
        </div>
      </div>
      <div className={styles["item-middle"]}>
        <p className={styles.price}>{props.price}&#8381;</p>
        <p className={styles.description}>{props.description}</p>
      </div>
      <div className={styles.buttons}>
        <button
          onClick={submitHandler}
          className={`${styles["submit-btn"]} ${
            isSubmitted ? styles.submitted : styles.default
          }`}
        >
          {!isSubmitted ? <span>Добавить</span> : <span>В корзине</span>}
          <span className="material-symbols-outlined">shopping_cart</span>
        </button>
        {isSubmitted && (
          <button onClick={deleteHandler} className={styles["delete-btn"]}>
            <span>Удалить</span>
          </button>
        )}
      </div>
    </div>
  );
}
