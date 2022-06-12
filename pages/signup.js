import styles from '../styles/Signup.module.css'
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";

// components
import ButtonAuth from "../components/ButtonAuth";
import InputAuth from "../components/InputAuth";
import ContainerAuth from "../components/ContainerAuth";
import FormAuth from "../components/FormAuth";
import LabelAuth from "../components/LabelAuth";
import ToRegister from "../components/ToRegister";
import HeaderAuth from "../components/HeaderAuth";
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
  })

  const handleChangeEmail = (e) => {
    const value = e.target.value;
    const valueWithNoSpace = value.includes(" ") ? false : true;
    const isThereaddress = value.split("@")[0] ? true : false;
    const justOneAt = value.match(/@/g)?.length === 1 ? true : false;
    const isThereDomain = value.split("@")[1]?.split(".")[0] ? true : false;
    const isThereTopLevelDomain = value.split(".")[1]?.length > 0 ? true : false;
    setDataForm({
        ...dataForm,
        value
    })
    if (value === 'email' ) { 
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
        username: e.target.value,
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
    console.log("password", dataForm)
    console.log(e.target.name)
    if (e.target.name === 'password') {
        if (e.target.value.length < minLength || e.target.value.length > maxLength || !uppercase || !containsNumber) {
            setPasswordValid({
                ...isPasswordValid,
                characters: false,
                uppercase: false,
                number: false,
            });
            console.log("Gagal")
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
    e.preventDefault();
    if (isEmailValid && isPasswordValid.characters && isPasswordValid.number && isPasswordValid.uppercase && isConfirmPasswordValid.characters && isConfirmPasswordValid.number && isConfirmPasswordValid.uppercase) {
      setMessage({
        ...isMessage,
        message: "Berhasil",
    });
    }
  }



  return (
    <ContainerAuth>
      {/* {!isTabletOrMobile && <BannerAuth src="/login.svg" alt="login-photo" />} */}

      <FormAuth 
      onSubmit={handleSubmit}
      >
        {/* <HeaderAuth
          title="Daftar Akun"
          // validator={{ isUserExist, isAllValid, isEmailValid, isPasswordValid }}
        /> */}
        <h1 className={styles.title}>Daftar Akun</h1>
                    { isMessage.message &&
                        <div className={styles.message}>
                            <p className={styles.labelMessage}>{isMessage.message}</p>
                        </div>
                    }

        <ContainerInputAuth>
          <LabelAuth label="email" />
          <InputAuth type="text" id="email" 
          // value={email} 
          placeholder="email" 
          onChange={handleChangeEmail} 
          />

          <LabelAuth label="username" />
          <InputAuth type="text" id="username" 
          // value={password} 
          placeholder="username" onChange={handleChangeUsername} 
          />

          <LabelAuth label="password" />
          <InputAuth type="password" id="password" 
          // value={password} 
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

          <LabelAuth label="confirmPassword" />
          <InputAuth type="password" id="confirmPassword" 
          // value={password} 
          placeholder="password" onChange={handleChangeConfirmPassword} 
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
        </ContainerInputAuth>

        <ButtonAuth label="Masuk" 
        // loading={loading} 
        />
        
        <ToRegister />
      </FormAuth>
    </ContainerAuth>
  )
}

export default Signup