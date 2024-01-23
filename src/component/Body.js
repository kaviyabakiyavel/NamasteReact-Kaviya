import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState();
  const [searchText, setSearchText] = useState();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.949756&lng=77.6997624&str=Meghana%20Foods&trackingId=dbb880d9-2622-b41d-1c6c-68b517e1d85b&submitAction=ENTER&queryUniqueId=60d1f1bb-1b81-d199-83ce-0f023c10f945"
      );
      const json = await data.json();
      //optional chaining
      setListOfRes(
        json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]
          ?.card?.card?.restaurants
      );
      setFilteredRes(
        json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]
          ?.card?.card?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //conditional rendering
  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const fliteredList = listOfRes?.filter((res) => res.avgRating > 4);
            setListOfRes(fliteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          onClick={() => {
            const filteredListOfRes = listOfRes.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRes(filteredListOfRes);
          }}
        >
          Search
        </button>
      </div>
      <div className="res-container">
        {filteredRes?.map((obj) => (
          <Link key={obj?.info?.id} to={"/restaurants/" + obj?.info?.id}>
            <RestaurantCard
              id={obj?.info?.id}
              resName={obj?.info?.name}
              cuisine={obj?.info?.cuisines}
              rating={obj?.info?.avgRating}
              costOfTwo={obj?.info?.costForTwo}
              location={obj?.info?.locality}
              area={obj?.info?.areaName}
              deliveryTime={obj?.info?.deliveryTime}
              cloudinaryImageId={obj?.info?.cloudinaryImageId}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
