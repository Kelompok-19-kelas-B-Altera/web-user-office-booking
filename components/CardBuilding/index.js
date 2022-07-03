import styles from "./CardBuilding.module.css"
import React from 'react';


const CardBuilding = ({buildingImage, rating, buildingName, buildingLocation}) => {
  const [buildingAddress, buildingCity] = buildingLocation;
 return (
   <>
    <header>
      <div className = "head-text">
        <div className = "relative">
          <img src ={buildingImage} alt = "Freedom Blog" width={421} height={246}/>
          <div className={`${styles.rating} absolute top-0 right-0 bg-white flex justify-around items-center`}>
            <img src="/star.svg" alt="Star Rating" width={14} height={14}/>
            <p>{rating}</p>
          </div>
        </div>
        <div>
            <h1 className="font-semibold text-2xl mt-6 mb-1">{buildingName}</h1>
            <div className="flex">
                <img src="/location-building.svg" alt="location" width={8} height={14}/>
                <p className="text-base text-secondary">{buildingAddress}, {buildingCity}</p>
            </div>
        </div>
      </div>
    </header>
   </>

    
 )   
}

export default CardBuilding;