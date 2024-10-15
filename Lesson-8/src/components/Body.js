import { restrauntCardData as data, restrauntCardData } from "../constants";
import RestrauntCard from "./RestrauntCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestrauntCardData = data;

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState([]);

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
    console.log("render inside effect");
    
    setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  function filterData(t, r) {
    if (t === "" || !t) return RestrauntCardData;

    const newRestaurants = r.filter((e) => {
      return e.info.name.includes(t);
    });
    return newRestaurants;
  }

  return (restaurants.length === 0) ? <Shimmer/> : (
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
            const filteredData = filterData(searchInput, restaurants);
            setRestaurants(filteredData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restraunt) => {
          return <RestrauntCard key={restraunt.info.id} {...restraunt.info} />;
        })}
      </div>
    </div>
  ) ;
};

export default Body;
