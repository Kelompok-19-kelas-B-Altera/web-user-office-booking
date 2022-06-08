import styles from "./ToRegister.module.css";
import { useMediaQuery } from "react-responsive";
import Link from "next/Link";


const ToRegister = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1280px)" });

  return (
    <>
      {isTabletOrMobile ? (
        <p className={styles.containerToRegisterMobile}>
          Belum memiliki akun ?{" "}
          <Link href="/register">
            <a>Daftar di sini</a>
          </Link>
        </p>
      ) : (
        <div className={styles.containerToRegister}>
          <p>Belum memiliki akun?</p>
          <Link href="/register">
            <a>Daftar di sini</a>
          </Link>
        </div>
      )}
    </>
  );
};

export default ToRegister;
