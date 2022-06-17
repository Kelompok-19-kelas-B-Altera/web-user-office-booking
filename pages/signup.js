import styles from '../styles/Signup.module.css'
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";
import { useSelector } from 'react-redux';
import axios from 'axios';

// components
import ButtonAuth from "../components/ButtonAuth";
import InputAuth from "../components/InputAuth";
import InputAuthPassword from '../components/InputAuthPassword';
import ContainerAuth from "../components/ContainerAuth";
import FormAuth from "../components/FormAuth";
import LabelAuth from "../components/LabelAuth";
import ToAnotherAuth from "../components/ToAnotherAuth";
import PopupValidation from '../components/PopupValidation';
import BannerAuth from "../components/BannerAuth";
import ContainerInputAuth from "../components/ContainerInputAuth";
import ContainerHeaderInputButtonToAnotherAuth from '../components/ContainerHeaderInputButtonToAnotherAuth';
import ContainerHeaderInputButton from '../components/ContainerHeaderInputButton';
import HeaderAuth from '../components/HeaderAuthRegister';
import ContainerLabelInput from '../components/ContainerLabelInput';


const Signup = () => {
  const [dataForm, setDataForm] = useState({
    fullname: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [isEmailValid, setEmailValid] = useState(false);
  const [isFullnameValid, setFullnameValid] = useState(false);
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
  const [isMessage, setMessage] = useState("");
  const [isUserExist, setUserExist] = useState("");
  const [isAllValid, setAllValid] = useState("");
  const [loading, setLoading] = useState(false);
  
  const router = useRouter();
  const maxWidth = useSelector((state) => state.mediaQuery.maxWidth);
  const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${maxWidth}px)` });

  useEffect(() => {
      if (isUserExist === "doesn't exist") {
          router.push("/login");
      }
  }, [isUserExist])

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
        if (valueWithNoSpace && isThereaddress && justOneAt && isThereDomain && isThereTopLevelDomain) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
      }
  };

  const handleChangeFullname = (e) => {
    const containsLetter = e.target.value.match(/[^a-zA-Z\s]/) ? true : false;
    setDataForm({
        ...dataForm,
        [e.target.name]: e.target.value,
    })
    if (e.target.name === 'fullname') {
        if (e.target.value === '' || containsLetter ) {
            setFullnameValid(false);
        } else if (e.target.value !== '' || !containsLetter) {
            setFullnameValid(true);
        }
    }
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
    if (e.target.name === 'password') {
        if (e.target.value.length < minLength || e.target.value.length > maxLength || !uppercase || !containsNumber) {
            setPasswordValid({
                ...isPasswordValid,
                characters: false,
                uppercase: false,
                number: false,
            });
            console.log("gagal1")
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
    if ( isEmailValid && dataForm.password !== dataForm.passwordConfirm ) {
        setMessage("Gagal");
        console.log("Password beda cuy")
    } else if ( isEmailValid && isFullnameValid && isPasswordValid.characters && isPasswordValid.number && isPasswordValid.uppercase && isConfirmPasswordValid.characters && isConfirmPasswordValid.number && isConfirmPasswordValid.uppercase ) {
        setLoading(true);

      axios
      .post("http://108.136.240.248/api/v1/auth/register", {email:dataForm.email, fullname:dataForm.fullname, password:dataForm.password})
      .then((response) => {
          setUserExist("doesn't exist");
          setAllValid("valid");
          setLoading(false);
          console.log(response.data.data)
      })
      .catch((error) => {
          setUserExist("exists");
          setAllValid("valid");
          setLoading(false);
          console.log(error);
          console.log(isUserExist);
      });
        setMessage({
            ...isMessage,
            message: "Berhasil",
    }); 
    } else {
        setAllValid("not valid");
        setUserExist("");
    }
  };
    



  return (
    <ContainerAuth>
      {!isTabletOrMobile && <BannerAuth src="/signup.svg" alt="login-photo" />}
      <FormAuth onSubmit={handleSubmit}>
        <ContainerHeaderInputButtonToAnotherAuth>
            <ContainerHeaderInputButton>
            <HeaderAuth
                title="Daftar Akun"
                titleMobile="Daftar"
                validators={[isUserExist, isMessage]}
                // messages={["Anda telah terdaftar", "Login disini"]}
                linkTo="/login"
            />
    
            <ContainerInputAuth>
                <ContainerLabelInput>
                    <LabelAuth label="email" />
                    <InputAuth 
                    type="text" 
                    id="email" 
                    name="email"
                    value={dataForm.email}
                    placeholder="email" 
                    onChange={handleChangeEmail} 
                    validators={[isEmailValid, isAllValid]}
                    alertMessage="Gunakan format email dengan benar"
                    />
                </ContainerLabelInput>
                <ContainerLabelInput>
                    <LabelAuth label="full name" />
                    <InputAuth 
                    type="text" 
                    id="fullname" 
                    name="fullname"
                    value={dataForm.fullname}
                    placeholder="fullname" 
                    onChange={handleChangeFullname}
                    validators={[isFullnameValid, isAllValid]} 
                    alertMessage="Masukkan nama anda"
                    />
                </ContainerLabelInput>
                <ContainerLabelInput>
                    <LabelAuth label="password" />
                    <InputAuthPassword
                    type="password" 
                    id="password" 
                    name="password"
                    value={dataForm.password}
                    placeholder="password" 
                    onChange={handleChangePassword}
                    validators={[isPasswordValid.characters, isAllValid] && [isPasswordValid.uppercase, isAllValid] && [isPasswordValid.number, isAllValid]}
                    subValidators={[isPasswordValid.characters, isPasswordValid.uppercase, isPasswordValid.number]}
                    alertMessage="Gunakan format password dengan benar"
                    />
                </ContainerLabelInput>
                <ContainerLabelInput>
                    <LabelAuth label="ulangi password" />
                    <InputAuthPassword
                    type="password" 
                    id="passwordConfirm" 
                    placeholder="password" 
                    name="passwordConfirm" 
                    value={dataForm.passwordConfirm}
                    onChange={handleChangeConfirmPassword}
                    validators={[isConfirmPasswordValid.characters, isAllValid] && [isConfirmPasswordValid.uppercase, isAllValid] && [isConfirmPasswordValid.number, isAllValid]}
                    subValidators={[isConfirmPasswordValid.characters, isConfirmPasswordValid.uppercase, isConfirmPasswordValid.number]}
                    alertMessage="Gunakan format password dengan benar" 
                    />
                </ContainerLabelInput>
            </ContainerInputAuth>
            <ButtonAuth label="Daftar" loading={loading} />
        </ContainerHeaderInputButton>
        <ToAnotherAuth label="Sudah Punya Akun ?" linkAnother="/login" toAnother="Masuk Disini" />
      </ContainerHeaderInputButtonToAnotherAuth>
      </FormAuth>
    </ContainerAuth>
  )
}

export default Signup