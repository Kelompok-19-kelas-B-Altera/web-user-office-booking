import React from "react";

const ListItem = ({ text, handleOnChange, selected }) => {
  return (
    <div className="flex items-center mb-4">
      <input
        type="checkbox"
        checked={selected}
        onChange={handleOnChange}
        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      ></input>
      <label className="ml-2 text-sm font-medium text-slate-900 dark:text-gray-900">
        {text}
      </label>
    </div>
  );
};

export default ListItem;
