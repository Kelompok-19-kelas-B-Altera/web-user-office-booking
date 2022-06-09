import styles from "./HeaderAuth.module.css";
import { useMediaQuery } from "react-responsive";
import PopupValidation from "../PopupValidation";

const HeaderAuth = ({ title, validator }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1600px)" });
  const {isAllValid, isUserExist, isEmailValid, isPasswordValid} = validator

  return (
    <>
      {isTabletOrMobile ? (
        <header className={styles.headerMobile}>
          <h1>Masuk</h1>
          {isUserExist === "doesn't exist" && (
            <>
              <PopupValidation message="Akun anda belum terdaftar." />
            </>
          )}

          {isAllValid === "not valid" && !isEmailValid && !isPasswordValid && (
            <>
              <PopupValidation message="Masukkan Email dan Password dengan benar." />
            </>
          )}

          {isAllValid === "not valid" && !isEmailValid && isPasswordValid && (
            <>
              <PopupValidation message="Masukkan Email dengan benar." />
            </>
          )}

          {isAllValid === "not valid" && !isPasswordValid && isEmailValid && (
            <>
              <PopupValidation message="Masukkan Password dengan benar." />
            </>
          )}
        </header>
      ) : (
        <>
          <h1 className={styles.title}>Masuk Akun</h1>
          {isUserExist === "doesn't exist" && (
            <>
              <PopupValidation message="Akun anda belum terdaftar." />
            </>
          )}

          {isAllValid === "not valid" && !isEmailValid && !isPasswordValid && (
            <>
              <PopupValidation message="Masukkan Email dan Password dengan benar." />
            </>
          )}

          {isAllValid === "not valid" && !isEmailValid && isPasswordValid && (
            <>
              <PopupValidation message="Masukkan Email dengan benar." />
            </>
          )}

          {isAllValid === "not valid" && !isPasswordValid && isEmailValid && (
            <>
              <PopupValidation message="Masukkan Password dengan benar." />
            </>
          )}
        </>
      )}
    </>
  );
};

export default HeaderAuth;
