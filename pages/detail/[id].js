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
import Head from "next/head";

const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [query, setQuery] = useState("");
  const [queryPicked, setQueryPicked] = useState("");
  const [buildingSearch, setBuildingSearch] = useState([]);
  const [buildings, setBuildings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const [building, setBuilding] = useState([]);
  const [loading, setLoading] = useState(false);

  const amountFiveStars = () => {
    let amount = 0;
    building.reviews?.map((review) => {
      if (review.rating === 5) {
        amount++;
      }
    });
    return amount;
  };
  const amountFourStars = () => {
    let amount = 0;
    building.reviews?.map((review) => {
      if (review.rating === 4) {
        amount++;
      }
    });
    return amount;
  };
  const amountThreeStars = () => {
    let amount = 0;
    building.reviews?.map((review) => {
      if (review.rating === 3) {
        amount++;
      }
    });
    return amount;
  };
  const amountTwoStars = () => {
    let amount = 0;
    building.reviews?.map((review) => {
      if (review.rating === 2) {
        amount++;
      }
    });
    return amount;
  };
  const amountOneStars = () => {
    let amount = 0;
    building.reviews?.map((review) => {
      if (review.rating === 1) {
        amount++;
      }
    });
    return amount;
  };

  const ratingAverage = () => {
    const result =
      (5 * amountFiveStars() +
        4 * amountFourStars() +
        3 * amountThreeStars() +
        2 * amountTwoStars() +
        1 * amountOneStars()) /
      building.reviews?.length;
    if (result) {
      return result.toFixed(1);
    }
    return 0;
  };

  useEffect(() => {
    id === undefined ? setLoading(true) : setLoading(false);
  }, [id]);

  useEffect(() => {
    if (id !== undefined) {
      axiosInstance
        .get(`/api/v1/building/${id}`)
        .then((res) => {
          // console.log(res.data.data);
          setBuilding(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loading]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const { data } = await axiosInstance.get("/api/v1/building", {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}`,
          },
        });
        setBuildings(data.data);
        setBuildingSearch(data.data);
        console.log(data.data);
      } catch (error) {
        console.log(error);
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setBuildings]);

  useEffect(() => {
    setBuildingSearch([]);
    buildings?.forEach((e) => {
      if (e.building_name.match(new RegExp(query, "i"))) {
        setBuildingSearch((each) => [...each, e]);
      }
      console.log(e);
    });
  }, [query]);

  useEffect(() => {
    console.log(buildingSearch);
  }, [buildingSearch]);

  const review = building?.reviews;
  console.log(review);

  const RatingData = {
    id_building: id,
    id_user: 1,
    amountAllReview: building.reviews?.length,
    fiveStarts: amountFiveStars(),
    fourStarts: amountFourStars(),
    threeStarts: amountThreeStars(),
    twoStarts: amountTwoStars(),
    oneStarts: amountOneStars(),
    average: 4.5,
  };

  const banner =
    building?.images?.length > 0 ? building?.images[0].image_url : "";
  const nearby = building?.nearby_facilities;

  const detailImage = building?.images;
  console.log("image", detailImage);

  return (
    <div>
      <Head>
        <title>Officity | {building.building_name}</title>
        <link rel="icon" href="/officity-logo.svg" />
      </Head>
      <div className="relative flex flex-col items-center">
        <BannerDetail
          bannerDetail={banner}
          nameBuilding={building.building_name}
          address={building.address}
          city={building.complex?.city}
          description={building.description}
          rating={ratingAverage()}
          totalReview={RatingData.amountAllReview}
          images={detailImage}
          setQuery={setQuery}
          query={query}
          setQueryPicked={setQueryPicked}
          buildingSearch={buildingSearch}
        />
        {nearby?.length !== 0 ? (
          <div className="flex justify-center">
            <NearbyFacilities facilities={nearby} />
          </div>
        ) : null}
        <div style={{ marginTop: 95 }} id="Review">
          <RatingAndReview
            allDataReviewOfAnOffice={review}
            allDataRatingOfAnOffice={RatingData}
          />
          <PopupReview id_building={id} />
        </div>
        <RecomendationDetail id_building={id} />
        <LiveChat
          idBuilding={id}
          nameBuilding={building.building_name}
          addressBuilding={building.address}
          imagesBuilding={detailImage}
        />
        <Footer />
      </div>
    </div>
  );
};

export default DetailPage;
