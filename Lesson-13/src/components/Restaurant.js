import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantCard = (props) => {
  console.log(props);

  return (
    <div className="flex w-full items-center mx-8 my-4 border rounded-2xl border-grey-300 shadow-md">
      <div className="w-60 p-2 ">
        <img
          src={IMG_CDN_URL + props.imageId}
          alt="current food image"
          className="object-contain object-center rounded-2xl"
        />
      </div>
      <div className="w-full">
        <h2 className="text-2xl font-semibold">{props.name}</h2>
        <h3>Category: {props?.category}</h3>
        <h3>Price: {props?.defaultPrice / 100}</h3>
        <h3>Description : </h3>
        <p>{props?.description}</p>
      </div>
    </div>
  );
};

const Restaurant = () => {
  const { id } = useParams();
  // const [restaurant, setRestaurant] = useState(null);
  // const [restaurantMenu, setRestaurantMenu] = useState([]);

  const [restaurant, restaurantMenu] = useRestaurant(id);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col justify-center items-center px-8">
      <div className="flex items-center border rounded-2xl p-4 m-4">
        <div className="w-1/2">
          <img
            src={IMG_CDN_URL + restaurant.cloudinaryImageId}
            alt="restaurant image"
            className="object-contain"
          />
        </div>
        <div className="w-full mx-4">
          <h2 className="text-4xl font-bold">{restaurant.name}</h2>
          <h3>
            Location: {restaurant.city}, {restaurant.areaName}
          </h3>
          <h3>Rating: {restaurant.avgRating} Stars</h3>
        </div>
      </div>
      <div className="flex flex-wrap border rounded-2xl border-gray-300 ">
        {restaurantMenu?.map((item) => (
          <RestaurantCard key={item?.card?.info?.id} {...item?.card?.info} />
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
