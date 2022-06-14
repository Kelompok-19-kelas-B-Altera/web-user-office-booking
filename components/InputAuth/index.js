import styles from "./InputAuth.module.css";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import InputAlert from "../InputAlert";

const InputAuth = ({ type, id, placeholder, value, onChange, validators, alertMessage }) => {
  const maxWidth = useSelector((state) => state.mediaQuery.maxWidth);
  const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${maxWidth}px)` });
  const [theInputValid, allValid] = validators;

  return (
    <>
      {isTabletOrMobile ? (
        <>
          <input
            type={type}
            id={id}
            placeholder={placeholder.toLowerCase()}
            className={`${styles.inputMobile} ${allValid !== "" && !theInputValid && styles.error}`}
            value={value}
            onChange={(e) => {
              onChange(e);
            }}
          />
          {allValid !== "" && !theInputValid && <InputAlert message={alertMessage} />}
        </>
      ) : (
        <>
          <input
            type={type}
            id={id}
            className={`${styles.input} ${allValid !== "" && !theInputValid && styles.error}`}
            value={value}
            onChange={(e) => {
              onChange(e);
            }}
          />
          {allValid !== "" && !theInputValid && <InputAlert message={alertMessage} />}
        </>
      )}
    </>
  );
};

export default InputAuth;
