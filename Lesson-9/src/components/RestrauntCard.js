
import { IMG_CDN_URL } from "../constants";

const RestrauntCard = ({name, locality,areaName,avgRatingString,cloudinaryImageId}) => {
    return (
      <div className="card ">
        <img src={IMG_CDN_URL +  cloudinaryImageId}/>
        <h2>{name}</h2>
        <h3>{`${locality}, ${areaName}`}</h3>
        <h4>{avgRatingString} starts</h4>
      </div>
    );
  };

  export default RestrauntCard;