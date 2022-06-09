import styles from "./PopupValidation.module.css";
import { useMediaQuery } from "react-responsive";

const PopupValidation = ({ message }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1600px)" });
  return (
    <p className={isTabletOrMobile ? styles.validationAlertMobile : styles.validationAlert} id="validation-alert">
      { message }
    </p>
  );
};

export default PopupValidation;
