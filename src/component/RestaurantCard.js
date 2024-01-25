import { CONST_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {
    resName,
    cuisine,
    rating,
    costOfTwo,
    location,
    area,
    deliveryTime,
    cloudinaryImageId,
  } = props;
  return (
    //hardcoded w-[200]
    <div
      className="m-4 p-4 w-[320px] h-[500px] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img
        className=" w-[320px] h-[200px] rounded-lg"
        alt="res-logo"
        src={CONST_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-md">{resName}</h3>
      <h5>{cuisine}</h5>
      <h5>{rating}</h5>
      <h5>{costOfTwo}</h5>
      <h5>{location}</h5>
      <h5>{area}</h5>
      <h5>{deliveryTime}</h5>
    </div>
  );
};

export default RestaurantCard;
