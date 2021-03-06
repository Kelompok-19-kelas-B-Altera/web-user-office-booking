import React from "react";

const ListItemFilter = ({ text, handleOnChange, selected, value }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        value={value}
        checked={selected}
        onChange={handleOnChange}
        className="w-6 h-5 outline-none"
      ></input>
      <label className="ml-2 text-sm font-medium">{text}</label>
    </div>
  );
};

export default ListItemFilter;
