import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  //useEffect is called every time my component render
  //useEffect contain two parameter
  //useEffect -> no-dependency array -> called every time my component render
  //useEffect -> if dependency array is empty -> called only one initial render
  //useEffect -> if dependency array is btnName -> called every time my component render
  //never use if condition in useState
  // useEffect(() => {
  //   console.log("useEffect called");
  // }, [btnName]);

  //by using href entire page is reloading
  //use link component used by react component ( link component works like anchor tag)

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  console.log("loggedInUser", loggedInUser);

  //subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems", cartItems);

  return (
    <div className="flex justify-between">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">Home</li>
          <li className="px-4">
            {/* <a href="/about">About Us</a> */}
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
            {/* <a href="/contact">Contact</a>{" "} */}
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart"> Cart - ({cartItems?.length})</Link>
          </li>
          <button
            className="login-button"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
