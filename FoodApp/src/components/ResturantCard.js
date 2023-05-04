import { IMG_CDN_URL } from "../constants";

const ResturantCard = ({name,cuisines,avgRating,cloudinaryImageId}) => {
  return (
    <div className="card w-[200px] p-2 m-2 shadow-lg bg-pink-50">
      <img src={`${IMG_CDN_URL}${cloudinaryImageId}` }/>
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(",  ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default ResturantCard;