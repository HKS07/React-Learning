import { useContext } from "react";
import { IMG_CDN_URL } from "../constants";
import UserContext from "../utils/UserContext";

const RestrauntCard = ({name, locality,areaName,avgRatingString,cloudinaryImageId}) => {
  const {user} = useContext(UserContext);
    return (
      <div className="flex flex-col w-96 p-3 m-4 border rounded-2xl shadow-md hover:scale-95 transition ease-in-out delay-100">
        <img className="rounded-2xl" src={IMG_CDN_URL +  cloudinaryImageId}/>
        <h2  className="text-2xl font font-bold" >{name}</h2>
        <h3>{`${locality}, ${areaName}`}</h3>
        <h4 className="font-semibold">{avgRatingString} starts</h4>
        <h5 className="font-normal">{user.name} - {user.email}</h5>
      </div>
    );
  };

  export default RestrauntCard;