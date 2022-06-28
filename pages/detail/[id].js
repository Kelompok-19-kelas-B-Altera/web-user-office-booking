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

import PopupReview from "../../components/PopupReview";
const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const ReviewDummyData = [
    {
      useName: "Angga",
      photoProfile:
        "https://www.seekpng.com/png/detail/41-412301_decoracion-de-oso-winnie-de-pooh-winnie-the.png",
      message:
        "ini kantor enak dipake meeting. Kemarin habis make buat acara gathering tupperware ungu indonesia",
      rating: 5,
      created: new Date(),
    },
    {
      useName: "Temennya Angga",
      photoProfile:
        "https://www.pngitem.com/pimgs/m/531-5319474_winnie-the-pooh-and-friends-clipart-hd-png.png",
      message:
        "Angga boong, kemarin dia gak ikut",
      rating: 2,
      created: new Date(),
    },
    {
      useName: "Bukan Temen Angga",
      photoProfile:
        "https://cdn-image.hipwee.com/wp-content/uploads/2020/07/hipwee-hatchi.jpg",
      message:
        "Ini kenapa malah chatan di siniiii, ini review woii, bukan live chat",
      rating: 4,
      created: new Date(),
    },
    {
      useName: "Anonym",
      photoProfile:
        "https://cdn.dribbble.com/users/920/screenshots/3428730/attachments/750880/think_big.png?compress=1&resize=400x300&vertical=top",
      message:
        "Lorem ipsum color sit amet.",
      rating: 3,
      created: new Date(),
    },
    {
      useName: "Anonym",
      photoProfile:
        "https://cdn.dribbble.com/users/920/screenshots/3428730/attachments/750880/think_big.png?compress=1&resize=400x300&vertical=top",
      message:
        "Lorem ipsum color sit amet.",
      rating: 3,
      created: new Date(),
    },
    {
      useName: "Anonym",
      photoProfile:
        "https://cdn.dribbble.com/users/920/screenshots/3428730/attachments/750880/think_big.png?compress=1&resize=400x300&vertical=top",
      message:
        "Lorem ipsum color sit amet.",
      rating: 3,
      created: new Date(),
    },
    {
      useName: "Anonym",
      photoProfile:
        "https://cdn.dribbble.com/users/920/screenshots/3428730/attachments/750880/think_big.png?compress=1&resize=400x300&vertical=top",
      message:
        "Lorem ipsum color sit amet.",
      rating: 3,
      created: new Date(),
    },
  ];

  return (
    <>
      <div className="static flex justify-center">
        <BannerDetail bannerDetail={"banner-detail"} />
      </div>
      {/* <div>DetailPage {id}</div> */}
      <div style={{ marginTop: 95 }}>
        <RatingAndReview allDataReviewOfAOffice={ReviewDummyData} />
        <PopupReview />
      </div>
      <div className="flex justify-center">
        <RecomendationDetail />
      </div>
      <LiveChat />
      <Footer />
    </>
  );
};

export default DetailPage;
