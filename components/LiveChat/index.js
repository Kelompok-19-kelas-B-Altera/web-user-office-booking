import styles from "./LiveChat.module.css";
import { useState } from "react";
import Image from "next/image";

const LiveChat = () => {
  let [showChat, setShowChat] = useState(false);
  let [showChatting, setShowChatting] = useState(false);

  const handleBack = () => {
    setShowChat(false);
    setShowChatting(false);
  };

  const handleChat = (e) => {
    console.log(e.currentTarget.id);
    setShowChatting(true);
  };
  return (
    <div className={`${styles.containerChatComponent} absolute`}>
      {/* Desktop */}
      <div className={`${styles.container} hidden 2xl:flex fixed flex-col items-end`}>
        {showChat && (
          <>
            <section className={`${styles.containerChatBox} bg-white flex absolute`}>
              <div>
                <div>Search</div>

                <div className={`${styles.buildingBox} flex items-center justify-center`}>
                  <img src="" alt="building-image" />
                  <span>
                    <h1 className={`${styles.buildingName} font-normal`}>Building Name</h1>
                    <p className={`${styles.buildingLocation}`}>Building Location</p>
                  </span>
                </div>
                <div className={`${styles.buildingBox} flex items-center justify-center`}>
                  <img src="" alt="building-image" />
                  <span>
                    <h1 className={`${styles.buildingName} font-normal`}>Building Name</h1>
                    <p className={`${styles.buildingLocation}`}>Building Location</p>
                  </span>
                </div>
                <div className={`${styles.buildingBox} flex items-center justify-center`}>
                  <img src="" alt="building-image" />
                  <span>
                    <h1 className={`${styles.buildingName} font-normal`}>Building Name</h1>
                    <p className={`${styles.buildingLocation}`}>Building Location</p>
                  </span>
                </div>
              </div>
              <div>Main Chat</div>
            </section>
            <div className={`${styles.triangle} bg-white absolute`}></div>
          </>
        )}
        <div
          className={`${styles.containerButton} absolute bg-white flex flex-row justify-center items-center gap-2.5`}
          onClick={() => {
            setShowChat(!showChat);
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
                <section className="h-full w-full">
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
                  <p className={`${styles.date} hidden font-normal absolute text-dark-blue tiny:block`}>1 Dec</p>
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
            onClick={() => setShowChat(!showChat)}
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
