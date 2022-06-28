import React from 'react'
import DetailCard from '../../components/DetailCard';
import DetailImage from '../DetailImage';
import styles from './BannerDetail.module.css';

export default function BannerDetail({bannerDetail}) {
  return (
    <>
        <div className={`${styles.bannerDetail} static `}>
            <div className="flex justify-center">
              <img src={`/${bannerDetail}.svg`} alt="banner-detail" width={
              1366} height={396} /> 
            </div>
            <DetailCard 
            nameBuilding="Sarana Square"
            buildingLocation={["Tebet", "Jakarta Selatan"]}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra"
            facilities={[["bandara", "2 KM"], ["rumah sakit", "2 KM"], ["mall", "2 KM"], ["coffee shop", "2 KM"]]}
            rating="4.7"
            totalReview="(281 Reviews)"
            />
            <DetailImage /> 
        </div>
    </>
  )
}
