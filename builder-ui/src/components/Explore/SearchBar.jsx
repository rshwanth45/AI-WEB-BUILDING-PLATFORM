// components/SearchBar.js
import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search templates..."
      className="border border-gray-300 rounded-md px-3 py-1"
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchBar;
