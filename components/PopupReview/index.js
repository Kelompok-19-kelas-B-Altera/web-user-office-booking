import PopupInputReview from "../PopupInputReview";
import PopupReviewSucces from "../PopupReviewSucces";
import { useSelector } from "react-redux";

const PopupReview = () => {
  const showPopupReview = useSelector((state) => state.reviewQuery.togglePopupReview);

  return (
    <>
      {
        showPopupReview &&
        <div className="absolute top-0 left-0 bg-secondary w-full h-full flex justify-center items-center">
          <PopupInputReview />
          <PopupReviewSucces />
        </div>
      }
    </>
  );
};

export default PopupReview;
