import React, { useEffect } from "react";
import Image from "next/image";
import EachReview from "../EachReview";
import { useState } from "react";

const Review = ({ allDataReviewOfAOffice }) => {
  let [seeAllReview, setSeeAllReview] = useState(false);
  useEffect(()=>{
    console.log(allDataReviewOfAOffice)
  }, [seeAllReview])
  return (
    <div>
      <section className="flex flex-col gap-5" style={{ width: "736px" }}>
        {!seeAllReview &&
          allDataReviewOfAOffice.map((e, index) => {
            if (index < 4) {
              return (
                <div key={index}>
                  <EachReview userName={e.useName} photoProfile={e.photoProfile} message={e.message} rating={e.rating} created={e.created} />
                </div>
              );
            }
          })}

        {seeAllReview &&
          allDataReviewOfAOffice.map((e, index) => (
            <div key={index}>
              <EachReview userName={e.useName} photoProfile={e.photoProfile} message={e.message} rating={e.rating} created={e.created} />
            </div>
          ))}
      </section>
      <p
        className="text-secondary text-base mt-5 hover:cursor-pointer"
        onClick={() => {
          setSeeAllReview(!seeAllReview);
        }}
      >
        {allDataReviewOfAOffice.length > 4 && !seeAllReview && "Lihat Semua"}
        {allDataReviewOfAOffice.length > 4 && seeAllReview && "Tampilkan Lebih Sedikit"}
        {allDataReviewOfAOffice.length < 4 && ""}
      </p>
    </div>
  );
};

export default Review;
