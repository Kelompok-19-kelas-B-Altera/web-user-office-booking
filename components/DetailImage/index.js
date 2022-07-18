import React, { useState } from "react";
import PopupImage from "../PopupImage";

export default function DetailImage({ images }) {
  console.log(images);
  const [viewImages, setViewImages] = useState(false);

  const [currentImage, setCurrentImage] = useState();
  console.log(currentImage);

  const handleViewImages = (e) => {
    const imageLink = e?.target.src;
    setViewImages(!viewImages);
    setCurrentImage(imageLink);
    console.log("clicked", viewImages);
    console.log("currentImage", currentImage);
  };

  return (
    <div>
    <div>
      {viewImages && (
        <div
        className="fixed flex justify-center items-center top-0 right-0 left-0 w-full h-screen bg-black bg-opacity-30 z-50"
        onClick={() => handleViewImages()}
        >
          <PopupImage imagesLink={currentImage} />
        </div>
      )}
    </div>
    <div className="flex justify-center">
      {images === undefined ? (
        <div className="flex flex-wrap gap-10 mt-10 w-[512px] h-[328px] ml-[703px]">
          <img
            src="/default-images-null.svg"
            alt="image"
            className="w-36 h-36 object-cover transition ease-out duration-500 hover:transform hover:scale-105 cursor-pointer"
            />
          <img
            src="/default-images-null.svg"
            alt="image"
            className="w-36 h-36 object-cover transition ease-out duration-500 hover:transform hover:scale-105 cursor-pointer"
            />
          <img
            src="/default-images-null.svg"
            alt="image"
            className="w-36 h-36 object-cover transition ease-out duration-500 hover:transform hover:scale-105 cursor-pointer"
            />
          <img
            src="/default-images-null.svg"
            alt="image"
            className="w-36 h-36 object-cover transition ease-out duration-500 hover:transform hover:scale-105 cursor-pointer"
            />
          <img
            src="/default-images-null.svg"
            alt="image"
            className="w-36 h-36 object-cover transition ease-out duration-500 hover:transform hover:scale-105 cursor-pointer"
            />
          <img
            src="/default-images-null.svg"
            alt="image"
            className="w-36 h-36 object-cover transition ease-out duration-500 hover:transform hover:scale-105 cursor-pointer"
            />
        </div>
      ) : (
        <div className="flex flex-wrap gap-10 mt-10 w-[512px] h-[328px] ml-[39px]">
          {images[0] ? (
            <img
            src={images[0].image_url}
            alt="image"
            className="w-36 h-36 object-cover transition ease-out duration-500 hover:transform hover:scale-105 cursor-pointer"
            onClick={(e) => handleViewImages(e)}
            />
            ) : (
              <img
              src="/default-images-null.svg"
              alt="image"
              className="w-36 h-36 object-cover transition ease-out duration-500 hover:transform hover:scale-105 cursor-pointer"
              onClick={(e) => handleViewImages(e)}
              />
              )}
          {images[1] ? (
            <img
            src={images[1].image_url}
            alt="image"
            className="w-36 h-36 object-cover transition ease-out duration-500 hover:transform hover:scale-105 cursor-pointer"
            onClick={(e) => handleViewImages(e)}
            />
            ) : (
              <img
              src="/default-images-null.svg"
              alt="image"
              className="w-36 h-36 object-cover transition ease-out duration-500 hover:transform hover:scale-105 cursor-pointer"
              onClick={(e) => handleViewImages(e)}
              />
              )}
          {images[2] ? (
            <img
            src={images[2].image_url}
            alt="image"
            className="w-36 h-36 object-cover transition ease-out duration-500 hover:transform hover:scale-105 cursor-pointer"
            onClick={(e) => handleViewImages(e)}
            />
            ) : (
              <img
              src="/default-images-null.svg"
              alt="image"
              className="w-36 h-36 object-cover transition ease-out duration-500 hover:transform hover:scale-105 cursor-pointer"
              onClick={(e) => handleViewImages(e)}
              />
              )}
          {images[3] ? (
            <img
            src={images[3].image_url}
            alt="image"
            className="w-36 h-36 object-cover transition ease-out duration-500 hover:transform hover:scale-105 cursor-pointer"
            onClick={(e) => handleViewImages(e)}
            />
            ) : (
              <img
              src="/default-images-null.svg"
              alt="image"
              className="w-36 h-36 object-cover transition ease-out duration-500 hover:transform hover:scale-105 cursor-pointer"
              onClick={(e) => handleViewImages(e)}
              />
              )}
          {images[4] ? (
            <img
            src={images[4].image_url}
            alt="image"
            className="w-36 h-36 object-cover transition ease-out duration-500 hover:transform hover:scale-105 cursor-pointer"
            onClick={(e) => handleViewImages(e)}
            />
            ) : (
              <img
              src="/default-images-null.svg"
              alt="image"
              className="w-36 h-36 object-cover transition ease-out duration-500 hover:transform hover:scale-105 cursor-pointer"
              onClick={(e) => handleViewImages(e)}
            />
            )}
          {images[5] ? (
            <img
            src={images[5].image_url}
            alt="image"
            className="w-36 h-36 object-cover transition ease-out duration-500 hover:transform hover:scale-105 cursor-pointer"
            onClick={(e) => handleViewImages(e)}
            />
            ) : (
              <img
              src="/default-images-null.svg"
              alt="image"
              className="w-36 h-36 object-cover transition ease-out duration-500 hover:transform hover:scale-105 cursor-pointer"
              onClick={(e) => handleViewImages(e)}
              />
              )}
        </div>
      )}
    </div>
    </div>
  );
}
