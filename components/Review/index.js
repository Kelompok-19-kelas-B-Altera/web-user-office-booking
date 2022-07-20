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
            axiosInstance
              .get(`/api/v1/user/management/${e.user.id}`, {
                headers: {'Authorization': 'Bearer '+Cookies.get("token")}
              })
              .then(res => {
                // console.log(res.data.data.pic_url);
                e.user.pic_url = res.data.data.pic_url;
              }
              )
              .catch(err => {
                console.log(err);
              }
              )
            if (index < 4) {
              return (
                <div key={index}>
                  <EachReview userName={e.user.fullname} photoProfile={e.user.pic_url} message={e.review} rating={e.rating} created={e.created} />
                </div>
              );
            }
          })}

        {seeAllReview &&
          allDataReviewOfAnOffice?.map((e, index) => {
            console.log(e.user.id)
            axiosInstance
              .get(`/api/v1/user/management/${e.user.id}`, {
                headers: {'Authorization': 'Bearer '+Cookies.get("token")}
              })
              .then(res => {
                // console.log(res.data.data.pic_url);
                e.user.pic_url = res.data.data.pic_url;
              }
              )
              .catch(err => {
                console.log(err);
              }
              )
              return (
                <div key={index}>
                  <EachReview userName={e.user.fullname} photoProfile={e.user.pic_url} message={e.review} rating={e.rating} created={e.created} />
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
