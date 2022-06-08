import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import axios from "axios";

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

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [isEmailValid, setEmailValid] = useState(false);
  let [isPasswordValid, setPasswordValid] = useState(false);
  let [isUserExist, setUserExist] = useState("");
  let [isAllValid, setAllValid] = useState("");
  let [loading, setLoading] = useState(false);

  const router = useRouter();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1280px)" });

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
        .post("http://108.136.240.248/api/v1/auth/login", { email, password })
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
        <HeaderAuth
          title="Masuk"
          validator={{ isUserExist, isAllValid, isEmailValid, isPasswordValid }}
        />

        <ContainerInputAuth>
          <LabelAuth label="email" />
          <InputAuth type="text" id="email" value={email} placeholder="email" onChange={handleEmail} />

          <LabelAuth label="password" />
          <InputAuth type="password" id="password" value={password} placeholder="password" onChange={handlePassword} />
        </ContainerInputAuth>

        <ButtonAuth label="Masuk" loading={loading} />
        
        <ToRegister />
      </FormAuth>
    </ContainerAuth>
  );
};

export default Login;
