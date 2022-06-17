import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import axios from "axios";

// components
import ButtonAuth from "../components/ButtonAuth";
import InputAuth from "../components/InputAuth";
import ContainerAuth from "../components/ContainerAuth";
import FormAuth from "../components/FormAuth";
import LabelAuth from "../components/LabelAuth";
import ToAnotherAuth from "../components/ToAnotherAuth";
import HeaderAuth from "../components/HeaderAuth";
import BannerAuth from "../components/BannerAuth";
import ContainerInputAuth from "../components/ContainerInputAuth";
import ContainerHeaderInputButtonToAnotherAuth from "../components/ContainerHeaderInputButtonToAnotherAuth";
import ContainerHeaderInputButton from "../components/ContainerHeaderInputButton";
import ContainerLabelInput from "../components/ContainerLabelInput";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [isEmailValid, setEmailValid] = useState(false);
  let [isPasswordValid, setPasswordValid] = useState(false);
  let [isUserExist, setUserExist] = useState("");
  let [isAllValid, setAllValid] = useState("");
  let [loading, setLoading] = useState(false);

  const router = useRouter();
  const maxWidth = useSelector((state) => state.mediaQuery.maxWidth);
  const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${maxWidth}px)` });

  useEffect(() => {
    if (isUserExist === "exists") {
      router.push("/");
    }
  }, [isUserExist]);

  const handleEmail = (e) => {
    const value = e.target.value;
    const valueWithNoSpace = value.includes(" ") ? false : true;
    const isThereaddress = value.split("@")[0] ? true : false;
    const justOneAt = value.match(/@/g)?.length === 1 ? true : false;
    const isThereDomain = value.split("@")[1]?.split(".")[0] ? true : false;
    const isThereTopLevelDomain = value.split(".")[1]?.length > 0 ? true : false;

    setEmail(value);
    isThereaddress && justOneAt && valueWithNoSpace && isThereDomain && isThereTopLevelDomain
      ? setEmailValid(true)
      : setEmailValid(false);
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    const minLength = 8;
    const maxLength = 14;
    const containsNumber = value.match(/[1-9]/) ? true : false;
    const containsLetter = value.match(/[a-zA-Z]/) ? true : false;

    setPassword(value);
    value.length >= minLength && value.length <= maxLength && containsLetter && containsNumber
      ? setPasswordValid(true)
      : setPasswordValid(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) {
      return;
    }

    if (isEmailValid && isPasswordValid) {
      setLoading(true);

      axios
        .post("/api/v1/auth/login", { email, password })
        .then((response) => {
          setUserExist("exists");
          setAllValid("valid");
          setLoading(false);
          Cookies.set("token", response.data.data.token);
        })
        .catch((error) => {
          setUserExist("doesn't exist");
          setAllValid("valid");
          setLoading(false);
          console.log(error);
        });
    } else {
      setAllValid("not valid");
      setUserExist("");
    }
  };

  return (
    <ContainerAuth>
      {!isTabletOrMobile && <BannerAuth src="/login.svg" alt="login-photo" />}

      <FormAuth onSubmit={handleSubmit}>
        <ContainerHeaderInputButtonToAnotherAuth>
          <ContainerHeaderInputButton>
            <HeaderAuth
              title="Masuk Akun"
              titleMobile="Masuk"
              validators={[isUserExist, "doesn't exist"]}
              messages={["Anda belum memiliki akun", "Signup di sini"]}
              linkTo="/signup"
            />

            <ContainerInputAuth>
              <ContainerLabelInput>
                <LabelAuth label="email" />
                <InputAuth
                  type="text"
                  id="email"
                  value={email}
                  placeholder="email"
                  onChange={handleEmail}
                  validators={[isEmailValid, isAllValid]}
                  alertMessage="Gunakan format email dengan benar"
                />
              </ContainerLabelInput>
              <ContainerLabelInput>
                <LabelAuth label="password" />
                <InputAuth
                  type="password"
                  id="password"
                  value={password}
                  placeholder="password"
                  onChange={handlePassword}
                  validators={[isPasswordValid, isAllValid]}
                  alertMessage="Periksa kembali password anda"
                />
              </ContainerLabelInput>
            </ContainerInputAuth>

            <ButtonAuth label="Masuk" loading={loading} />
          </ContainerHeaderInputButton>
          <ToAnotherAuth label="Belum memiliki akun?" linkAnother="/signup" toAnother="Daftar di sini" />
        </ContainerHeaderInputButtonToAnotherAuth>
      </FormAuth>
    </ContainerAuth>
  );
};

export default Login;
