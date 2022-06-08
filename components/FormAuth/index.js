import styles from "./FormAuth.module.css";
import { useMediaQuery } from "react-responsive";

const FormAuth = ({ children, onSubmit }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1280px)" });
  return (
    <>
      <form
        className={isTabletOrMobile ? styles.formMobile : styles.form}
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        { children }
      </form>
    </>
  );
};

export default FormAuth;
