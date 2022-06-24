import React from "react";
import Image from "next/image";
import EachReview from "../EachReview";

const Review = () => {
  return (
    <section className="flex flex-col gap-5" style={{ width: "736px" }}>
      <EachReview />
      <EachReview />
      <EachReview />
      <EachReview />
    </section>
  );
};

export default Review;
