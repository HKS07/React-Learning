import { IMG_CDN_URL } from "../constants";

const RestrauntCard = ({
  name,
  locality,
  areaName,
  avgRatingString,
  cloudinaryImageId,
}) => {
 
  return (
    <div className="flex flex-col w-96 p-3 m-4 border rounded-2xl shadow-md hover:scale-95 transition ease-in-out delay-100">
      <img className="rounded-2xl" src={IMG_CDN_URL + cloudinaryImageId} alt={`${name} Image`} />
      <h2 className="text-2xl font-bold">{name}</h2>
      <h3>{`${locality}, ${areaName}`}</h3>
      <h4 className="font-semibold">{avgRatingString} stars</h4>

    </div>
  );
};

export default RestrauntCard;
