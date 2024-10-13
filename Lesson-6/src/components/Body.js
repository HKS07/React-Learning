import { restrauntCardData as data } from "../constants";
import RestrauntCard from "./RestrauntCard";
import { useState } from "react";

const RestrauntCardData = data;

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState(RestrauntCardData);

  function filterData(t,r) {
    if(t === "" || !t ) return RestrauntCardData;
    
    const newRestaurants = r.filter((e) => {
      return e.info.name.includes(t);
    })
    return newRestaurants;
  }


  return (
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
  );
};

export default Body;
