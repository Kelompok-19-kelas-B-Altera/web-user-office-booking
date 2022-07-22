import Footer from "../Footer";
import LabelAuth from "../LabelAuth";
import InputAuth from "../InputAuth";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Home from "../../pages";
import axiosInstance from "../../networks/apis";
import Link from "next/link";
import { decodeToken } from "react-jwt";

const Profile = ({ emailUser, fullNameUser }) => {
  let [email, setEmail] = useState(emailUser);
  let [fullname, setFullname] = useState(fullNameUser);
  let [show, setShow] = useState(false);
  let [picture, setPicture] = useState();
  let [userImage, setUserImage] = useState();
  const decodedToken = decodeToken(Cookies.get("token"));
  // let [isEmailValid, setEmailValid] = useState(false);
  // let [isAllValid, setAllValid] = useState("");
  const router = useRouter();

  // const handleEmail = (e) => {
  //   const value = e.target.value;
  //   const valueWithNoSpace = value.includes(" ") ? false : true;
  //   const isThereaddress = value.split("@")[0] ? true : false;
  //   const justOneAt = value.match(/@/g)?.length === 1 ? true : false;
  //   const isThereDomain = value.split("@")[1]?.split(".")[0] ? true : false;
  //   const isThereTopLevelDomain = value.split(".")[1]?.length > 0 ? true : false;

  //   setEmail(value);
  //   isThereaddress && justOneAt && valueWithNoSpace && isThereDomain && isThereTopLevelDomain
  //     ? () => {setEmailValid(true); setAllValid("valid")}
  //     : setEmailValid(false);
  // };

  useEffect(() => {
    if (!Cookies.get("token")) {
      router.push("/");
      return (
        <>
          <Home />
        </>
      );
    }
  }, []);

  useEffect(() => {
    if (decodedToken) {
      axiosInstance
        .get(`/api/v1/user/management/${decodedToken?.id}`)
        .then((res) => {
          setUserImage(res.data.data.pic_url);
          console.log(res.data.data.pic_url);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [decodedToken]);

  const handleInputImage = (e) => {
    const formData = new FormData();
    formData.append("id_user", decodedToken?.id);
    formData.append("file", e?.target.files[0]);

    axiosInstance({
      method: "post",
      url: "/api/v1/user/image",
      data: formData,
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log(res, "res");
        location.reload()
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  useEffect(() => {
    handleInputImage();
    // let formData = new FormData();
    // formData.append("id_user", 1);
    // formData.append("file", picture);
    // console.log(formData)
    // axiosInstance({
    //   method: "post",
    //   url: "/api/v1/user/image",
    //   data: formData,
    //   headers: {
    //     Authorization: `Bearer ${Cookies.get("token")}`,
    //     "Content-Type": "multipart/form-data",
    //   },
    // })
    //   .then((res) => {
    //     console.log(res, "res");
    //   })
    //   .catch((err) => {
    //     console.log(err, "err");
    //   });
  }, [picture]);

  console.log(Cookies.get("token"));

  return (
    <>
      {!Cookies.get("token") ? (
        <>
          <Home />
        </>
      ) : (
        <div>
          <ConfirmationBox show={show} setShow={setShow} />
          <div className="flex justify-center">
            {/* <div className="absolute flex gap-[880px] xl:w-[90%] md:w-[92%] w-[95%] mt-9"> */}
            <div className="absolute flex gap-[880px] mt-9">
              <button
                className="bg-white w-[94px] h-[43px] border border-[#197BEB] rounded "
                onClick={() => {
                  setShow(true);
                }}
              >
                <p className="font-semibold md:text-base text-sm">Keluar</p>
              </button>
              <Link href="/">
                <a>
                  <img src="/officity-logo.svg" alt="logo" className="hover:cursor-pointer" />
                </a>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mx-auto md:w-[35%] w-full">
              <p className="text-center font-semibold text-[32px] leading-[38px] mb-8 mt-[58px]">
                Profile
              </p>
              <div className="flex justify-center mx-10 sm:mx-0 mb-8">
                <div className="relative bg-blue rounded-full sm:w-[255px] w-[50%] sm:h-[255px] h-[50%] mx-5 sm:mx-0">
                  {/* {axiosInstance
                    .get("/api/profile", {
                  } */}
                  <img src={userImage} className="object-cover rounded-full w-full h-full" />
                  <div className="relative">
                    <input
                      type="file"
                      className="absolute z-50 w-[45px] h-[55px] left-[105px] top-[-25px] opacity-0"
                      onChange={(e) => {
                        e.target.files[0] && (
                          <>
                            {handleInputImage(e)}
                            {setPicture(e.target.files[0])}
                          </>
                        );
                      }}
                    />
                    <img
                      src="/camera-icon.svg"
                      className="absolute m-auto left-0 right-0 bottom-0 translate-y-[22px]"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-full w-[80%] mx-auto">
                <LabelAuth label="email" />
                <input
                  type="text"
                  value={email}
                  className="block my-[10px] text-[16px] leading-5 font-normal px-[10px] py-[15px] w-full focus:outline-[#44a8ff]"
                />
                {/* <InputAuth
              type="text"
              id="email"
              value={email}
              placeholder="email"
              onChange={handleEmail}
              validators={[isEmailValid, isAllValid]}
              alertMessage="Gunakan format email dengan benar"
            /> */}
              </div>
              <div className="md:w-full w-[80%] mx-auto">
                <LabelAuth label="Full Name" />
                <input
                  type="text"
                  value={fullname}
                  className="block my-[10px] text-[16px] leading-5 font-normal px-[10px] py-[15px] w-full focus:outline-[#44a8ff]"
                />
                {/* <InputAuth
              type="text"
              id="fullname"
              value={fullname}
              placeholder="fullname"
              onChange={setFullname}
              validators={[isEmailValid, isAllValid]}
              alertMessage="Gunakan format email dengan benar"
            /> */}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Profile;

const ConfirmationBox = ({ show, setShow }) => {
  const router = useRouter();

  // Logika Keluar dari akun
  const handleKeluar = () => {
    Cookies.remove("token");
    router.push("/");
  };

  return (
    <>
      {show ? (
        <div className="fixed z-10 inset-0 overflow-y-auto bg-black/80">
          <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
            <div className="flex justify-center shadow-md">
              <div className="bg-white space-y-[14px] p-6">
                <p className="font-semibold text-[20px] md:text-[24px] leading-7 text-center">
                  Keluar dari akun
                </p>
                <p className="text-[#070723]/50 font-normal text-sm md:text-[20px] leading-6 text-center">
                  Apakah Anda yakin ingin keluar akun ?
                </p>
                <div className="flex justify-between mx-4 gap-2">
                  <button
                    className="md:py-4 py-2 md:px-8 px-4 bg-white border border-[#197BEB] rounded"
                    onClick={() => handleKeluar()}
                  >
                    <p className="text-[#197BEB]">Keluar akun</p>
                  </button>
                  <button
                    className="md:py-4 py-2 md:px-8 px-4 bg-[#197BEB] border border-[#197BEB] rounded"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <p className="text-white">Tetap disini</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
