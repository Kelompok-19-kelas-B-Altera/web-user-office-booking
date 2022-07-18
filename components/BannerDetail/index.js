import React from "react";
import DetailCard from "../../components/DetailCard";
import DetailImage from "../../components/DetailImage";
import HeaderLogo from "../HeaderLogo";
import styles from "./BannerDetail.module.css";

export default function BannerDetail({
  bannerDetail,
  nameBuilding,
  address,
  city,
  description,
  facilities,
  rating,
  totalReview,
  images,
  id_building
}) {
  return (
    <>
      <div>
        <div className="flex justify-center">
          <img
            src={bannerDetail}
            alt="banner-detail"
            className={`${styles.image} object-cover`}
          />
          <div className={`${styles.header} absolute`}>
            <HeaderLogo />
          </div>
        </div>
        <div className="flex justify-center">
          <DetailCard
            nameBuilding={nameBuilding}
            buildingLocation={[address, city]}
            description={description}
            facilities={facilities}
            rating={rating}
            totalReview={totalReview}
          />
          <DetailImage images={images} id={id_building} />
        </div>
      </div>
    </>
  );
}
