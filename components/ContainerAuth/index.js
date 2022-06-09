import styles from "./ContainerAuth.module.css";
import { useMediaQuery } from "react-responsive";

const ContainerAuth = ({ children }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1600px)" });
  return (
    <section className={styles.container}>
      {isTabletOrMobile ? (
        <div className={styles.containerFormMobile}>{children}</div>
      ) : (
        <>{children}</>
      )}
    </section>
  );
};

export default ContainerAuth;
