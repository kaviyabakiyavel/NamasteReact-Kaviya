import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>
            {/* <a href="/about">About Us</a> */}
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
            {/* <a href="/contact">Contact</a>{" "} */}
          </li>
          <li>Cart</li>
          <button
            className="login-button"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
