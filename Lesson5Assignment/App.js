import React from "react";
import ReactDOM from "react-dom/client";
import { restrauntCardData as data } from "./data";

const restrauntCardData = data;

const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStOB26e6FqhS8YWtkvN0L3cbFpupGF5VN8XA&s"
          alt="logo"
        />
      </a>
      <div className="nav-items">
        <ul>
          <li>Foods</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestrauntCard = ({cloudinaryImageId,name,locality,areaName,avgRating}) => {
  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="foood"
      />
      <h1>{name}</h1>
      <h3>
        {locality},{" "}
        {areaName}
      </h3>
      <h4> {avgRating} stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">  
      {
      restrauntCardData.map((r) => {
        return <RestrauntCard key={r.info.id} {...r.info}/>
      })}
    </div>
  );
};

const Footer = () => {};

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const Page = () => {
    return <h1> hi </h1>
}
console.log(Page);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
