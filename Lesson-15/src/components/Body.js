import RestrauntCard from "./RestrauntCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useDataFetch from "../utils/useDataFetch";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurants, filteredRestaurants, setFilteredRestaurants] =
    useDataFetch();

  // const isOnline = useOnline();
  // if (!isOnline) {
  //   return <h1> Offline, please check your internet connection.</h1>;
  // }

  if (!allRestaurants) return <h1> Nothing present </h1>;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mx-8">
      <div className="flex justify-center items-center bg-white">
        <input
          type="text"
          className="px-2 py-1 mx-2 border border-grey rounded-lg w-64 focus:border-gray-500"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="px-2 py-1 bg-gray-300 border border-grey rounded-lg w-20 hover:bg-gray-400 focus:border-grey-500 "
          onClick={() => {
            const filteredData = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(filteredData);
          }}
        >
          Search
        </button>
      </div>
      {filteredRestaurants?.length === 0 && allRestaurants?.length > 0 ? (
        <h1>No restaurant matched your filter!</h1>
      ) : (
        <div className="flex flex-wrap justify-center p-4 mt-8 mx-4 border border-grey-300 rounded-2xl">
          {filteredRestaurants?.map((restraunt) => {
            return (
              <Link
                key={restraunt?.info?.id}
                to={"/restaurant/" + restraunt?.info?.id}
              >
                <RestrauntCard key={restraunt?.info?.id} {...restraunt?.info}/>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
