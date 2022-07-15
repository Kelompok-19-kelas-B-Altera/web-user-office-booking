import React from "react";

const FilterButton = ({
  buildingFilterHandler,
  buildingResetHandler,
}) => {
  return (
    <>
      <div className="w-[187px] h-[71px] mb-[25px]">
        <div className="flex gap-2">
          <button
            onClick={() => buildingFilterHandler()}
            className="w-[90px] h-[36px] bg-blue text-white text-sm rounded-sm"
          >
            Apply
          </button>
          <button
            onClick={() => buildingResetHandler()}
            className="w-[90px] h-[36px] border border-blue text-blue text-sm rounded-sm"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterButton;
