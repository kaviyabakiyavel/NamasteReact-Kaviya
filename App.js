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

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header.js";
import Body from "./src/component/Body.js";
import Footer from "./src/component/Footer.js";
import About from "./src/component/About.js";
import Contact from "./src/component/Contact.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./src/component/Error.js";
import RestaurantMenu from "./src/component/RestaurantMenu.js";
// import Grocery from './src/component/Grocery.js'

// bundle size loaded into one file called index.js
// but we can make own bundle for each module to avoid over loading multiple components into one single bundle
// Makemytrip application refer for each landing page having separate bundle file
// Make always application into smaller bundle . it helps us to load the application faster

//Different word for reducing bunding size
//Chunking
//Code splitting
//Dynamic bundling
//Lazy Loading
//On Demand Loading

const Grocery = lazy(() => import("./src/component/Grocery.js"));
export const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      {/** if path is / , then render header component */}
      {/** if path is /about then render about component */}
      {/** if path is /contact then render contact conpoennt  */}
      {/**outlet will render those component */}
    </div>
  );
};

//createBrowserRouter takes list of paths
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId" /**dynamic routing*/,
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
