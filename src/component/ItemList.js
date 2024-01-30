import { useDispatch } from "react-redux";
import { CONST_URL } from "../utils/constants";
import {addItem} from '../utils/slices/cardSlice'

const ItemList = ({ items }) => {
const dispatch = useDispatch();
  const handleAddItems = (item) => {
    //dispatch action
    dispatch(addItem(item))
  }
  return (
    <div>
      {items?.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left  flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                -{"💵"}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-2 rounded-md">
            <div className="absolute">
              <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-md " onClick={() => handleAddItems(item)}>
                Add +
              </button>
            </div>
            <img
              src={CONST_URL + item.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
