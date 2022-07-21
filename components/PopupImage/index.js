import React, { useEffect, useState } from "react";

export default function PopupImage({ imagesLink, allImages, handleViewImages }) {
  const [arrayImage, setArrayImage] = useState([]);
  const [index, setIndex] = useState(0);
  allImages?.map((image) => {
    if (!arrayImage.includes(image.image_url)) {
      setArrayImage([image.image_url, ...arrayImage]);
    }
  });

  useEffect(() => {
    if (imagesLink !== undefined && imagesLink !== null && imagesLink !== "http://localhost:3000/default-images-null.svg") {
      const sameImage = imagesLink;
      const indexof = arrayImage.indexOf(sameImage);
      setIndex(indexof);
    }
  }, []);

  const sliderRight = (e) => {
    if (index < arrayImage.length - 1) {
      setIndex(index + 1);
      arrayImage[index];
    } else {
      setIndex(0);
      arrayImage[index];
    }
  };

  const sliderLeft = () => {
    if (index > 0) {
      setIndex(index - 1);
      arrayImage[index];
    } else {
      setIndex(arrayImage.length - 1);
      arrayImage[index];
    }
  };
  return (
    <div>
      {imagesLink !== undefined && (
        <div className="w-[668px] h-[548px] relative flex flex-col gap-[60px] items-center">
          <button onClick={handleViewImages} className="absolute flex justify-end w-[33.03px] h-[32px] right-0" ><img src="/close-image.svg" alt="close"/></button>
          <div className="w-[566px] h-[410px] flex gap-8">
            <button onClick={() => sliderLeft()}>
              <img
                src="/icons-chevron.svg"
                alt="left-arrow"
                className="w-[46px] h-[46px] cursor-pointer"
              />
            </button>
            <img
              src={arrayImage[index]}
              alt="image"
              className="w-[410px] h-[410px] object-cover"
            />
            <button onClick={() => sliderRight()}>
              <img
                src="/icons-chevron.svg"
                alt="left-arrow"
                className="w-[46px] h-[46px] -scale-x-100  cursor-pointer"
              />
            </button>
          </div>
          <div className="flex justify-center w-[668px] h-[78px] gap-10">
            {arrayImage.map((image, index) => {
              return (
                <img
                  src={image}
                  alt="image"
                  className="w-[78px] h-[78px] object-cover"
                  key={index}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
