import styles from "./ToRegister.module.css";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";


const ToRegister = ({label, linkAnother, toAnother}) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1600px)" });

  return (
    <>
      {isTabletOrMobile ? (
        <p className={styles.containerToRegisterMobile}>
          {label}{" "}
          <Link href={linkAnother}>
            <a id="to-another">{toAnother}</a>
          </Link>
        </p>
      ) : (
        <div className={styles.containerToRegister}>
          <p>{label}</p>
          <Link href={linkAnother}>
            <a id="to-another">{toAnother}</a>
          </Link>
        </div>
      )}
    </>
  );
};

export default ToRegister;
