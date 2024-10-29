import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

export const RestaurantCard = (props) => {
  const dispatch = useDispatch();

  const [qty, setQty] = useState(0);

  const handleAdd = () => {
    setQty(qty + 1);
    dispatch(addItem(props));
  };

  const handleRemove = () => {
    setQty(qty - 1);
    if (qty - 1 === 0) {
      dispatch(removeItem());
    }
  };

  return (
    <div className="flex w-full items-center mx-8 my-4 border rounded-2xl border-grey-300 shadow-md">
      <div className="w-60 p-2">
        <img
          src={IMG_CDN_URL + props.imageId}
          alt="current food image"
          className="object-contain object-center rounded-2xl"
        />
      </div>
      <div className="w-full">
        <h2 className="text-2xl font-semibold">{props.name}</h2>
        <h3>Category: {props?.category}</h3>
        <h3>Price: ₹ {props?.price / 100}</h3>
        <h3>Description :</h3>
        <p>{props?.description}</p>

        {qty > 0 ? (
          <div className="flex items-center mt-4">
            <button
              onClick={handleRemove}
              className="m-1 py-2 px-4 bg-gray-300 text-gray-800 font-semibold rounded-l-lg shadow-md hover:bg-gray-400 transition ease-in-out duration-150"
            >
              -
            </button>
            <div className="m-1 px-4 py-2 border-t border-b">{qty}</div>
            <button
              onClick={() => setQty(qty + 1)}
              className="m-1 py-2 px-4 bg-gray-300 text-gray-800 font-semibold rounded-r-lg shadow-md hover:bg-gray-400 transition ease-in-out duration-150"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={handleAdd}
            className="m-1 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition ease-in-out duration-150"
          >
            Add
          </button>
        )}
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
