import React, { useState } from "react";
import { useRef } from "react";

const Search = ({ query, setQuery, setQueryPicked, buildings }) => {
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
          <img
            src="/search.svg"
            alt="search"
            className="absolute left-2.5 top-2.5 z-20"
          />
          <input
            type="text"
            ref={ref}
            className="pl-[50px] pr-4 py-[12.5px] w-[352px] focus:outline-secondary absolute z-10"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
            onFocus={() => {
              setIsFocus(true);
            }}
            onBlur={(e) => {
              handleOnBlur(e);
            }}
          />
          {isFocus && (
            <>
              <div>
                <div className="absolute w-[352px] overflow-hidden bg-white z-[1] pt-[51px]">
                  {buildings?.slice(0, 5).map((building) => {
                    return (
                      <div key={building.id}>
                        {/* this is the list */}
                        <button
                          name="building-list"
                          className="w-[352px] h-[39px] p-[10px] text-[#07072380] font-normal text-base text-left"
                          onClick={()=>{setQueryPicked(building.building_name)}}
                        >
                          {building.building_name}
                        </button>
                        {/* <button
                          name="building-list"
                          className="w-[352px] h-[39px] p-[10px] text-[#07072380] font-normal text-base text-left"
                        >
                          Building Name 2
                        </button> */}
                        {/* this is the list */}
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
