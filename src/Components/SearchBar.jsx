import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";


const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className=" mt-6 px-4">
      <form onSubmit={handleSearch} className="w-full max-w-lg">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-4 pr-12 text-gray-700 bg-white rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="w-[40px] absolute right-2 top-2 bottom-2 text-blue-500  text-lg py-1 px-2 rounded-full"
          >
            <FaSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;