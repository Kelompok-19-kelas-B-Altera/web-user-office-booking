import styles from "./InputAuth.module.css";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import InputAlert from "../InputAlert";

const InputAuth = ({ type, id, placeholder, value, onChange }) => {
  const maxWidth = useSelector((state) => state.mediaQuery.maxWidth);
  const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${maxWidth}px)` });

  return (
    <>
      {isTabletOrMobile ? (
        <>
          <input
            type={type}
            id={id}
            placeholder={placeholder.toLowerCase()}
            className={styles.inputMobile}
            value={value}
            onChange={(e) => {
              onChange(e);
            }}
          />
          <InputAlert />
        </>
      ) : (
        <>
          <input
            type={type}
            id={id}
            className={styles.input}
            value={value}
            onChange={(e) => {
              onChange(e);
            }}
          />
          <InputAlert />
        </>
      )}
    </>
  );
};

export default InputAuth;
