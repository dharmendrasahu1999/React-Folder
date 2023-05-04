import { useEffect, useState } from "react";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  //Get api data
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  //46674

  async function getRestaurantInfo() {
    const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.649537&lng=77.365101&restaurantId=${id}&submitAction=ENTER`
    );
    const json = await data.json();
    console.log(json.data.cards);
    setRestaurant(json.data.cards);
  }

  //return restaurant data
  return restaurant;
};

export default useRestaurant;
