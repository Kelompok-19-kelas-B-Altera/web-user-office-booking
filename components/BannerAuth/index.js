import styles from "./BannerAuth.module.css"
import { useMediaQuery } from "react-responsive";

const BannerAuth = ({ src, alt }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1280px)" });
  return <>{isTabletOrMobile ? <></> : <img src={src} alt={alt} />}</>;
};

export default BannerAuth;
