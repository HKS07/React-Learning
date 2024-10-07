import React from "react";
import ReactDOM from "react-dom/client";

const h1 = React.createElement(
  "h1",
  { id: 1, key: "h1" },
  "Testing the react app."
);
console.log(h1);

const h2 = React.createElement("h2", { id: 2, key: "h2" }, " react app.");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("hello");

const header = React.createElement("div", {}, [
    React.createElement("ul", {}, [
        React.createElement("li", {key:1}, "About Us"),
        React.createElement("li", {key:2}, "Contact Us"),
        React.createElement("li", {key:3}, "Readme"),
        React.createElement("li", {key:4}, "Query"),
        React.createElement("li", {key:5}, "Products"),
    ]),
]);

const container = React.createElement("div", { id: "container" }, [h1, h2,header]);
root.render(container);
