import RestrauntCard from "./RestrauntCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

// const RestrauntCardData = data;
// const allData = [];
const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);
  console.log("render outside: with component");

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    // console.log("render inside effect");
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  function filterData(t, r) {
    if (t === "" || !t) return allRestaurants;
    const newRestaurants = r.filter((e) => {
      return e?.info?.name?.toLowerCase()?.includes(t?.toLowerCase());
    });
    return newRestaurants;
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
              <RestrauntCard key={restraunt.info.id} {...restraunt.info} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
