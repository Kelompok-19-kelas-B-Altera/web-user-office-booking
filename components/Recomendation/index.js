import React, { useEffect, useState } from 'react';
import CardBuilding from "../CardBuilding";
import axiosInstance from '../../networks/apis';
import styles from './Recomendation.module.css';
import axios from 'axios';
import { data } from 'autoprefixer';
import Link from 'next/link';

export default function Recomendation() {
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    axiosInstance
      .get('/api/v1/building')
      .then(res => {
        console.log(res.data.data);
        setBuildings(res.data);
      }
      )
      .catch(err => {
        console.log(err);
      }
      );
  }, []);

  
  const amountFiveStars = (item) => {
    let amount = 0;
    item?.reviews?.map(review => {
      if (review.rating === 5) {
        amount++;
      }
    });
    return amount;
  }
  const amountFourStars = (item) => {
    let amount = 0;
    item?.reviews?.map(review => {
      if (review.rating === 4) {
        amount++;
      }
    });
    return amount;
  }
  const amountThreeStars = (item) => {
    let amount = 0;
    item?.reviews?.map(review => {
      if (review.rating === 3) {
        amount++;
      }
    });
    return amount;
  }
  const amountTwoStars = (item) => {
    let amount = 0;
    item?.reviews?.map(review => {
      if (review.rating === 2) {
        amount++;
      }
    });
    return amount;
  }
  const amountOneStars = (item) => {
    let amount = 0;
    item?.reviews?.map(review => {
      if (review.rating === 1) {
        amount++;
      }
    });
    return amount;
  }
  console.log(amountFiveStars())

  const ratingAverage = (item) => {
    const result = ((5 * amountFiveStars(item)) + (4 * amountFourStars(item)) + (3 * amountThreeStars(item)) + (2 * amountTwoStars(item)) + (1 * amountOneStars(item))) / item?.reviews?.length
    return result.toFixed(1)
  }

    return (
        <div>
            <h1 className="font-semibold text-3xl mb-6 mt-9">Rekomendasi</h1>
            {buildings.data?.map(item, index => (                                                                        
              <div className={`${styles.listBuilding} flex justify-between mb-6`}>
                <Link href={`/detail/${item.id}`}>
                  <a>
                  <CardBuilding
                    buildingImage={item.images[0]?.image_url}
                    rating={ratingAverage(item)}
                    buildingName={item.building_name}
                    buildingLocation={[item.address, item.complex.city]}
                    />
                  </a>
                </Link>
              </div> 
            ))}
        </div>
    )
}
