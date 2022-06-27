import { useRouter } from "next/router";
import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import Rating from "../../components/Rating";
import Review from "../../components/Review";
import BannerDetail from "../../components/BannerDetail";
import DetailCard from "../../components/DetailCard";
import RatingAndReview from "../../components/RatingAndReview";
import RecomendationDetail from "../../components/RecomendationDetail";
import Footer from "../../components/Footer";
import LiveChat from "../../components/LiveChat";

const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <div className="static flex justify-center">
        <BannerDetail
        bannerDetail={"banner-detail"}
        />
      </div>
      {/* <div>DetailPage {id}</div> */}
      <div style={{marginTop: 95}}>
        <RatingAndReview/>
      </div>
      <div className="flex justify-center">
        <RecomendationDetail/>
      </div>
      <LiveChat />
      <Footer />
    </>
  );
};

export default DetailPage;
