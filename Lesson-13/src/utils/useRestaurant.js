import { useState, useEffect } from "react";

const useRestaurant = (id) => {
    const [restaurant,setRestaurant] = useState(null);
    const [restaurantMenu, setRestaurantMenu] = useState([]);
    useEffect(() => {
        getRestaurantData();
      }, []);
    
      const getRestaurantData = async () => {
        
        const data = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
        );
        if (!data) return;
        const json = await data.json();
        setRestaurantMenu(
          json.data.cards[4].groupedCard.cardGroupMap.REGULAR?.cards[2]?.card?.card
            ?.itemCards
        );
        setRestaurant(json?.data?.cards[2]?.card?.card?.info);
      };

      return [restaurant,restaurantMenu];
};

export default useRestaurant;