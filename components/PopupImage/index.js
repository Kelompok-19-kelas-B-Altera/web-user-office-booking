import React from "react";

export default function PopupImage({ imagesLink }) {
  return (
    <div>
      {imagesLink !== undefined ? (
        <img
          src={imagesLink}
          alt="image"
          className="w-[512px] h-[512px] object-cover"
        />
        ) : (
        <img
          src="/default-images-null.svg"
          alt="image"
          className="w-[512px] h-[512px] object-cover"
        />
      )}
    </div>
  );
}
