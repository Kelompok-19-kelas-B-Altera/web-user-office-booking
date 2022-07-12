import PopupInputReview from "../PopupInputReview";
import PopupReviewSucces from "../PopupReviewSucces";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const PopupReview = ({ id_building }) => {
  const showPopupReview = useSelector((state) => state.reviewQuery.togglePopupReview);

  useEffect(() => {
    if (showPopupReview && document) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPopupReview]);
  
  return (
    <>
      {
        showPopupReview &&
        <div className="fixed top-0 left-0 bg-secondary w-full h-full flex justify-center items-center z-10">
          <PopupInputReview id_building={id_building} />
          <PopupReviewSucces />
        </div>
      }
    </>
  );
};

export default PopupReview;
