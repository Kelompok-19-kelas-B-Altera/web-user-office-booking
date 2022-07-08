import React from 'react'
import DetailCard from '../../components/DetailCard';
import DetailImage from '../DetailImage';
import styles from './BannerDetail.module.css';

export default function BannerDetail({bannerDetail, nameBuilding, address, city, description, facilities, rating, totalReview, images}) {
  return (
    <>
        <div className={`${styles.bannerDetail} static `}>
            <div className="flex justify-center">
              <img src={`/${bannerDetail}.svg`} alt="banner-detail" width={
              1366} height={396} /> 
            </div>
            <DetailCard 
            nameBuilding={nameBuilding}
            buildingLocation={[address, city]}
            description={description}
            facilities={facilities}
            rating={rating}
            totalReview={totalReview}
            />
            <DetailImage 
            images={images}
            /> 
        </div>
    </>
  )
}
