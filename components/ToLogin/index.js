import styles from "./ToRegister.module.css";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";


const ToRegister = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1600px)" });

  return (
    <>
      {isTabletOrMobile ? (
        <p className={styles.containerToRegisterMobile}>
          Sudah Punya akun ?{" "}
          <Link href="/register">
            <a id="to-register">Masuk di sini</a>
          </Link>
        </p>
      ) : (
        <div className={styles.containerToRegister}>
          <p>Sudah Punya akun?</p>
          <Link href="/register">
            <a id="to-register">Masuk di sini</a>
          </Link>
        </div>
      )}
    </>
  );
};

export default ToRegister;
