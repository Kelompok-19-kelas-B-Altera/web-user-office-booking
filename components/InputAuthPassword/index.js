import styles from "./InputAuth.module.css";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import InputAlert from "../InputAlert";

const InputAuth = ({ type, id, placeholder, name, value, onChange, validators, subValidators, alertMessage }) => {
  const maxWidth = useSelector((state) => state.mediaQuery.maxWidth);
  const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${maxWidth}px)` });
  const [theInputValid, allValid] = validators;
  const [subValidationOne, subValidationTwo, subValidationThree] = subValidators;

  return (
    <>
      {isTabletOrMobile ? (
        <>
          <input
            type={type}
            id={id}
            placeholder={placeholder.toLowerCase()}
            className={`${styles.inputMobile} ${allValid !== "" && !theInputValid && styles.error}`}
            name={name}
            value={value}
            onChange={(e) => {
              onChange(e);
            }}
          />
          {allValid !== "" && !theInputValid && <InputAlert message={alertMessage} />}
          <span className={styles.validation}>
            { subValidationOne ? 
              <div>
              <span className={styles.iconValidationCheck}></span>
              <label className={styles.labelValidationCheck}>Minimal 8 Karakter</label>
              </div>
              :
              <div>
              <span className={styles.iconValidation}></span>
              <label className={styles.labelValidation}>Minimal 8 Karakter</label>
              </div>
            }
            { subValidationTwo ?
                <div>
                <span className={styles.iconValidationCheck}></span>
                <label className={styles.labelValidationCheck}>Minimal 1 Uppercase</label>
                </div>
                :
                <div>
                <span className={styles.iconValidation}></span>
                <label className={styles.labelValidation}>Minimal 1 Uppercase</label>
                </div>
            }
            { subValidationThree ?
                <div>
                <span className={styles.iconValidationCheck}></span>
                <label className={styles.labelValidationCheck}>1 Angka</label>
                </div>
                :
                <div>
                <span className={styles.iconValidation}></span>
                <label className={styles.labelValidation}>1 Angka</label>
                </div>
            }
        </span>
        </>
      ) : (
        <>
          <input
            type={type}
            id={id}
            className={`${styles.input} ${allValid !== "" && !theInputValid && styles.error}`}
            name={name}
            value={value}
            onChange={(e) => {
              onChange(e);
            }}
          />
          {allValid !== "" && !theInputValid && <InputAlert message={alertMessage} />}
          <span className={styles.validation}>
            { subValidationOne ? 
                <div>
                <span className={styles.iconValidationCheck}></span>
                <label className={styles.labelValidationCheck}>Minimal 8 Karakter</label>
                </div>
                :
                <div>
                <span className={styles.iconValidation}></span>
                <label className={styles.labelValidation}>Minimal 8 Karakter</label>
                </div>
            }
            { subValidationTwo ?
                <div>
                <span className={styles.iconValidationCheck}></span>
                <label className={styles.labelValidationCheck}>Minimal 1 Uppercase</label>
                </div>
                :
                <div>
                <span className={styles.iconValidation}></span>
                <label className={styles.labelValidation}>Minimal 1 Uppercase</label>
                </div>
            }
            { subValidationThree ?
                <div>
                <span className={styles.iconValidationCheck}></span>
                <label className={styles.labelValidationCheck}>1 Angka</label>
                </div>
                :
                <div>
                <span className={styles.iconValidation}></span>
                <label className={styles.labelValidation}>1 Angka</label>
                </div>
            }
          </span>
        </>
      )}
    </>
  );
};

export default InputAuth;
