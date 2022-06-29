import ProgressBar from "@ramonak/react-progress-bar";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { handleTogglePopupReview } from "../../redux/features/ReviewQuerySlice";

import styles from "./Rating.module.css";

const Rating = ({ allDataRatingOfAnOffice }) => {
  const {
    id_building,
    id_user,
    amountAllReview,
    fiveStarts,
    fourStarts,
    threeStarts,
    twoStarts,
    oneStarts,
  } = allDataRatingOfAnOffice;

  const dispatch = useDispatch();

  const handleShowPopupReview = () => {
    dispatch(handleTogglePopupReview());
  };

  const ratingAverage = () => {
    const result = ((5 * fiveStarts) + (4 * fourStarts) + (3 * threeStarts) + (2 * twoStarts) + (1 * oneStarts)) / amountAllReview
    return result.toFixed(1)
  }

  return (
    <div style={{ width: "278px" }}>
      <div className="text-center m-0 font-normal text-base" style={{ marginBottom: "35.5px" }}>
        <Image src="/star-big.svg" width={104.08} height={99.68} alt="star" />
        <p>{ratingAverage()}</p>
        <p className="text-secondary">base on {amountAllReview} Reviews</p>
      </div>

      <div className="flex flex-col" style={{ gap: "25.5px" }}>
        <div className="flex" style={{ gap: "13px" }}>
          <div className="flex" style={{ gap: "5px" }}>
            <p>5</p>
            <Image src="/star-big.svg" width={15} height={14} alt="star" />
          </div>
          <ProgressBar
            completed={fiveStarts}
            maxCompleted={amountAllReview}
            width="191px"
            height="18px"
            isLabelVisible={false}
            animateOnRender={true}
            bgColor="#F3C319"
            barContainerClassName={styles.container}
          />
          <p>{fiveStarts}</p>
        </div>

        <div className="flex" style={{ gap: "13px" }}>
          <div className="flex" style={{ gap: "5px" }}>
            <p>4</p>
            <Image src="/star-big.svg" width={15} height={14} alt="star" />
          </div>
          <ProgressBar
            completed={fourStarts}
            maxCompleted={amountAllReview}
            width="191px"
            height="18px"
            isLabelVisible={false}
            animateOnRender={true}
            bgColor="#F3C319"
            barContainerClassName={styles.container}
          />
          <p>{fourStarts}</p>
        </div>

        <div className="flex" style={{ gap: "13px" }}>
          <div className="flex" style={{ gap: "5px" }}>
            <p>3</p>
            <Image src="/star-big.svg" width={15} height={14} alt="star" />
          </div>
          <ProgressBar
            completed={threeStarts}
            maxCompleted={amountAllReview}
            width="191px"
            height="18px"
            isLabelVisible={false}
            animateOnRender={true}
            bgColor="#F3C319"
            barContainerClassName={styles.container}
          />
          <p>{threeStarts}</p>
        </div>

        <div className="flex" style={{ gap: "13px" }}>
          <div className="flex" style={{ gap: "5px" }}>
            <p>2</p>
            <Image src="/star-big.svg" width={15} height={14} alt="star" />
          </div>
          <ProgressBar
            completed={twoStarts}
            maxCompleted={amountAllReview}
            width="191px"
            height="18px"
            isLabelVisible={false}
            animateOnRender={true}
            bgColor="#F3C319"
            barContainerClassName={styles.container}
          />
          <p>{twoStarts}</p>
        </div>

        <div className="flex" style={{ gap: "13px" }}>
          <div className="flex" style={{ gap: "5px" }}>
            <p>1</p>
            <Image src="/star-big.svg" width={15} height={14} alt="star" />
          </div>
          <ProgressBar
            completed={oneStarts}
            maxCompleted={amountAllReview}
            width="191px"
            height="18px"
            isLabelVisible={false}
            animateOnRender={true}
            bgColor="#F3C319"
            barContainerClassName={styles.container}
          />
          <p>{oneStarts}</p>
        </div>
      </div>

      <button
        onClick={() => {
          handleShowPopupReview();
        }}
        className="bg-blue text-white flex justify-center items-center rounded-md"
        style={{
          maxWidth: "278px",
          width: "100%",
          height: "44px",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <img src="/write-review.svg" alt="write" />
        <p>Tulis Review Anda</p>
      </button>
    </div>
  );
};

export default Rating;
