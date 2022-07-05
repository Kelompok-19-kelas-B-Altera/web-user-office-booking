import React from "react";
import { useState } from "react";
import { useRef } from "react";

const Search = () => {
  const ref = useRef(null);
  let [isFocus, setIsFocus] = useState(false);

  const handleOnBlur = (e) => {
    if (e.relatedTarget?.name !== "building-list") {
      setIsFocus(false);
    }
  };

  return (
    <div>
      <div className="container flex mx-auto">
        <div
          className="flex rounded border border-grey relative h-11 w-[352px]"
          onClick={(e) => {
            ref.current.focus();
          }}
        >
          <img src="/search.svg" alt="search" className="absolute left-2.5 top-2.5 z-20" />
          <input
            type="text"
            ref={ref}
            className="pl-[50px] pr-4 py-[12.5px] w-[352px] focus:outline-secondary absolute z-10"
            placeholder="Search..."
            onChange={(e) => console.log(e.target.value.toLowerCase())}
            onFocus={() => {
              setIsFocus(true);
            }}
            onBlur={(e) => {
              handleOnBlur(e);
            }}
          />

          {isFocus && (
            <div className="absolute w-[352px] h-[256px] overflow-hidden bg-white z-[1] pt-[51px]">
              {/* this is the list */}
              <button
                name="building-list"
                className="w-[352px] h-[39px] p-[10px] text-[#07072380] font-normal text-base text-left"
              >
                Building Name
              </button>
              {/* this is the list */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
