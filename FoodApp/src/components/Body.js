import { useEffect, useState } from "react";
import { resturantList } from "../constants";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [allrestaurants, setAllRestaurants] = useState([]);
  const [filteredrestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getResturants();
  }, []);

  async function getResturants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5246354&lng=73.8341872&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  const isOnline=useOnline();
  if(!isOnline){
    return <h1>🔴 Offline, please check your Internet Connection</h1>
  }
  if (!allrestaurants) return null;
  return allrestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
        data-testid="search-input"
          type="text"
          className="search-input hover:bg-green-200 p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
        data-testid="search-button"
          className="btn-search p-2 m-2 bg-purple-900 text-white rounded-lg"
          onClick={() => {
            const data = filterData(searchText, allrestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap" data-testid="res-list">
        {filteredrestaurants?.length === 0 ? (
          <h1>No matches are Found!!!</h1>
        ) : (
          filteredrestaurants.map((restaurant) => {
            return (
              <Link to = {"/restaurant/"+restaurant.data.id} key={restaurant.data.id}>
                <ResturantCard {...restaurant.data}  />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
