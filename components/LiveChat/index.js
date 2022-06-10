import { useState } from "react";
import styles from "./LiveChat.module.css";

const LiveChat = () => {
  let [showChat, setShowChat] = useState(false);

  return (
    <>
      <div className={`${styles.container} fixed flex flex-col items-end`}>
        {showChat && (
          <>
            <section className={`${styles.containerChatBox} bg-white absolute flex`}>
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

      {showChat && (
        <div className="h-full w-full bg-white absolute 2xl:invisible z-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur minus eos error
          possimus necessitatibus eaque facilis dolores consequuntur adipisci voluptas. Repudiandae
          ad consectetur corporis eveniet quas facilis nulla, consequatur totam!
        </div>
      )}
    </>
  );
};

export default LiveChat;
