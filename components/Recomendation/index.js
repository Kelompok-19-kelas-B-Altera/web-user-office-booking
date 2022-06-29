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
    axios
      .get('http://108.136.240.248/api/v1/building')
      .then(res => {
        console.log(res);
        setBuildings(res.data);
      }
      )
      .catch(err => {
        console.log(err);
      }
      );
  }, []);

  // axios
  // .get('http://108.136.240.248/api/v1/building')
  // .then(res => {
  //   console.log(res);
  //   setBuildings(res);
  // }
  // )
  // .catch(err => {
  //   console.log(err);
  // }
  // );
    return (
        <div>
            <h1 className="font-semibold text-3xl mb-6 mt-9">Rekomendasi</h1>
            {buildings.data?.map(item => (                                                                                 
              <div className={`${styles.listBuilding} flex justify-between mb-6`}>
                <Link href={`/detail/${buildings.data.id}`}>
                  <a>
                  <CardBuilding
                    buildingImage={item.images[0]?.image_url}
                    rating={"4.7"}
                    buildingName={item.building_name}
                    buildingLocation={[item.address, item.complex.city]}
                    />
                  </a>
                </Link>
              </div> 
            ))}
            {/* <div className={`${styles.listBuilding} flex justify-between mb-6`}>
              <CardBuilding
                buildingImage={"/building1.svg"}
                rating={"4.7"}
                buildingName={"Sarana Square"}
                buildingLocation={["Tebet", "Jakarta Selatan"]}
              />
              <CardBuilding
                buildingImage={"/building1.svg"}
                rating={"4.7"}
                buildingName={"Sarana Square"}
                buildingLocation={["Tebet", "Jakarta Selatan"]}
              />
            </div>
            <div className={`${styles.listBuilding} flex justify-between mb-6`}>
              <CardBuilding
                buildingImage={"/building1.svg"}
                rating={"4.7"}
                buildingName={"Sarana Square"}
                buildingLocation={["Tebet", "Jakarta Selatan"]}
              />
              <CardBuilding
                buildingImage={"/building1.svg"}
                rating={"4.7"}
                buildingName={"Sarana Square"}
                buildingLocation={["Tebet", "Jakarta Selatan"]}
              />
            </div> */}
        </div>
    )
}
