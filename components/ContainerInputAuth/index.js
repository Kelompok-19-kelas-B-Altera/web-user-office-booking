import styles from "./ContainerInputAuth.module.css"
import { useMediaQuery } from "react-responsive";


const ContainerInputAuth = ({ children }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1600px)" });

  return (
    <div className={isTabletOrMobile ? styles.containerInputMobile : styles.containerInput}>
    { children }
    </div>
  )
}

export default ContainerInputAuth