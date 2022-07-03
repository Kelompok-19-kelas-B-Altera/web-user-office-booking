import React from "react";
import { useRef } from "react";

const Search = ({ query, setQuery }) => {
  const ref = useRef(null);
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
            className="absolute left-2.5 top-2.5"
          />
          <input
            type="text"
            ref={ref}
            className="pl-[50px] pr-4 py-[12.5px] w-[352px] focus:outline-secondary"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
