import { useRouter } from "next/router";
import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import Rating from "../../components/Rating";
import Review from "../../components/Review";
import RatingAndReview from "../../components/RatingAndReview";

const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      {/* <div>DetailPage {id}</div> */}
      <RatingAndReview/>
    </>
  );
};

export default DetailPage;
