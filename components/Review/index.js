import React, { useEffect } from "react";
import Image from "next/image";
import EachReview from "../EachReview";
import { useState } from "react";
import axiosInstance from "../../networks/apis";
import Cookies from "js-cookie";

const Review = ({ allDataReviewOfAnOffice }) => {
  let [seeAllReview, setSeeAllReview] = useState(true);
  useEffect(()=>{
    console.log(allDataReviewOfAnOffice)
  }, [seeAllReview])
  return (
    <div>
      <section className="flex flex-col gap-5" style={{ width: "736px" }}>
        {!seeAllReview &&
          allDataReviewOfAnOffice?.map((e, index) => {
            console.log(e);
            // axiosInstance
            //   .get(`/api/v1/review/${e.id}`)
            //   .then(res => {
            //     console.log(res.data.data);
            //   }
            //   )
            //   .catch(err => {
            //     console.log(err);
            //   }
            //   );
            if (index < 4) {
              return (
                <div key={index}>
                  <EachReview userName={e.user.fullname} photoProfile={e.user.images} message={e.review} rating={e.rating} created={e.created} />
                </div>
              );
            }
          })}

        {seeAllReview &&
          allDataReviewOfAnOffice?.map((e, index) => {
            console.log(e.user.id)
            const userImages = ""
            axiosInstance
              .get(`/api/v1/user/management/${e.user.id}`, {
                headers: {'Authorization': 'Bearer '+Cookies.get("token")}
              })
              .then(res => {
                console.log(res.data.data.images[res.data.data.images.length - 1]?.imageUrl);
                userImages = res.data.data.images[res.data.data.images.length - 1]?.imageUrl
              }
              )
              .catch(err => {
                console.log(err);
              }
              )
            console.log(userImages)
              return (
                <div key={index}>
                  <EachReview userName={e.user.fullname} photoProfile={userImages} message={e.review} rating={e.rating} created={e.created} />
                </div>
          )})}
      </section>
      <p
        className="text-secondary text-base mt-5 hover:cursor-pointer"
        onClick={() => {
          setSeeAllReview(!seeAllReview);
        }}
      >
        {allDataReviewOfAnOffice?.length > 4 && !seeAllReview && "Lihat Semua"}
        {allDataReviewOfAnOffice?.length > 4 && seeAllReview && "Tampilkan Lebih Sedikit"}
        {allDataReviewOfAnOffice?.length < 4 && ""}
      </p>
    </div>
  );
};

export default Review;
