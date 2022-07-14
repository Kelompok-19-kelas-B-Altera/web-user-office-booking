import React from "react";
import CardBuilding from "../CardBuilding";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const index = ({ result }) => {
  console.log(result);

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

  return (
    <>
      {result.length === 0 ? (
        <></>
      ) : (
        <div className="" style={{ marginTop: "41px" }}>
          <h1 className="font-semibold text-3xl mb-8">Hasil</h1>
          <div className={`${styles.listBuilding} flex justify-between grid grid-cols-2`}>
            {result.map((data) => {
              const arr = [];
              arr.push(data.address);
              arr.push(data.complex.city);
              return (
                <Link href={`/detail/${data.id}`}>
                  <a>
                    <CardBuilding
                      key={data.id}
                      buildingImage={data.images[0]?.image_url}
                      rating={ratingAverage(data)}
                      buildingName={data.building_name}
                      buildingLocation={arr}
                      className="mr-10"
                    />
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default index;
