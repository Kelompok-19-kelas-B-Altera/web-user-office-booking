import React from "react";
import axiosInstance from "../../networks/apis";

const ButtonsFilter = () => {
  const handleSubmit = () => {
    axiosInstance
      .get("/api/v1/building/search", {
        params: {
          filters: [
            {
              key: "buildingName",
              operator: "LIKE",
              field_type: "STRING",
              value: "bee",
            },
          ],
          sorts: [],
          page: null,
          size: null,
        },
      })
      .then((res) => {
        console.log(res);
      }).catch((err)=>{console.log(err)})
  };

  return (
    <div>
      <button
        className="w-[83px] h-[36px] text-sm bg-blue text-white mr-7"
        onClick={() => {
          handleSubmit();
        }}
      >
        Apply
      </button>
      <button className="w-[83px] h-[36px] text-sm border border-blue text-blue">Reset</button>
    </div>
  );
};

export default ButtonsFilter;
