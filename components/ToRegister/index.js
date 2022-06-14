import styles from "./ToRegister.module.css";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { useSelector } from "react-redux";



const ToRegister = () => {
  const maxWidth = useSelector((state) => state.mediaQuery.maxWidth);
  const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${maxWidth}px)` });

  return (
    <>
      {isTabletOrMobile ? (
        <p className={styles.containerToRegisterMobile}>
          Belum memiliki akun ?{" "}
          <Link href="/register">
            <a id="to-register">Daftar di sini</a>
          </Link>
        </p>
      ) : (
        <div className={styles.containerToRegister}>
          <p>Belum memiliki akun?</p>
          <Link href="/register">
            <a id="to-register">Daftar di sini</a>
          </Link>
        </div>
      )}
    </>
  );
};

export default ToRegister;
