import React from "react";
import Image from "next/image";

const EachReview = () => {
  return (
    <div
      className="w-full"
      style={{
        paddingLeft: "47px",
        paddingRight: "37px",
        paddingTop: "14px",
        paddingBottom: "14px",
        minHeight: "118.32px",
        boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="flex items-center" style={{ marginBottom: "10px" }}>
        <img
          src="/building.svg"
          alt=""
          style={{
            width: "37px",
            height: "37px",
            borderRadius: "50%",
            objectFit: "cover",
            marginRight: "17px",
          }}
        />
        <div className="w-full">
          <div className="flex justify-between w-full">
            <h1 className="text-xl">Angga Cipta Pranata</h1>
            <div className="flex gap-2.5">
              <Image src="/star-big.svg" width={16} height={15.32} />
              <Image src="/star-big.svg" width={16} height={15.32} />
              <Image src="/star-big.svg" width={16} height={15.32} />
              <Image src="/star-big.svg" width={16} height={15.32} />
              <Image src="/star-big.svg" width={16} height={15.32} />
            </div>
          </div>
          <p className="text-xs text-secondary">1 hari yang lalu</p>
        </div>
      </div>

      <div className="text-xs">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae corrupti accusamus saepe.
      </div>
    </div>
  );
};

export default EachReview;
