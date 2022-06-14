import styles from "./InputAlert.module.css";
import Image from 'next/image'

const InputAlert = () => {
  return (
    <div className={styles.container}>
      <Image src="/warning.svg" alt="warning" width={19} height={19} className={styles.icon} />
      <p className={styles.message}>Lorem ipsum dolor sit amet.</p>
    </div>
  );
};

export default InputAlert;
