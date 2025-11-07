import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { searched } from "../redux/features/filter/filterSlice";
import { useMatch, useNavigate } from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.filter);
  const [inputSearch, setInputSearch] = useState(search);

  const match = useMatch("/");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(inputSearch));
    if (!match) {
      navigate("/");
    }
    setInputSearch("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        role="search"
        aria-label="Site search"
        className="hidden md:flex items-center mx-3 group"
      >
        <div className="relative">
          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">
            <FaSearch />
          </span>
          <input
            type="search"
            name="search"
            id="search"
            value={inputSearch}
            onChange={(e) => {
              setInputSearch(e.target.value);
            }}
            placeholder="Search..."
            className="w-28 md:w-36 pl-8 pr-2 py-1 text-sm border border-gray-200 rounded-full placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-200 transition-all duration-200 ease-in-out md:group-hover:w-56 focus:w-56"
          />
        </div>
      </form>
    </>
  );
};

export default Search;
