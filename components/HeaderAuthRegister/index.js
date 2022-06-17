import styles from "./HeaderAuth.module.css";
import { useMediaQuery } from "react-responsive";
import PopupValidationRegister from "../PopupValidationRegister";
import { useSelector } from "react-redux";

const HeaderAuth = ({ title, titleMobile, validators, linkTo }) => {
  const maxWidth = useSelector((state) => state.mediaQuery.maxWidth);
  const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${maxWidth}px)` });
  const [isUserExist, isMessage] = validators;

  return (
    <>
      {isTabletOrMobile ? (
        <header className={styles.headerMobile}>
          <h1>{titleMobile}</h1>
          {isUserExist === "exists" && (
            <>
              <PopupValidationRegister messages={["Anda sudah memiliki akun.", "Login disini"]} linkTo={linkTo} />
            </>
          )}

          {/* {isAllValid === "not valid" && !isEmailValid && !isPasswordValid && (
            <>
              <PopupValidation messages={["Masukkan Email dan Password dengan benar.", "Login disini"]} linkTo={linkTo} />
            </>
          )}

          {isAllValid === "not valid" && !isEmailValid && isPasswordValid && (
            <>
              <PopupValidation message="Masukkan Email dengan benar." linkTo={linkTo} />
            </>
          )}

          {isAllValid === "not valid" && !isPasswordValid && isEmailValid && (
            <>
              <PopupValidation message="Masukkan Password dengan benar." linkTo={linkTo} />
            </>
          )} */}
        </header>
      ) : (
        <>
          <h1 className={styles.title}>{title}</h1>
          {isUserExist === "exists" && (
            <>
              <PopupValidationRegister 
              mainMassage={["Anda sudah memiliki akun."]}
              messageToAnotherAuth={["Login disini"]}
              linkTo={linkTo} />
            </>
          )}
          {isMessage === "Gagal" && (
            <>
              <PopupValidationRegister 
              mainMassage={["Password tidak sama."]}
              messageToAnotherAuth={[""]}
              linkTo={linkTo} />
            </>
          )}

          {/* {isAllValid === "not valid" && !isEmailValid && !isPasswordValid && (
            <>
              <PopupValidation message="Masukkan Email dan Password dengan benar." linkTo={linkTo} />
            </>
          )}

          {isAllValid === "not valid" && !isEmailValid && isPasswordValid && (
            <>
              <PopupValidation message="Masukkan Email dengan benar." linkTo={linkTo} />
            </>
          )}

          {isAllValid === "not valid" && !isPasswordValid && isEmailValid && (
            <>
              <PopupValidation message="Masukkan Password dengan benar." linkTo={linkTo} />
            </>
          )} */}
        </>
      )}
    </>
  );
};

export default HeaderAuth;
