import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import {useState} from "react";

const Body = () => {
  const [listOfRes, setListOfRes ] = useState(resList);
  console.log("listOfRes",listOfRes)
  console.log("resList",resList)
  return (
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
      <div className="search">Search</div>
      <div className="res-container">
        {listOfRes?.map((obj) => (
          <RestaurantCard
            id={obj?.id}
            resName={obj?.name}
            cuisine={obj?.cuisines}
            rating={obj?.avgRating}
            costOfTwo={obj?.costForTwo}
            location={obj?.locality}
            area={obj?.areaName}
            deliveryTime={obj?.deliveryTime}
            cloudinaryImageId={obj.cloudinaryImageId}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
