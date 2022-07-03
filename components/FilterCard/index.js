import React, { useState } from "react";

const FilterCard = ({
  locations,
  setLocations,
  isOpen,
  setIsOpen,

  checkInPeriod,
  setCheckInPeriod,
  checkOutPeriod,
  setCheckOutPeriod,
}) => {
  if (!isOpen) return <></>;

  return (
    <div className="fixed flex justify-center items-center h-screen w-screen">
      <div className="bg-white mb-32 fixed z-50 w-1/4 rounded-lg ">
        <div className="flex justify-between p-6">
          <h1 className="font-black text-4xl">Filter</h1>
          <button onClick={setIsOpen}>X</button>
        </div>
        <div className="border-b-2 w-full" />
        <div className="p-6">
          <h2 className="font-black text-2xl">Lokasi</h2>
          <div>
            {locations.map((locationData, key) => (
              <div className="flex items-center gap-2" key={key}>
                <input
                  id={locationData.id}
                  type="checkbox"
                  checked={locationData.checked}
                  onChange={(e) => {
                    const newCheckedLocations = locations.map((loc, key) => {
                      if (loc.id === locationData.id) {
                        loc.checked = e.target.checked;
                      }
                      return loc;
                    });
                    setLocations(newCheckedLocations);
                  }}
                />
                <label htmlFor={locationData.id}>{locationData.name}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="p-6">
          <h2 className="font-black text-2xl">Periode Waktu</h2>
          <div className="flex flex-col items-center">
            <div>
              <label htmlFor="checkIn" className="block font-bold">
                Tanggal Check In
              </label>
              <input
                id="checkIn"
                type="date"
                className="border-2 p-2 w-64"
                value={checkInPeriod}
                onChange={(e) => {
                  console.log(e.target.value);
                  setCheckInPeriod(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="checkIn" className="block font-bold">
                Tanggal Check Out
              </label>
              <input
                id="checkIn"
                type="date"
                className="border-2 p-2 w-64"
                value={checkOutPeriod}
                onChange={(e) => {
                  console.log(e.target.value);
                  setCheckOutPeriod(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black w-screen h-screen opacity-20 z-40 transp"></div>
    </div>
  );
};

export default FilterCard;
