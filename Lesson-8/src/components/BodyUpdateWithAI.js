import RestrauntCard from "./RestrauntCard";
import { useEffect, useState, useMemo } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [searchInput, setSearchInput] = useState(""); // To track the search input
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); // To store filtered restaurants
  const [allRestaurants, setAllRestaurants] = useState([]); // To store all restaurants
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null); // To track any errors

  // Fetches restaurant data on component mount
  useEffect(() => {
    getRestaurants();
  }, []);

  // Function to fetch restaurant data
  async function getRestaurants() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      
      // Check if the response has the expected data
      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (restaurants) {
        setAllRestaurants(restaurants); // Set all restaurants
        setFilteredRestaurants(restaurants); // Initially, no filtering, so set the same data
      } else {
        setError("No restaurant data available."); // Handle the case where no data is available
      }
    } catch (error) {
      // Handle fetch errors (network issues, etc.)
      setError("Failed to fetch restaurant data. Please try again later.");
    } finally {
      setLoading(false); // Ensure loading is stopped after fetching
    }
  }

  // Function to filter restaurants based on search input
  function filterData(searchText, restaurants) {
    if (!searchText) return restaurants; // If search text is empty, return all restaurants

    return restaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  // Memoize the filtered results to avoid recalculating on every render
  const filteredData = useMemo(
    () => filterData(searchInput, allRestaurants),
    [searchInput, allRestaurants]
  );

  // If data is loading, show the shimmer effect
  if (loading) return <Shimmer />;

  // If there's an error, display the error message
  if (error) return <div>{error}</div>;

  // If no restaurants found
  if (!allRestaurants || allRestaurants.length === 0)
    return <div>Nothing present</div>;

  return (
    <div>
      {/* Input box for searching */}
      <input
        type="text"
        placeholder="Search restaurants"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      {/* Search button to trigger filtering */}
      <button onClick={() => setFilteredRestaurants(filteredData)}>
        Search
      </button>

      {/* Display message when no restaurant matches the search filter */}
      {filteredRestaurants.length === 0 && allRestaurants.length > 0 ? (
        <p>No restaurant matched your filter!</p>
      ) : (
        <div>
          {/* Display the filtered restaurant cards */}
          {filteredRestaurants.map((restaurant) => (
            <RestrauntCard key={restaurant.info.id} {...restaurant.info} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
