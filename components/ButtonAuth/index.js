import styles from "./ButtonAuth.module.css";
import { useMediaQuery } from "react-responsive";

const ButtonAuth = ({ label, loading }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1280px)" });
  return (
    <>
      <button
        type="submit"
        className={`${isTabletOrMobile ? styles.buttonMobile : styles.button} ${
          loading && styles.buttonUnable
        }`}
      >
        {label}
      </button>
    </>
  );
};

export default ButtonAuth;
