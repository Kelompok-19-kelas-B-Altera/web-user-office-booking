import styles from "../styles/Login.module.css";

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/Link";
import Cookies from "js-cookie";
import axios from "axios";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [isEmailValid, setEmailValid] = useState(false);
  let [isPasswordValid, setPasswordValid] = useState(false);
  let [isAllValid, setAllValid] = useState("");

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1280px)" });

  useEffect(() => {
    if (isAllValid === "valid") {
      axios
        .post("http://108.136.240.248/api/v1/auth/login", { email, password })
        .then((response) => {
          console.log(response);
        }).catch((error)=>{
          console.log(error)
        });
    }
  }, [isAllValid]);

  const handleEmail = (e) => {
    const value = e.target.value;
    const valueWithNoSpace = value.includes(" ") ? false : true;
    const isThereaddress = value.split("@")[0] ? true : false;
    const justOneAt = value.match(/@/g)?.length === 1 ? true : false;
    const isThereDomain = value.split("@")[1]?.split(".")[0] ? true : false;
    const isThereTopLevelDomain = value.split(".")[1]?.length > 0 ? true : false;

    setEmail(value);
    isThereaddress && justOneAt && valueWithNoSpace && isThereDomain && isThereTopLevelDomain
      ? setEmailValid(true)
      : setEmailValid(false);
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    const minLength = 8;
    const maxLength = 14;
    const containsNumber = value.match(/[1-9]/) ? true : false;
    const containsLetter = value.match(/[a-zA-Z]/) ? true : false;

    setPassword(value);
    value.length >= minLength && value.length <= maxLength && containsLetter && containsNumber
      ? setPasswordValid(true)
      : setPasswordValid(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmailValid && isPasswordValid) {
      Cookies.set("email", email);
      setEmail("");
      setPassword("");
      setEmailValid(false);
      setPasswordValid(false);
      setAllValid("valid");
    } else {
      setAllValid("not valid");
    }
  };

  return (
    <section className={styles.container}>
      {isTabletOrMobile ? (
        <div className={styles.containerFormMobile}>
          <form
            className={styles.formMobile}
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <header className={styles.headerMobile}>
              <h1>Masuk</h1>
            </header>

            <label htmlFor="email" className={styles.emailLabelMobile}>
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              className={styles.emailMobile}
              onChange={(e) => {
                handleEmail(e);
              }}
            />

            <label htmlFor="password" className={styles.passwordLabelMobile}>
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className={styles.passwordMobile}
              onChange={(e) => {
                handlePassword(e);
              }}
            />

            <Link href="/lupa-password">
              <a className={styles.lupaPasswordMobile}>Lupa Password ?</a>
            </Link>

            <button type="submit" className={styles.buttonMobile}>
              Masuk
            </button>
          </form>

          <p className={styles.containerToRegisterMobile}>
            Belum memiliki akun ?{" "}
            <Link href="/lupa-password">
              <a>Lupa Password</a>
            </Link>
          </p>
        </div>
      ) : (
        <>
          <img src="/login.svg" alt="login-photo" />
          <form
            className={styles.form}
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <h1 className={styles.title}>Masuk Akun</h1>
            {isAllValid === "not valid" && (
              <p className={styles.validationAlert}>Masukkan Username dan Password dengan benar.</p>
            )}

            <div className={styles.containerInput}>
              <label htmlFor="email" className={styles.emailLabel}>
                Email
              </label>
              <input
                type="text"
                className={styles.email}
                id="email"
                value={email}
                onChange={(e) => {
                  handleEmail(e);
                }}
              />

              <label htmlFor="password" className={styles.passwordLabel}>
                Password
              </label>
              <input
                type="password"
                className={styles.password}
                id="password"
                value={password}
                onChange={(e) => {
                  handlePassword(e);
                }}
              />

              <span className={styles.containerLupaPassword}>
                <Link href="/lupa-password">
                  <a>Lupa Password?</a>
                </Link>
              </span>
            </div>

            <button type="submit" className={styles.button}>
              Masuk
            </button>

            <div className={styles.containerToRegister}>
              <p>Belum memiliki akun?</p>
              <Link href="/register">
                <a>Daftar di sini</a>
              </Link>
            </div>
          </form>
        </>
      )}
    </section>
  );
};

export default Login;
