import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer.js";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const RestaurantMenu = () => {
  const { id } = useParams();

  const restaurant = useRestaurant(id);
  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div>
        <h1>Restraunt id: {id}</h1>
        <h2>{restaurant[0]?.card?.card?.info?.name}</h2>
        <img
          src={IMG_CDN_URL + restaurant[0]?.card?.card?.info?.cloudinaryImageId}
        />
        <h3>{restaurant[0]?.card?.card?.info?.areaName}</h3>
        <h3>{restaurant[0]?.card?.card?.info?.city}</h3>
        <h3>{restaurant[0]?.card?.card?.info?.avgRating} stars</h3>
        <h3>{restaurant[0]?.card?.card?.info?.costForTwoMessage}</h3>
      </div>
      <div>
      </div>
      <div className="menu">
        <h1>Menu</h1>
        {console.log(
          restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(1)
        )}
        <ul data-testid="menu">
          {restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
            .slice(1)
            .map((items, index) => {
              return (
                <div key={index}>
                  {items?.card?.card?.itemCards?.map((item) => {
                    return (
                      <div key={item?.card?.info?.id} className="flex">
                        {<h2>{item?.card?.info?.name}</h2>}-
                        <button 
                        data-testid="addbtn"
                        className="p-1 bg-green-50 cursor-pointer" onClick={()=>addFoodItem(item?.card?.info)} >
                          Add Item</button>
                      </div>
                    );
                  })}
                </div>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
