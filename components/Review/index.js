import React from "react";
import Image from "next/image";
import EachReview from "../EachReview";
import { useState } from "react";

const Review = () => {
  let [seeAllReview, setSeeAllReview] = useState(false);

  const DummyData = [
    {
      name: "haha",
    },
    {
      name: "haha",
    },
    {
      name: "haha",
    },
    {
      name: "haha",
    },
    {
      name: "haha",
    },
    {
      name: "haha",
    },
    {
      name: "haha",
    },
    {
      name: "haha",
    },
  ];
  return (
    <div>
      <section className="flex flex-col gap-5" style={{ width: "736px" }}>
        {!seeAllReview &&
          DummyData.map((e, index) => {
            if (index < 4) {
              return (
                <div key={index}>
                  <EachReview />
                </div>
              );
            }
          })}

        {seeAllReview &&
          DummyData.map((e, index) => (
            <div key={index}>
              <EachReview />
            </div>
          ))}
      </section>
      <p
        className="text-secondary text-base mt-5 hover:cursor-pointer"
        onClick={() => {
          setSeeAllReview(!seeAllReview);
        }}
      >
        {DummyData.length > 4 && !seeAllReview && "Lihat Semua"}
        {DummyData.length > 4 && seeAllReview && "Tampilkan Lebih Sedikit"}
        {DummyData.length < 4 && ""}
      </p>
    </div>
  );
};

export default Review;
