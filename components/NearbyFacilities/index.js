import React from 'react'
import styles from './NearbyFacilities.module.css';

export default function NearbyFacility({facilities}) {
    // const [name, distance] = facilities
  return (
      <>
        <div className='mt-24'>   
            <h1 className={`${styles.titleFacility} flex justify-center text-center mb-10`}>Fasilitas Umum Terdekat</h1> 
            <div className={`${styles.facility} flex justify-between`}>
                {facilities?.map((item) => {
                    console.log(item)
                    return (
                        <>
                        <div className={`${styles.card}`}>
                        {item.type === "Transportasi" && (
                            <div className='flex items-center gap-6 mb-7'>
                                <img src="/transportation.svg" alt="airport" width={72} height={72} />
                                <p className='text-2xl font-semibold'>{item.type}</p>
                            </div>
                        )}
                        {item.type === "makanan dan minuman" && (
                            <div className='flex items-center gap-6 mb-7'>
                                <img src="/makanan-minuman.svg" alt="airport" width={72} height={72} />
                                <p className='text-2xl font-semibold'>{item.type}</p>
                            </div>
                        )}
                        {item.type === "Pusat Perbelanjaan" && (
                            <div className='flex items-center gap-6 mb-7'>
                                <img src="/pusat-perbelanjaan.svg" alt="airport" width={72} height={72} />
                                <p className='text-2xl font-semibold'>{item.type}</p>
                            </div>
                        )}
                        {item.type === "layanan" && (
                            <div className='flex items-center gap-6 mb-7'>
                                <img src="/layanan.svg" alt="airport" width={72} height={72} />
                                <p className='text-2xl font-semibold'>{item.type}</p>
                            </div>
                        )}  
                        <div className='flex justify-between'>
                            <p className='text-xl'>{item.name}</p>
                            <p className='text-secondary text-xl'>{item.distance} KM</p>
                        </div> 
                        </div>
                        </>
                    )  
                })}  
            </div>
        </div>
      </>
  )
}
