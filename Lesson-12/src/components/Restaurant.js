import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

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
  // const [restaurant, setRestaurant] = useState(null);
  // const [restaurantMenu, setRestaurantMenu] = useState([]);

  const [restaurant,restaurantMenu] = useRestaurant(id);

  
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
