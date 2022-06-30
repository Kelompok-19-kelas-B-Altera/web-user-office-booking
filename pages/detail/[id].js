import { useRouter } from "next/router";
import ProgressBar from "@ramonak/react-progress-bar";
import React, { useEffect, useState } from "react";
import Rating from "../../components/Rating";
import Review from "../../components/Review";
import BannerDetail from "../../components/BannerDetail";
import DetailCard from "../../components/DetailCard";
import RatingAndReview from "../../components/RatingAndReview";
import RecomendationDetail from "../../components/RecomendationDetail";
import Footer from "../../components/Footer";
import LiveChat from "../../components/LiveChat";

import PopupReview from "../../components/PopupReview";
import axiosInstance from "../../networks/apis";

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


const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [building, setBuilding] = useState({});
  const [loading, setLoading] = useState(false);
  console.log(building)
  console.log(building.reviews?.length);
  
  const amountFiveStars = () => {
    let amount = 0;
    building.reviews?.map(review => {
      if (review.rating === 5) {
        amount++;
      }
    });
    return amount;
  }
  const amountFourStars = () => {
    let amount = 0;
    building.reviews?.map(review => {
      if (review.rating === 4) {
        amount++;
      }
    });
    return amount;
  }
  const amountThreeStars = () => {
    let amount = 0;
    building.reviews?.map(review => {
      if (review.rating === 3) {
        amount++;
      }
    });
    return amount;
  }
  const amountTwoStars = () => {
    let amount = 0;
    building.reviews?.map(review => {
      if (review.rating === 2) {
        amount++;
      }
    });
    return amount;
  }
  const amountOneStars = () => {
    let amount = 0;
    building.reviews?.map(review => {
      if (review.rating === 1) {
        amount++;
      }
    });
    return amount;
  }
  console.log(amountFiveStars(), amountFourStars(), amountThreeStars(), amountTwoStars(), amountOneStars());

  useEffect(() => {
    id === undefined ? setLoading(true) : setLoading(false);
  }, [id]);

  useEffect(() => {
    if (id !== undefined) {
      axiosInstance
        .get(`/api/v1/building/${id}`)
        .then((res) => {
          console.log(res.data.data);
          setBuilding(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        }
        );
    }
    // axiosInstance
    //   .get(`/api/v1/building/${id}`)
    //   .then(res => {
    //     console.log(res.data.data);
    //     console.log(res.data.data.reviews[0].rating);
    //     setBuilding(res.data.data);
    //   }
    //   )
    //   .catch(err => {
    //     console.log(err);
    //   }
    //   );
    // console.log(id)
  }, [loading])

    // useEffect(() => {
    //   axiosInstance
    //     .get(`/api/v1/building/1`)
    //     .then((res) => {
    //       console.log(res.data.data);
    //       setBuilding(res.data);
    //     }
    //     )
    //     .catch((err) => {
    //       console.log(err);
    //     }
    //     );
    // }, [])

    const RatingData = {
      id_building: id,
      id_user: 1,
      amountAllReview: building.reviews?.length,
      fiveStarts: amountFiveStars(),
      fourStarts: amountFourStars(),
      threeStarts: amountThreeStars(),
      twoStarts: amountTwoStars(),
      oneStarts: amountOneStars(),
      average: 4.5
    }
    console.log(RatingData)
  
  

  return (
    <>
        <div className="static flex justify-center">
        <BannerDetail 
        bannerDetail={"banner-detail"} 
        nameBuilding={building.building_name}
        address={building.address}
        city={building.complex?.city}
        description={building.description}
        // facilities= {building.facilities}
        rating={4.5}
        totalReview={281}
        />
        </div>
        {/* <div>DetailPage {id}</div> */}
        <div style={{ marginTop: 95 }}>
          <RatingAndReview allDataReviewOfAnOffice={ReviewDummyData} allDataRatingOfAnOffice={RatingData} />
          <PopupReview id_building={id} />
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
