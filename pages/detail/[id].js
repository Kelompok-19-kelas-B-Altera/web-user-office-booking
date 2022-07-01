import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BannerDetail from "../../components/BannerDetail";
import NearbyFacilities from "../../components/NearbyFacilities";
import RatingAndReview from "../../components/RatingAndReview";
import RecomendationDetail from "../../components/RecomendationDetail";
import Footer from "../../components/Footer";
import LiveChat from "../../components/LiveChat";

import PopupReview from "../../components/PopupReview";
import axiosInstance from "../../networks/apis";


const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [building, setBuilding] = useState([]);
  const [loading, setLoading] = useState(false);
  
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

  const ratingAverage = () => {
    const result = ((5 * amountFiveStars()) + (4 * amountFourStars()) + (3 * amountThreeStars()) + (2 * amountTwoStars()) + (1 * amountOneStars())) / building.reviews?.length
    return result.toFixed(1)
  }

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
  }, [loading])
    
    const review = building?.reviews;

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

    const nearby = building?.nearby_facilities;
    console.log(nearby)
  
  return (
    <>
        <div className="static flex justify-center">
        <BannerDetail 
        bannerDetail={"banner-detail"} 
        nameBuilding={building.building_name}
        address={building.address}
        city={building.complex?.city}
        description={building.description}
        rating={ratingAverage()}
        totalReview={RatingData.amountAllReview}
        />
        </div>
        {/* <div>DetailPage {id}</div> */}
        <div className="flex justify-center">
          <NearbyFacilities 
          facilities={nearby}
          />
        </div>
        <div style={{ marginTop: 95 }}>
          <RatingAndReview allDataReviewOfAnOffice={review} allDataRatingOfAnOffice={RatingData} />
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
