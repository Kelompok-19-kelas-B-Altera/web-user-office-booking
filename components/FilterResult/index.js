import React from "react";
import CardBuilding from "../CardBuilding";
import styles from "../../styles/Home.module.css";

const index = ({ result }) => {
  return (
    <div className="" style={{ marginTop: "41px" }}>
      <h1 className="font-semibold text-3xl mb-8">Hasil</h1>
      <div className={`${styles.listBuilding} flex justify-between`}>
        {result.map((data) => {
          const arr = [];
          arr.push(data.address);
          arr.push(data.complex.city);
          return (
            <CardBuilding
              key={data.id}
              buildingImage={"/building1.svg"}
              rating={"4.7"}
              buildingName={data.building_name}
              buildingLocation={arr}
            />
          );
        })}
      </div>
    </div>
  );
};

export default index;
