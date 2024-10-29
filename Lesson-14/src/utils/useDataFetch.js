import { useState, useEffect } from "react";

const useDataFetch = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    
    const cleanData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    if (!cleanData) {
      console.log("No Data found");
      return;
    }

    setAllRestaurants(cleanData);

    setFilteredRestaurants(cleanData);
  }

  return [allRestaurants, filteredRestaurants, setFilteredRestaurants];
};

export default useDataFetch;
