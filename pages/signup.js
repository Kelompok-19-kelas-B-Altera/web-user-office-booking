import styles from '../styles/Signup.module.css'
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";
// import axios from 'axios';

// components
import ButtonAuth from "../components/ButtonAuth";
import InputAuth from "../components/InputAuth";
import InputAuthPassword from "../components/InputAuthPassword";
import ContainerAuth from "../components/ContainerAuth";
import FormAuth from "../components/FormAuth";
import LabelAuth from "../components/LabelAuth";
import ToAnotherAuth from "../components/ToAnotherAuth";
import PopupValidation from '../components/PopupValidation';
import BannerAuth from "../components/BannerAuth";
import ContainerInputAuth from "../components/ContainerInputAuth";


const Signup = () => {
  const [dataForm, setDataForm] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [isEmailValid, setEmailValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState({
      characters: false,
      uppercase: false,
      number: false,
  });
  const [isConfirmPasswordValid, setConfirmPasswordValid] = useState({
      characters: false,
      uppercase: false,
      number: false,
  });
  const [isMessage, setMessage] = useState({
      message: ""
  });
  const [isAllValid, setAllValid] = useState("")
  const [loading, setLoading] = useState(false)
  
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1600px)" });

  const handleChangeEmail = (e) => {
    const valueWithNoSpace =  e.target.value.includes(" ") ? false : true;
    const isThereaddress =  e.target.value.split("@")[0] ? true : false;
    const justOneAt =  e.target.value.match(/@/g)?.length === 1 ? true : false;
    const isThereDomain =  e.target.value.split("@")[1]?.split(".")[0] ? true : false;
    const isThereTopLevelDomain =  e.target.value.split(".")[1]?.length > 0 ? true : false;
    setDataForm({
        ...dataForm,
        [e.target.name]:e.target.value
    })
    if (e.target.name === 'email' ) { 
      console.log(isEmailValid)
        if (valueWithNoSpace && isThereaddress && justOneAt && isThereDomain && isThereTopLevelDomain) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
      }
  };

  const handleChangeUsername = (e) => {
    setDataForm({
        ...dataForm,
        [e.target.name]: e.target.value,
    })
  };

  const handleChangePassword = (e) => {
    const minLength = 8;
    const maxLength = 14;
    const containsNumber = e.target.value.match(/[1-9]/) ? true : false;
    const containsLetter = e.target.value.match(/[a-zA-Z]/) ? true : false;
    const uppercase = e.target.value.match(/[A-Z]/) ? true : false;
    setDataForm({
        ...dataForm,
        [e.target.name]: e.target.value,
    })
    console.log(e.target.name)
    if (e.target.name === 'password') {
        if (e.target.value.length < minLength || e.target.value.length > maxLength || !uppercase || !containsNumber) {
            setPasswordValid({
                ...isPasswordValid,
                characters: false,
                uppercase: false,
                number: false,
            });
        }
        if (e.target.value.length >= minLength && e.target.value.length <= maxLength) {
            setPasswordValid({
                ...isPasswordValid,
                characters: true,
                uppercase: false,
                number: false,
            });
        }
        if (uppercase) {
            setPasswordValid({
                ...isPasswordValid,
                characters: false,
                uppercase: true,
                number: false,
            });
        }
        if (containsNumber) {
            setPasswordValid({
                ...isPasswordValid,
                characters: false,
                uppercase: false,
                number: true,
            });
        }
        if (e.target.value.length >= minLength && e.target.value.length <= maxLength && uppercase) {
            setPasswordValid({
                ...isPasswordValid,
                characters: true,
                uppercase: true,
                number: false,
            })
        }
        if (e.target.value.length >= minLength && e.target.value.length <= maxLength && containsNumber) {
            setPasswordValid({
                ...isPasswordValid,
                characters: true,
                uppercase: false,
                number: true,
            })
        }
        if (uppercase && containsNumber) {
            setPasswordValid({
                ...isPasswordValid,
                characters: false,
                uppercase: true,
                number: true,
            })
        }
        if (e.target.value.length >= minLength && e.target.value.length <= maxLength && containsNumber && containsLetter && uppercase) {
            setPasswordValid({
                ...isPasswordValid,
                characters: true,
                uppercase: true,
                number: true,
            });
        }
    }
  };

  const handleChangeConfirmPassword = (e) => {
      const minLength = 8;
      const maxLength = 14;
      const containsNumber = e.target.value.match(/[1-9]/) ? true : false;
      const containsLetter = e.target.value.match(/[a-zA-Z]/) ? true : false;
      const uppercase = e.target.value.match(/[A-Z]/) ? true : false;
      setDataForm({
          ...dataForm,
          [e.target.name]: e.target.value,
      })
      if (e.target.name === 'passwordConfirm') {
          if (e.target.value.length < minLength || e.target.value.length > maxLength || !uppercase || !containsNumber) {
              setConfirmPasswordValid({
                  ...isPasswordValid,
                  characters: false,
                  uppercase: false,
                  number: false,
              });
          }
          if (e.target.value.length >= minLength && e.target.value.length <= maxLength) {
              setConfirmPasswordValid({
                  ...isPasswordValid,
                  characters: true,
                  uppercase: false,
                  number: false,
              });
          }
          if (uppercase) {
              setConfirmPasswordValid({
                  ...isPasswordValid,
                  characters: false,
                  uppercase: true,
                  number: false,
              });
          }
          if (containsNumber) {
              setConfirmPasswordValid({
                  ...isPasswordValid,
                  characters: false,
                  uppercase: false,
                  number: true,
              });
          }
          if (e.target.value.length >= minLength && e.target.value.length <= maxLength && uppercase) {
              setConfirmPasswordValid({
                  ...isPasswordValid,
                  characters: true,
                  uppercase: true,
                  number: false,
              })
          }
          if (e.target.value.length >= minLength && e.target.value.length <= maxLength && containsNumber) {
              setConfirmPasswordValid({
                  ...isPasswordValid,
                  characters: true,
                  uppercase: false,
                  number: true,
              })
          }
          if (uppercase && containsNumber) {
              setConfirmPasswordValid({
                  ...isPasswordValid,
                  characters: false,
                  uppercase: true,
                  number: true,
              })
          }
          if (e.target.value.length >= minLength && e.target.value.length <= maxLength && containsNumber && containsLetter && uppercase) {
              setConfirmPasswordValid({
                  ...isPasswordValid,
                  characters: true,
                  uppercase: true,
                  number: true,
              });
          }
      }
  };

  const handleSubmit = (e) => {
    console.log(dataForm.email)
    e.preventDefault();
    if ( isEmailValid && dataForm.password !== dataForm.passwordConfirm ) {
        setMessage({
            ...isMessage,
            message: "Password tidak sama",
        });
    } else if (!isEmailValid){
        setMessage({
            ...isMessage,
            message: "Gunakan format email dengan benar",
        });
    } else if ( isEmailValid && isPasswordValid.characters && isPasswordValid.number && isPasswordValid.uppercase && isConfirmPasswordValid.characters && isConfirmPasswordValid.number && isConfirmPasswordValid.uppercase ) {
        setLoading(true);

      // axios
      // .post("http://108.136.240.248/api/v1/auth/register", {dataForm.email })

        setMessage({
            ...isMessage,
            message: "Berhasil",
    }); 
    }
    
  }



  return (
    <ContainerAuth>
      {!isTabletOrMobile && <BannerAuth src="/login.svg" alt="login-photo" />}

      <FormAuth 
      onSubmit={handleSubmit}
      >
            {/* <HeaderAuthRegister
            title="Daftar Akun"
            validator={{ dataForm, isEmailValid, isPasswordValid, isConfirmPasswordValid }}
            /> */}
            <h1>Daftar Akun</h1>
            {isMessage.message && (
                <>
                <PopupValidation message={isMessage.message} />
                </>
            )}
            <ContainerInputAuth>

          <LabelAuth label="email" />
          <InputAuth type="text" id="email" name="email"
          placeholder="email" 
          onChange={handleChangeEmail} 
          />
          <span>
              {isMessage.message && (
                  <p>{isMessage.message}</p>
              )}
          </span>

          <LabelAuth label="full name" />
          <InputAuth type="text" id="username" 
          placeholder="username" onChange={handleChangeUsername} 
          />

          <LabelAuth label="password" />
          <InputAuthPassword type="password" id="password" 
          name="password"
          placeholder="password" onChange={(e) => {handleChangePassword(e)}} 
          />
          <span className={styles.validation}>
              { isPasswordValid.characters ? 
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
              { isPasswordValid.uppercase ?
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
              { isPasswordValid.number ?
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

          <LabelAuth label="ulangi password" />
          <InputAuthPassword type="password" id="passwordConfirm" 
          placeholder="password" name="passwordConfirm" onChange={handleChangeConfirmPassword} 
          />
          <span className={styles.validation}>
              { isConfirmPasswordValid.characters ? 
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
              { isConfirmPasswordValid.uppercase ?
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
              { isConfirmPasswordValid.number ?
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

        <ButtonAuth label="Daftar"
        // loading={loading} 
        />
        </ContainerInputAuth>
        
        <ToAnotherAuth label="Sudah Punya Akun ?" linkAnother="/login" toAnother="Masuk Disini" />
      </FormAuth>
    </ContainerAuth>
  )
}

export default Signup