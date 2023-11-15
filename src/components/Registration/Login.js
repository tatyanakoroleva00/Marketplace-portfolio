import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import styles from "./Login.module.css";
export default function Login(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [mistakeMail, setMistakeMail] = useState(false);
  const [mistakePassword, setMistakePassword] = useState(false);

  const database = {
    email: "guest@mail.ru",
    password: "123",
    username: "Guest",
  };

  const emailOnChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const passwordOnChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();

    /* Неверные пароль и почта*/
    if (enteredEmail === database.email && enteredPassword === database.password) {
      localStorage.setItem("userEmail", enteredEmail);
      localStorage.setItem("userPassword", enteredPassword);
      localStorage.setItem("userName", database.username);
      localStorage.setItem("userIsLogged", "userIsLogged");
      props.getLoginStatus(true);
      props.getLoginBtnState();
    }
    if (enteredEmail !== database.email) {
      setMistakeMail(true);
    }
    if (enteredPassword !== database.password) {
      setMistakePassword(true);
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
        <div
          className={styles['input-container']}
        >
          <span className={styles['user-icon']}>
            <FaUser />
          </span>
          <input className={`${mistakeMail && styles.red}`}
            type="email"
            name="email"
            id="email"
            required
            onChange={emailOnChangeHandler}
            placeholder="Электронная почта"
          />
          <p className={styles["error-message"]}>
            {mistakeMail && "Неправильно введен Email"}
          </p>
        </div>
        <div
          className={styles["input-container"]}
        >
          <span className={styles['password-icon']}>
            <RiLockPasswordFill />
          </span>
          <input className={`${mistakePassword && styles.red}`}
            type="password"
            name="password"
            id="password"
            onChange={passwordOnChangeHandler}
            placeholder="Пароль"
            required
          />
          <p className={styles["error-message"]}>
        {mistakePassword && "Неправильно введен пароль"}
        </p>
        </div>
        
        <p className={styles['forgot-password-link']}>
          <a  href="/">Забыли пароль?</a>
        </p>
        <button className={styles["submit-btn"]} type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}
