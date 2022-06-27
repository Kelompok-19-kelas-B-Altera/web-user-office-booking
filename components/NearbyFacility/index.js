import React from 'react'
import styles from './NearbyFacility.module.css';

export default function NearbyFacility({facilities}) {
  return (
      <>
      {facilities.map((e) => {
          const [category, distance] = e
          console.log(category, distance)
          return (
            <div className={`${styles.facility} flex gap-2 items-center mt-2.5 mr-2 px-3 py-2 bg-white drop-shadow-lg`}>
                {category === "bandara" && (
                    <img src="/plane.svg" alt="airport" width={18} height={18} />
                )}
                {category === "rumah sakit" && (
                    <img src="/hospital.svg" alt="airport" width={18} height={18} />
                )}
                {category === "mall" && (
                    <img src="/mall.svg" alt="airport" width={18} height={18} />
                )}
                {category === "restoran" && (
                    <img src="/restaurant.svg" alt="airport" width={18} height={18} />
                )}
                {category === "coffee shop" && (
                    <img src="/coffee-shop.svg" alt="airport" width={18} height={18} />
                )}
                <p className={`${styles.category} text-xs`}>{category}</p>
                <p className={`${styles.distance} text-secondary`}>{distance}</p>
            </div>
          )
        })}
      
      </>
  )
}
