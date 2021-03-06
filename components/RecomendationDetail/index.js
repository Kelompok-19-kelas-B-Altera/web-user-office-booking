import React, { useState } from "react";
import CardBuilding from "../CardBuilding";
import axiosInstance from "../../networks/apis";
import { useEffect } from "react";
import styles from "./RecomendationDetail.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Recomendation({ id_building }) {
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/api/v1/building")
      .then((res) => {
        // console.log(res.data.data);
        setBuildings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const amountFiveStars = (item) => {
    let amount = 0;
    item?.reviews?.map((review) => {
      if (review.rating === 5) {
        amount++;
      }
    });
    return amount;
  };
  const amountFourStars = (item) => {
    let amount = 0;
    item?.reviews?.map((review) => {
      if (review.rating === 4) {
        amount++;
      }
    });
    return amount;
  };
  const amountThreeStars = (item) => {
    let amount = 0;
    item?.reviews?.map((review) => {
      if (review.rating === 3) {
        amount++;
      }
    });
    return amount;
  };
  const amountTwoStars = (item) => {
    let amount = 0;
    item?.reviews?.map((review) => {
      if (review.rating === 2) {
        amount++;
      }
    });
    return amount;
  };
  const amountOneStars = (item) => {
    let amount = 0;
    item?.reviews?.map((review) => {
      if (review.rating === 1) {
        amount++;
      }
    });
    return amount;
  };

  const ratingAverage = (item) => {
    const result =
      (5 * amountFiveStars(item) +
        4 * amountFourStars(item) +
        3 * amountThreeStars(item) +
        2 * amountTwoStars(item) +
        1 * amountOneStars(item)) /
      item?.reviews?.length;
    if (result) {
      return result.toFixed(1);
    }
    return 0;
  };

  const router = useRouter();

  return (
    <div>
      <h1 className="font-semibold text-3xl text-center mb-6 mt-9">
        Rekomendasi
      </h1>
      <div
        className={`${styles.listBuilding} flex flex-wrap justify-center gap-10 h-auto`}
      >
        {buildings.data
          ?.filter((item, index) => item.id !== id_building && index < 6)
          .map((item, index) => (
            <div className={`${styles.card} mb-12 hover:cursor-pointer`} key={index}>
              <a
                onClick={() => {
                  router.push(
                    
                      `/detail`,
                      `/detail/${item.id}`,
                    
                    { shallow: true }
                  );
                }}
              >
                <CardBuilding
                  buildingImage={item.images[0]?.image_url}
                  rating={ratingAverage(item)}
                  buildingName={item.building_name}
                  buildingLocation={[item.address, item.complex.city]}
                />
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}
