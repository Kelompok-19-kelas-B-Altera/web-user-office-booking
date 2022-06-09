import styles from "./ButtonAuth.module.css";
import { useMediaQuery } from "react-responsive";

const ButtonAuth = ({ label, loading }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1600px)" });
  return (
    <>
      <button
        type="submit"
        className={`${isTabletOrMobile ? styles.buttonMobile : styles.button} ${
          loading && styles.buttonUnable
        }`}
        id="button-submit"
      >
        {label}
      </button>
    </>
  );
};

export default ButtonAuth;
