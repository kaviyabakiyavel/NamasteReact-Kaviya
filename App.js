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

import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", {}, "Im h1 tag @"),
    React.createElement("h2", {}, "Im h2 tag")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", {}, "Im h1 tag"),
    React.createElement("h2", {}, "Im h2 tag")
  ),
]);

console.log("parent", parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
