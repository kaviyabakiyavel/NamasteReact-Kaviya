//Episode 1

//eg:1
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React!"
// );
// console.log("heading",heading) //object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//eg:2
/**
 * <div id="parent">
 *     <div id="child">
 *        <h1>I'm h1 tag</h1>
 *     </div>
 * </div>
 */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "Im h1 tag")
//   )
// );

// console.log("parent", parent); //object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//eg:3
/**
 * <div id="parent">
 *     <div id="child1">
 *        <h1>I'm h1 tag</h1>
 *        <h2>I'm h2 tag</h2>
 *     </div>
 *     <div id="child2">
 *        <h1>I'm h1 tag</h1>
 *        <h2>I'm h2 tag</h2>
 *     </div>
 * </div>
 */

// import React from "react";
// import ReactDOM from "react-dom";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement(
//     "div",
//     { id: "child1" },
//     React.createElement("h1", {}, "Im h1 tag @"),
//     React.createElement("h2", {}, "Im h2 tag")
//   ),
//   React.createElement(
//     "div",
//     { id: "child2" },
//     React.createElement("h1", {}, "Im h1 tag"),
//     React.createElement("h2", {}, "Im h2 tag")
//   ),
// ]);

// console.log("parent", parent); //object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//Episode 3
// import React from "react";
// import ReactDOM from "react-dom";

// //React.createElement => ReactElement => Object => when rendered this element into dom => converts into HTMLElement
// //this is core of react -> to create react element (not user friendly)
// //looks very clumsy when we add children to react elements
// //so that why facebook developer come up with JSX
// //without jsx also we can write the code
// //but JSX makes life easier

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
// console.log(heading);

// //how to i will create h1 tag in jsx ???
// //this is not html , html like syntax . but its jsx syntax
// //JSX (transpiled before it reaches the JS Engine) - Parcel - Babel
// //JSX => React.createElement => ReactElement => JS Object => HTMLElement
// //Inside JSX element - we need to give attribute as camelCase
// const jsxHeading = <h1>Namaste React using JSX</h1>;
// console.log("jsxHeading", jsxHeading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

//Episode 4
//Do Low level planning

/**
 *   Header
 *     - Logo
 *     - Nav Items
 *   Body
 *     - Search
 *     - Card Container
 *     - RestaurantContainer
 *        -Img
 *        -Name of Res, Star Rating, Cuisine, delivery time
 *   Footer
 *     - CopyRight
 *     - Links
 *     - Address
 *     - Contact
 */

import React from "react";
import ReactDOM from "react-dom";
export const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <NavItems />
      </div>
    </div>
  );
};

export const NavItems = () => {
  return (
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Cart</li>
    </ul>
  );
};

export const Body = () => {
  return (
    <div className="body">
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          <RestaurantContainer />
        </div>
      </div>
    </div>
  );
};

export const RestaurantContainer = () => {
  return (
    <div className="res-card">
      <div>Meghana Foods</div>
    </div>
  );
};

export const Footer = () => {
  return <div className="footer"></div>;
};

export const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
