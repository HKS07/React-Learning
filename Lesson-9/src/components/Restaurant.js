import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantCard = (props) => {
  console.log(props);

  return (
    <div className="curResCard">
      <div className="imgCurResCard">
        <img src={IMG_CDN_URL + props.imageId} alt="current food image" />
      </div>
      <div className="infoCurResCard">
        <h2>{props.name}</h2>
        <h3>Category: {props?.category}</h3>
        <h3>Price: {props?.defaultPrice / 100}</h3>
        <h3>Description : </h3>
        <p>{ props?.description}</p>
      </div>
    </div>
  );
};

const Restaurant = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  useEffect(() => {
    getRestaurantData();
  }, []);

  const getRestaurantData = async () => {
    console.log(id);
    
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    if (!data) return;
    const json = await data.json();
    // console.log(json);
    // console.log(json?.data?.cards[2]?.card?.card?.info?.name);
    // console.log(
    //   json.data.cards[4].groupedCard.cardGroupMap.REGULAR?.cards[2]?.card?.card
    //     ?.itemCards
    // );
    // console.log(json.data.cards);
    //logic to put only menu items
    // title : itemcards
    setRestaurantMenu(
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR?.cards[2]?.card?.card
        ?.itemCards
    );
    setRestaurant(json?.data?.cards[2]?.card?.card?.info);
  };
  return (!restaurant) ? <Shimmer/> : ( <div className="restaurant">
    <div className="restaurantHeader">
      <img
        src={IMG_CDN_URL + restaurant.cloudinaryImageId}
        alt="restaurant image"
      />
      <h2>{restaurant.name}</h2>
      <h3>
        Location: {restaurant.city}, {restaurant.areaName}
      </h3>
      <h3>Rating: {restaurant.avgRating} Stars</h3>
    </div>
    {restaurantMenu?.map((item) => {
      return (
        <RestaurantCard key={item?.card?.info?.id} {...item?.card?.info} />
      );
    })}
  </div>)
};

export default Restaurant;
