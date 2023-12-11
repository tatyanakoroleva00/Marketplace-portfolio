import React, { useState } from "react";
import styles from "./Item.module.css";
import like from "../../assets/images/like.png";
export default function Item(props) {
  const [favClicked, setFavClicked] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const favClickHandler = (item) => {
    setFavClicked((favClicked) => !favClicked);
    if (favClicked === true) {
      props.onSaveLikesNumber(1);
      props.onSaveFavItems(true, props.item);
    } else {
      props.onSaveLikesNumber(-1);
      props.onSaveFavItems(false, props.item);
    }
  };

  let description = props.description;
  if (description.length > 30) {
    description = description.slice(0, 30) + "...";
  }

  const submitHandler = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    props.onSaveOrderItem(props.item);
  };

  const userIslogged = localStorage.getItem("userIsLogged");

  return (
    <div className={styles["item-card"]}>
      <div className={styles["item-top"]}>
        <div>
          <img
            className={styles["item-pic"]}
            src={props.pic}
            alt={props.pic}
            onClick={() => props.showFullItemHandler(props.item, true)}
          />
        </div>
      </div>
      <div className={styles["item-middle"]}>
        <div className={styles["price-and-fav"]}>
          <p className={styles.price}>{props.price} &#8381;</p>
          {userIslogged && (
            <div>
              {favClicked ? (
                <span
                  onClick={() => favClickHandler(props.item)}
                  className={`material-symbols-outlined ${styles.favourite}`}
                >
                  favorite
                </span>
              ) : (
                <img
                  onClick={() => favClickHandler(props.item)}
                  className={styles["clicked-fav"]}
                  src={like}
                  alt={like}
                ></img>
              )}
            </div>
          )}
        </div>

        <div className={styles.description}>{description}</div>

        <div className={styles["item-bottom"]}>
          {userIslogged && (
            <button
              onClick={submitHandler}
              className={`${styles["submit-btn"]} ${
                isSubmitted ? styles.submitted : styles.default
              }`}
            >
              {!isSubmitted ? <span>Добавить</span> : <span>В корзине</span>}
              <span className="material-symbols-outlined">shopping_cart</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
