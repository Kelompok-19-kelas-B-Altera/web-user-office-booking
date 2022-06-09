import styles from "./InputAuth.module.css";
import { useMediaQuery } from "react-responsive";

const InputAuth = ({ type, id, placeholder, value, onChange }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1600px)" });
  return (
    <>
      {isTabletOrMobile ? (
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
      ) : (
        <input
          type={type}
          id={id}
          className={styles.input}
          value={value}
          onChange={(e) => {
            onChange(e);
          }}
        />
      )}
    </>
  );
};

export default InputAuth;