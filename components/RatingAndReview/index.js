import React from "react";
import Rating from "../Rating";
import Review from "../Review";

const RatingAndReview = ({ allDataReviewOfAOffice }) => {
  return (
    <section
      className="flex flex-col items-center gap-10 m-auto"
      style={{ maxWidth: "1066px", width: "100%" }}
    >
      <header className="font-semibold text-center" style={{ fontSize: "32px" }}>
        Review and Rating
      </header>
      <section className="flex" style={{ gap: "52px" }}>
        <Rating />
        <Review allDataReviewOfAOffice={allDataReviewOfAOffice} />
      </section>
    </section>
  );
};

export default RatingAndReview;
