import styles from "./LiveChat.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { handleToggleChat } from "../../redux/features/LiveChatSlice";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Link from "next/link";
import { useQuery, useMutation } from "@apollo/client";
import {
  GET_CHAT_BY_ROOM_ID,
  GET_CHAT_BY_USER_AND_BUILDING_ID,
  GET_CHAT_ROOM_USER_CONTAIN,
  SEND_MESSAGE,
} from "../../networks/graphql/gql";
import { decodeToken } from "react-jwt";

const LiveChat = ({ idBuilding, nameBuilding, addressBuilding, imagesBuilding }) => {
  // let [showChat, setShowChat] = useState(false);
  let [showChatting, setShowChatting] = useState(false);
  let [showContactChat, setShowContactChat] = useState(false);

  const showChat = useSelector((state) => state.liveChat.toggleChat);
  const dispatch = useDispatch();

  const decodedToken = decodeToken(Cookies.get("token"));
  let [buildingData, setBuildingData] = useState({
    idChatRoom: 0,
    name: "",
    address: "",
    image: "",
  });
  let [dataForSendMessage, setDataForSendMessage] = useState({
    idTarget: 0,
    idBuilding: 0,
    message: "",
  });

  const {
    loading: chatRoomLoading,
    error: chatRoomError,
    data: chatRoomData,
  } = useQuery(GET_CHAT_ROOM_USER_CONTAIN, {
    variables: { idUser: decodedToken?.id },
    pollInterval: 3000,
  });
  // const {
  //   loading: chatLoading,
  //   error: chatError,
  //   data: chatData,
  // } = useQuery(GET_CHAT_BY_ROOM_ID, {
  //   variables: { idChatRoom: buildingData.idChatRoom },
  //   pollInterval: 3000,
  // });
  const {
    loading: chatLoading,
    error: chatError,
    data: chatData,
  } = useQuery(GET_CHAT_BY_USER_AND_BUILDING_ID, {
    variables: {
      idSender: decodedToken?.id,
      idTarget: dataForSendMessage.idTarget,
      idBuilding: dataForSendMessage.idBuilding,
    },
    pollInterval: 3000,
  });
  const [sendMessage, { loading: sendLoading, error: sendError, data: sendData }] =
    useMutation(SEND_MESSAGE);
  const router = useRouter();

  useEffect(() => {
    if (document.getElementById("scrollbar")) {
      return (document.getElementById("scrollbar").scrollTop =
        document.getElementById("scrollbar").scrollHeight);
    }
  }, [buildingData, chatData]);
  useEffect(() => {
    if (showChat && document) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showChat]);
  
  useEffect(() => {
    if(imagesBuilding !== undefined) {

      setBuildingData({
        name: nameBuilding,
        address: addressBuilding,
        image: imagesBuilding === undefined ? "" : imagesBuilding[0]?.image_url,
      });
      setDataForSendMessage({
        ...dataForSendMessage,
        idTarget: 1,
        idBuilding: idBuilding,
      });
    }
  }, [nameBuilding, addressBuilding, imagesBuilding]);

  const handleBack = () => {
    // setShowChat(false);
    dispatch(handleToggleChat());
    setShowChatting(false);
  };

  const handleChat = (e) => {
    // console.log(e.currentTarget.id);
    setShowChatting(true);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (dataForSendMessage.message !== "") {
      sendMessage({
        variables: {
          idSender: decodedToken?.id,
          idTarget: dataForSendMessage.idTarget,
          idBuilding: dataForSendMessage.idBuilding,
          message: dataForSendMessage.message,
        },
      });
      setDataForSendMessage({ ...dataForSendMessage, message: "" });
    }
  };

  return (
    <div className={`${showChat ? styles.containerChatComponent : "w-0 h-0"} fixed z-50`}>
      {/* Desktop */}
      <div
        className={`${styles.container} ${
          showChat ? styles.widthHeightContainer : "w-0 h-0"
        } hidden 2xl:flex fixed flex-col items-end`}
      >
        {showChat && (
          <>
            <section className={`${styles.containerChatBox} bg-grey flex absolute z-10`}>
              {/* LeftSide */}
              {showContactChat && (
                <div className={`h-full bg-white`} style={{ width: "219px", borderRadius: "6px" }}>
                  <div
                    className="font-semibold text-2xl bg-white"
                    style={{
                      width: "100%",
                      height: "76px",
                      padding: "21px 16px",
                      borderBottom: ".5px solid var(--color-secondary)",
                      borderRadius: "6px 0 0 0",
                    }}
                  >
                    Chat
                  </div>
                  {!Cookies.get("token") ? (
                    <>
                      <img src="/chat-room-not-login.svg" />
                      <img src="/chat-room-not-login.svg" />
                      <img src="/chat-room-not-login.svg" />
                      <img src="/chat-room-not-login.svg" />
                    </>
                  ) : (
                    <div className={`h-[83%] bg-white overflow-auto ${styles.containerLeft}`}>
                      {chatRoomData?.getAllChatroomByUsersIdContaining.map((e) => (
                        <div
                          className={`${styles.buildingBox} flex items-center bg-white hover:cursor-pointer`}
                          style={{ padding: "10px" }}
                          key={e.id}
                          onClick={() => {
                            console.log(e);
                            console.log(e.building.id);
                            setBuildingData({
                              idChatRoom: e.id,
                              name: e.building.name,
                              address: e.building.address,
                              image: e.building.image,
                            });
                            setDataForSendMessage({
                              idTarget: 1,
                              idBuilding: Number(e.building.id),
                              message: "",
                            });
                          }}
                        >
                          <img
                            src={e.building.image}
                            alt="building-image"
                            className="object-cover"
                            style={{
                              width: "45px",
                              height: "45px",
                              borderRadius: "50%",
                              marginRight: "14px",
                            }}
                          />
                          <span>
                            <h1 className={`${styles.buildingName} text-xs font-normal`}>
                              {e.building.name}
                            </h1>
                            <p className={`${styles.buildingLocation}`}>{e.building.address}</p>
                          </span>
                          <p
                            className="text-secondary"
                            style={{ fontSize: "8px", marginLeft: "17px" }}
                          >
                            08.00
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
              {/* LeftSide */}

              {/* RightSide */}
              {!Cookies.get("token") ? (
                <div>
                  {/* Header */}
                  <section
                    className="flex items-center bg-white"
                    style={{
                      width: "100%",
                      height: "76px",
                      padding: "10px 23px 9px 16px",
                      borderRadius: "6px",
                    }}
                  >
                    <button style={{ marginRight: "10px" }}>
                      <img
                        src="/open-close-left-chat.svg"
                        alt="open-close-left-chat"
                        className={showContactChat && "rotate-180"}
                        onClick={() => setShowContactChat(!showContactChat)}
                      />
                    </button>
                    <div
                      style={{
                        width: "160px",
                        height: "57px",
                        borderRadius: "50%",
                        marginRight: "14px",
                      }}
                    ></div>
                    <button style={{ marginLeft: "255px" }}>
                      <img
                        src="/close-chat.svg"
                        alt="close-chat"
                        onClick={() => dispatch(handleToggleChat())}
                      />
                    </button>
                  </section>
                  {/* Header */}
                  <div className="flex flex-col justify-center items-center h-[375px] gap-[32px]">
                    <p className="text-[#07072380] text-base font-normal">Anda belum masuk akun</p>
                    <div className="flex gap-2">
                      <Link href="/login">
                        <a>
                          <button className="w-[90px] h-[36px] font-sans bg-[#197BEB] text-white rounded-sm flex justify-center items-center">
                            Masuk
                          </button>
                        </a>
                      </Link>
                      <Link href="/signup">
                        <a>
                          <button className="w-[90px] h-[36px] font-sans border border-[#197BEB] text-[#197BEB] rounded-sm flex justify-center items-center">
                            Daftar
                          </button>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full relative" style={{ borderRadius: "6px" }}>
                  {/* Header */}
                  {buildingData.idChatRoom === 0 ? (
                    <section
                      className="flex items-center bg-white"
                      style={{
                        width: "100%",
                        height: "76px",
                        padding: "10px 23px 9px 16px",
                        borderRadius: "6px",
                      }}
                    >
                      <button style={{ marginRight: "10px" }}>
                        <img
                          src="/open-close-left-chat.svg"
                          alt="open-close-left-chat"
                          className={showContactChat && "rotate-180"}
                          onClick={() => setShowContactChat(!showContactChat)}
                        />
                      </button>
                      <div
                        style={{
                          width: "160px",
                          height: "57px",
                          borderRadius: "50%",
                          marginRight: "14px",
                        }}
                      ></div>
                      <button style={{ marginLeft: "255px" }}>
                        <img
                          src="/close-chat.svg"
                          alt="close-chat"
                          onClick={() => dispatch(handleToggleChat())}
                        />
                      </button>
                    </section>
                  ) : (
                    <section
                      className="flex items-center bg-white"
                      style={{
                        width: "100%",
                        height: "76px",
                        padding: "10px 23px 9px 16px",
                        borderRadius: "6px",
                      }}
                    >
                      <button style={{ marginRight: "10px" }}>
                        <img
                          src="/open-close-left-chat.svg"
                          alt="open-close-left-chat"
                          className={showContactChat && "rotate-180"}
                          onClick={() => setShowContactChat(!showContactChat)}
                        />
                      </button>
                      <img
                        src={buildingData.image}
                        className="object-cover"
                        style={{
                          width: "57px",
                          height: "57px",
                          borderRadius: "50%",
                          marginRight: "14px",
                        }}
                      />
                      <div>
                        <h1 className="text-base font-normal">
                          {buildingData.name?.length > 20 ? (
                            <>
                              {buildingData.name.split("").map((e, index) => (
                                <>{index > 20 ? "" : e}</>
                              ))}
                              ...
                            </>
                          ) : (
                            buildingData.name
                          )}
                        </h1>
                        <p className="text-xs font-normal">
                          {buildingData.address?.length > 20 ? (
                            <>
                              {buildingData.address.split("").map((e, index) => (
                                <>{index > 20 ? "" : e}</>
                              ))}
                              ...
                            </>
                          ) : (
                            buildingData.address
                          )}
                        </p>
                      </div>
                      <button style={{ marginLeft: "255px" }}>
                        <img
                          src="/close-chat.svg"
                          alt="close-chat"
                          onClick={() => dispatch(handleToggleChat())}
                        />
                      </button>
                    </section>
                  )}
                  {/* Header */}

                  {/* Messages */}
                  <section
                    id="scrollbar"
                    className={`${styles.containerMessages} bg-grey overflow-auto`}
                    style={{ height: "calc(100% - 170px)", borderRadius: "6px" }}
                  >
                    <div style={{ padding: "0 30px" }}>
                      {chatData?.getAllChatByUsersIdAndBuildingId.map((e) => (
                        <>
                          {console.log(e.sender.id === decodedToken.id)}
                          {console.log(Number(e.sender.id), decodedToken.id)}
                          {Number(e.sender.id) === decodedToken.id ? (
                            <>
                              {/* sender */}
                              <div className="w-full flex justify-end" style={{ margin: "5px 0" }}>
                                <p
                                  className="bg-blue text-white text-xs flex justify-end items-center max-w-[277px]"
                                  style={{
                                    // width: "277px",
                                    padding: "10px 30px",
                                    borderRadius: "6px",
                                  }}
                                >
                                  {e.message}
                                </p>
                              </div>
                              {/* sender */}
                            </>
                          ) : (
                            <>
                              {/* target */}
                              <div
                                className="w-full flex justify-start"
                                style={{ margin: "5px 0" }}
                              >
                                <p
                                  className="bg-white text-black text-xs flex items-center max-w-[277px]"
                                  style={{
                                    // width: "277px",
                                    padding: "10px 30px",
                                    borderRadius: "6px",
                                  }}
                                >
                                  {e.message}
                                </p>
                              </div>
                              {/* target */}
                            </>
                          )}
                        </>
                      ))}
                    </div>

                    <section
                      className="absolute right-0 bottom-0 w-full bg-grey flex justify-center"
                      style={{ paddingBottom: "28px", borderRadius: "6px" }}
                    >
                      <form
                        onSubmit={(e) => {
                          handleSend(e);
                        }}
                        className="bg-white flex justify-center items-center rounded"
                        style={{ maxWidth: "450px", width: "100%", padding: "5px 5px 5px 10px" }}
                      >
                        <input
                          type="text"
                          placeholder="Ketik sesuatu ..."
                          className="focus:outline-none"
                          style={{ width: "450px", height: "30px", fontSize: "10px" }}
                          value={dataForSendMessage.message}
                          onChange={(e) => {
                            setDataForSendMessage({
                              ...dataForSendMessage,
                              message: e.target.value,
                            });
                          }}
                        />
                        <button
                          type="submit"
                          className="bg-blue w-25 h-25 flex justify-center items-center rounded"
                          style={{ padding: "5px" }}
                        >
                          <img src="/send.svg" alt="send" />
                        </button>
                      </form>
                    </section>
                  </section>
                  {/* Messages */}
                  {/* RightSide */}
                </div>
              )}
            </section>
            <div className={`${styles.triangle} bg-grey absolute`}></div>
          </>
        )}
        <div
          className={`${styles.containerButton} absolute bg-white flex flex-row justify-center items-center gap-2.5`}
          onClick={() => {
            dispatch(handleToggleChat());
          }}
        >
          <img src="/chat.svg" alt="chat" />
          Chat
        </div>
      </div>

      {/* Mobile */}
      {showChat && (
        <div className="h-full w-full bg-white absolute 2xl:hidden z-10 flex justify-center">
          <div className={`${styles.containerMobile} relative `}>
            {showChatting && (
              <section className="h-screen w-full absolute z-10 bg-grey">
                <div
                  className="bg-white relative flex items-center justify-center font-semibold text-sm py-2.5 shadow"
                  style={{ borderRadius: "0px 0px 10px 10px" }}
                >
                  <img
                    src="/arrow-back.svg"
                    alt="arrow-back"
                    className="absolute inset-x-3"
                    onClick={() => setShowChatting(false)}
                  />
                  <div className="flex gap-3" style={{ width: "calc(100% - 60px)" }}>
                    <Image
                      src="/login.svg"
                      alt="building-photo"
                      width={60}
                      height={60}
                      objectFit={"cover"}
                      className="rounded"
                    />
                    <div className="my-auto">
                      <h1 className="text-dark-blue">Sejahtera Thamrin</h1>
                      <p className="flex text-secondary" style={{ fontSize: "8px" }}>
                        <img src="/location.svg" alt="location" style={{ marginRight: "2px" }} />
                        Cilandak, Jakarta Selatan
                      </p>
                    </div>
                  </div>
                </div>
                <section
                  className={`${styles.containerMessages} w-full overflow-auto`}
                  style={{ height: "calc(100% - 180px)" }}
                >
                  {/* user */}
                  <div className="w-full flex justify-end">
                    <div
                      className="bg-blue text-grey mt-2 mr-3"
                      style={{
                        maxWidth: "187px",
                        fontSize: "10px",
                        padding: "10px",
                        borderRadius: "10px 0px 10px 10px",
                      }}
                    >
                      Halo mint, masih ada ga ya ruangan agak besar muatan 100 orang gitu?
                    </div>
                  </div>
                  {/* user */}

                  {/* admin */}
                  <div className="w-full flex justify-start">
                    <div
                      className="bg-white text-dark-blue mt-2 ml-3"
                      style={{
                        maxWidth: "187px",
                        fontSize: "10px",
                        padding: "10px",
                        borderRadius: "0px 10px 10px 10px",
                      }}
                    >
                      Tanggal berapa dek ? jelas jelas tolong kalo nanya, gua pukul y
                    </div>
                  </div>
                  {/* admin */}

                  {/* user */}
                  <div className="w-full flex justify-end">
                    <div
                      className="bg-blue text-grey mt-2 mr-3"
                      style={{
                        maxWidth: "187px",
                        fontSize: "10px",
                        padding: "10px",
                        borderRadius: "10px 0px 10px 10px",
                      }}
                    >
                      Halo mint, masih ada ga ya ruangan agak besar muatan 100 orang gitu?
                    </div>
                  </div>
                  {/* user */}

                  {/* admin */}
                  <div className="w-full flex justify-start">
                    <div
                      className="bg-white text-dark-blue mt-2 ml-3"
                      style={{
                        maxWidth: "187px",
                        fontSize: "10px",
                        padding: "10px",
                        borderRadius: "0px 10px 10px 10px",
                      }}
                    >
                      Tanggal berapa dek ? jelas jelas tolong kalo nanya, gua pukul y
                    </div>
                  </div>
                  {/* admin */}

                  {/* user */}
                  <div className="w-full flex justify-end">
                    <div
                      className="bg-blue text-grey mt-2 mr-3"
                      style={{
                        maxWidth: "187px",
                        fontSize: "10px",
                        padding: "10px",
                        borderRadius: "10px 0px 10px 10px",
                      }}
                    >
                      Halo mint, masih ada ga ya ruangan agak besar muatan 100 orang gitu?
                    </div>
                  </div>
                  {/* user */}

                  {/* admin */}
                  <div className="w-full flex justify-start">
                    <div
                      className="bg-white text-dark-blue mt-2 ml-3"
                      style={{
                        maxWidth: "187px",
                        fontSize: "10px",
                        padding: "10px",
                        borderRadius: "0px 10px 10px 10px",
                      }}
                    >
                      Tanggal berapa dek ? jelas jelas tolong kalo nanya, gua pukul y
                    </div>
                  </div>
                  {/* admin */}

                  {/* user */}
                  <div className="w-full flex justify-end">
                    <div
                      className="bg-blue text-grey mt-2 mr-3"
                      style={{
                        maxWidth: "187px",
                        fontSize: "10px",
                        padding: "10px",
                        borderRadius: "10px 0px 10px 10px",
                      }}
                    >
                      Halo mint, masih ada ga ya ruangan agak besar muatan 100 orang gitu?
                    </div>
                  </div>
                  {/* user */}

                  {/* admin */}
                  <div className="w-full flex justify-start">
                    <div
                      className="bg-white text-dark-blue mt-2 ml-3"
                      style={{
                        maxWidth: "187px",
                        fontSize: "10px",
                        padding: "10px",
                        borderRadius: "0px 10px 10px 10px",
                      }}
                    >
                      Tanggal berapa dek ? jelas jelas tolong kalo nanya, gua pukul y
                    </div>
                  </div>
                  {/* admin */}

                  {/* user */}
                  <div className="w-full flex justify-end">
                    <div
                      className="bg-blue text-grey mt-2 mr-3"
                      style={{
                        maxWidth: "187px",
                        fontSize: "10px",
                        padding: "10px",
                        borderRadius: "10px 0px 10px 10px",
                      }}
                    >
                      Halo mint, masih ada ga ya ruangan agak besar muatan 100 orang gitu?
                    </div>
                  </div>
                  {/* user */}

                  {/* admin */}
                  <div className="w-full flex justify-start">
                    <div
                      className="bg-white text-dark-blue mt-2 ml-3"
                      style={{
                        maxWidth: "187px",
                        fontSize: "10px",
                        padding: "10px",
                        borderRadius: "0px 10px 10px 10px",
                      }}
                    >
                      Tanggal berapa dek ? jelas jelas tolong kalo nanya, gua pukul y
                    </div>
                  </div>
                  {/* admin */}

                  {/* user */}
                  <div className="w-full flex justify-end">
                    <div
                      className="bg-blue text-grey mt-2 mr-3"
                      style={{
                        maxWidth: "187px",
                        fontSize: "10px",
                        padding: "10px",
                        borderRadius: "10px 0px 10px 10px",
                      }}
                    >
                      Halo mint, masih ada ga ya ruangan agak besar muatan 100 orang gitu?
                    </div>
                  </div>
                  {/* user */}

                  {/* admin */}
                  <div className="w-full flex justify-start">
                    <div
                      className="bg-white text-dark-blue mt-2 ml-3"
                      style={{
                        maxWidth: "187px",
                        fontSize: "10px",
                        padding: "10px",
                        borderRadius: "0px 10px 10px 10px",
                      }}
                    >
                      Tanggal berapa dek ? jelas jelas tolong kalo nanya, gua pukul y
                    </div>
                  </div>
                  {/* admin */}

                  {/* user */}
                  <div className="w-full flex justify-end">
                    <div
                      className="bg-blue text-grey mt-2 mr-3"
                      style={{
                        maxWidth: "187px",
                        fontSize: "10px",
                        padding: "10px",
                        borderRadius: "10px 0px 10px 10px",
                      }}
                    >
                      Halo mint, masih ada ga ya ruangan agak besar muatan 100 orang gitu?
                    </div>
                  </div>
                  {/* user */}

                  {/* admin */}
                  <div className="w-full flex justify-start">
                    <div
                      className="bg-white text-dark-blue mt-2 ml-3"
                      style={{
                        maxWidth: "187px",
                        fontSize: "10px",
                        padding: "10px",
                        borderRadius: "0px 10px 10px 10px",
                      }}
                    >
                      Tanggal berapa dek ? jelas jelas tolong kalo nanya, gua pukul y
                    </div>
                  </div>
                  {/* admin */}

                  {/* user */}
                  <div className="w-full flex justify-end">
                    <div
                      className="bg-blue text-grey mt-2 mr-3"
                      style={{
                        maxWidth: "187px",
                        fontSize: "10px",
                        padding: "10px",
                        borderRadius: "10px 0px 10px 10px",
                      }}
                    >
                      Halo mint, masih ada ga ya ruangan agak besar muatan 100 orang gitu?
                    </div>
                  </div>
                  {/* user */}

                  {/* admin */}
                  <div className="w-full flex justify-start">
                    <div
                      className="bg-white text-dark-blue mt-2 ml-3"
                      style={{
                        maxWidth: "187px",
                        fontSize: "10px",
                        padding: "10px",
                        borderRadius: "0px 10px 10px 10px",
                      }}
                    >
                      Tanggal berapa dek ? jelas jelas tolong kalo nanya, gua pukul y
                    </div>
                  </div>
                  {/* admin */}

                  {/* user */}
                  <div className="w-full flex justify-end">
                    <div
                      className="bg-blue text-grey mt-2 mr-3"
                      style={{
                        maxWidth: "187px",
                        fontSize: "10px",
                        padding: "10px",
                        borderRadius: "10px 0px 10px 10px",
                      }}
                    >
                      Halo mint, masih ada ga ya ruangan agak besar muatan 100 orang gitu?
                    </div>
                  </div>
                  {/* user */}

                  {/* admin */}
                  <div className="w-full flex justify-start">
                    <div
                      className="bg-white text-dark-blue mt-2 ml-3"
                      style={{
                        maxWidth: "187px",
                        fontSize: "10px",
                        padding: "10px",
                        borderRadius: "0px 10px 10px 10px",
                      }}
                    >
                      Tanggal berapa dek ? jelas jelas tolong kalo nanya, gua pukul y
                    </div>
                  </div>
                  {/* admin */}

                  {/* user */}
                  <div className="w-full flex justify-end">
                    <div
                      className="bg-blue text-grey mt-2 mr-3"
                      style={{
                        maxWidth: "187px",
                        fontSize: "10px",
                        padding: "10px",
                        borderRadius: "10px 0px 10px 10px",
                      }}
                    >
                      Halo mint, masih ada ga ya ruangan agak besar muatan 100 orang gitu?
                    </div>
                  </div>
                  {/* user */}

                  {/* admin */}
                  <div className="w-full flex justify-start">
                    <div
                      className="bg-white text-dark-blue mt-2 ml-3"
                      style={{
                        maxWidth: "187px",
                        fontSize: "10px",
                        padding: "10px",
                        borderRadius: "0px 10px 10px 10px",
                      }}
                    >
                      Tanggal berapa dek ? jelas jelas tolong kalo nanya, gua pukul y
                    </div>
                  </div>
                  {/* admin */}

                  {/* user */}
                  <div className="w-full flex justify-end">
                    <div
                      className="bg-blue text-grey mt-2 mr-3"
                      style={{
                        maxWidth: "187px",
                        fontSize: "10px",
                        padding: "10px",
                        borderRadius: "10px 0px 10px 10px",
                      }}
                    >
                      Halo mint, masih ada ga ya ruangan agak besar muatan 100 orang gitu?
                    </div>
                  </div>
                  {/* user */}

                  {/* admin */}
                  <div className="w-full flex justify-start">
                    <div
                      className="bg-white text-dark-blue mt-2 ml-3"
                      style={{
                        maxWidth: "187px",
                        fontSize: "10px",
                        padding: "10px",
                        borderRadius: "0px 10px 10px 10px",
                      }}
                    >
                      Tanggal berapa dek ? jelas jelas tolong kalo nanya, gua pukul y
                    </div>
                  </div>
                  {/* admin */}
                </section>
                <section
                  className="absolute bottom-0 w-full bg-grey flex justify-center"
                  style={{ paddingBottom: "23px" }}
                >
                  <div
                    className="bg-white flex justify-center items-center rounded"
                    style={{ maxWidth: "336px", width: "100%", padding: "5px 5px 5px 10px" }}
                  >
                    <input
                      type="text"
                      placeholder="Ketik sesuatu ..."
                      className="focus:outline-none"
                      style={{ width: "281px", height: "30px", fontSize: "10px" }}
                    />
                    <button className="bg-blue w-10 h-10 flex justify-center items-center rounded">
                      <img src="/send.svg" alt="send" />
                    </button>
                  </div>
                </section>
              </section>
            )}
            <div
              className="relative flex items-center justify-center font-semibold text-sm py-2.5 shadow"
              style={{ borderRadius: "0px 0px 10px 10px" }}
            >
              <img
                src="/arrow-back.svg"
                alt="arrow-back"
                className="absolute inset-x-3"
                onClick={() => handleBack()}
              />
              <p className="text-dark-blue">Chat</p>
            </div>
            <div
              className="pt-3 w-full"
              id="Sejahtera Thamrin"
              onClick={(e) => {
                handleChat(e);
              }}
            >
              <div className="flex px-3">
                <Image
                  src="/login.svg"
                  width={60}
                  height={60}
                  objectFit={"cover"}
                  className="rounded-md"
                />
                <div className={`${styles.boxMessage} flex flex-col justify-between relative`}>
                  <h1 className="font-semibold text-sm text-dark-blue">Sejahtera Thamrin</h1>
                  <p className={`${styles.message} font-normal text-dark-blue`}>
                    Apakah ada kosong ?
                  </p>
                  <p
                    className={`${styles.date} hidden font-normal absolute text-dark-blue tiny:block`}
                  >
                    1 Dec
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.newChat} absolute bottom-0 flex flex-col justify-center items-center w-full bg-white text-blue text-sm font-normal`}
          >
            <Image src="/chat-mobile-blue.svg" width={24} height={24} alt="chat-mobile" />
            <p>Chat</p>
          </div>
        </div>
      )}
      <div className="2xl:hidden w-full h-full flex justify-center items-end">
        <div
          className={`${styles.containerButtonMobile} flex justify-center items-center bg-white px-2.5`}
        >
          <div
            className={`${styles.buttonMobile} bg-blue rounded flex justify-center items-center text-white gap-3 font-semibold text-sm`}
            onClick={() => dispatch(handleToggleChat())}
          >
            <Image src="/chat-mobile.svg" width={24} height={24} alt="chat-mobile" />
            Sewa Sekarang
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
