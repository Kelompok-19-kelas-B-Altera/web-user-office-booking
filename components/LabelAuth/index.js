import styles from "./LabelAuth.module.css";
import { useMediaQuery } from "react-responsive";

const LabelAuth = ({ label }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1280px)" });
  return (
    <label
      htmlFor={label.toLowerCase()}
      className={isTabletOrMobile ? styles.emailLabelMobile : styles.emailLabel}
    >
      {label.toLowerCase()}
    </label>
  );
};

export default LabelAuth;
