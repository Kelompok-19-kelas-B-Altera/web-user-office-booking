import React from 'react';
import CardBuilding from "../CardBuilding";
import axiosInstance from '../../networks/apis';
import { useEffect } from 'react';
import styles from './RecomendationDetail.module.css';

export default function Recomendation() {
  // useEffect(() => {
  //   axiosInstance
  //   .get('/api/v1/building')
  //       .then(response => {
  //           console.log(response.data);
  //       }
  //       )
  //       .catch(error => {
  //           console.log(error);
  //       }
  //       );
  // }, [])
  
    
    return (
        <div>
            <h1 className="font-semibold text-3xl text-center mb-6 mt-9">Rekomendasi</h1>
            
            <div className={`${styles.listBuilding} flex justify-between mb-6 gap-10`} style={{maxWidth: 1064, width: '100%'}}>
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
              <CardBuilding
                buildingImage={"/building1.svg"}
                rating={"4.7"}
                buildingName={"Sarana Square"}
                buildingLocation={["Tebet", "Jakarta Selatan"]}
                />
              </div>
              <div className={`${styles.listBuilding} flex justify-between mb-6 gap-10`} style={{maxWidth: 1064, width: '100%'}}>
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
              <CardBuilding
                buildingImage={"/building1.svg"}
                rating={"4.7"}
                buildingName={"Sarana Square"}
                buildingLocation={["Tebet", "Jakarta Selatan"]}
              />
            </div>
        </div>
    )
}
