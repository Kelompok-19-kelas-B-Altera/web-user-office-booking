import React from "react";
import styles from "./NearbyFacilities.module.css";

export default function NearbyFacility({ facilities }) {
  let type = [];
  let allType = ["Transportasi", "Makanan dan Minuman", "Layanan", "Atraksi", "Bisnis", "Pusat Perbelanjaan"];

  facilities?.map((e) => {
    if (!type.includes(e.type)) {
      type.push(e.type);
    }
  });
  return (
    <>
      <div className="mt-24">
        <h1
          className={`${styles.titleFacility} flex justify-center text-center mb-10`}
        >
          Fasilitas Umum Terdekat
        </h1>
        <div
          className={`${styles.facility} flex flex-wrap justify-between h-auto`}
        >
          {type.map((facility, index) => {
            return (
              <>
                <div className={`${styles.card} h-auto`} key={index}>
                  <div className="flex items-center gap-6 mb-7">
                    {allType.map((e, index) => (
                      <>
                      {facility === e && (
                        <img
                        src={`/${e}.svg`}
                        alt={e}
                        width={72}
                        height={72}
                        key={index}
                        />
                      )}
                      </>
                    ))}
                    <p className="text-2xl font-semibold">{facility}</p>
                  </div>
                  <div className="flex flex-col gap-7">
                  {facilities?.map((item, index) => {
                    if (item.type === facility) {
                      return (
                        <div
                        className={`${styles.listFacility} flex justify-between`}
                        key={index}
                        >
                            <p className="text-xl">{item.name}</p>
                            <p className="text-secondary text-xl">
                              {item.distance} KM
                            </p>
                          </div>
                      );
                    }
                  })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
