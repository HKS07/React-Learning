import RestrauntCard from "./RestrauntCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
// const RestrauntCardData = data;
// const allData = [];



const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const cleanData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    if (!cleanData) {
      console.log("No Data found");
      return;
    }
    console.log(cleanData);

    setAllRestaurants(cleanData);
    setFilteredRestaurants(cleanData);
  }

  if (!allRestaurants) return <h1> Nothing present </h1>;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
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
        <div className="restaurant-list">
          {filteredRestaurants.map((restraunt) => {
            return (
              <Link to={"/restaurant/" + restraunt.info.id}>
                <RestrauntCard key={restraunt.info.id} {...restraunt.info} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
