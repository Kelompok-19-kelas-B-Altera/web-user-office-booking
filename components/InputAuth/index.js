import styles from "./InputAuth.module.css"
import { useMediaQuery } from "react-responsive";

const InputAuth = ({ type, id, placeholder, value, onChange }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1280px)" });
  return (
    <>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={isTabletOrMobile ? styles.emailMobile : styles.email}
        value={value}
        onChange={(e) => {
          onChange(e);
        }}
      />
    </>
  );
};

export default InputAuth;
