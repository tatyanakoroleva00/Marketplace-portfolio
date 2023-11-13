import React, { useState } from "react";
import styles from "./Login.module.css";
export default function Login(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const database = {
    email: "tatyana00@mail.ru",
    password: "123",
    username: "Tatiana",
  };

  const emailOnChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const passwordOnChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (
      enteredEmail === database.email &&
      enteredPassword === database.password
    ) {
      localStorage.setItem("userEmail", enteredEmail);
      localStorage.setItem("userPassword", enteredPassword);
      localStorage.setItem("userName", database.username);
      localStorage.setItem("userIsLogged", "userIsLogged");
      props.getLoginStatus(true);
      props.getLoginBtnState();
    }
  };
  return (
    <div>
      <div
        className={styles.backdrop}
        onClick={() => props.getLoginBtnState()}
      ></div>
      <form onSubmit={formSubmitHandler} className={styles.form}>
        <h1 className={styles["form-name"]}>Войти в личный кабинет</h1>
        <div className={styles["input-container"]}>
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={emailOnChangeHandler}
            placeholder="Электронная почта"
          />
        </div>
        <div className={styles["input-container"]}>
          <input
            type="password"
            name="password"
            id="password"
            onChange={passwordOnChangeHandler}
            placeholder="Пароль"
            required
          />
        </div>
        <button className={styles["submit-btn"]} type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}
