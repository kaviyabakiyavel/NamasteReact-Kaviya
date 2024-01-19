
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
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          CONST_URL +
          cloudinaryImageId
        }
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h4>{costOfTwo}</h4>
      <h4>{location}</h4>
      <h4>{area}</h4>
      <h3>{deliveryTime}</h3>
    </div>
  );
};

export default RestaurantCard;
