import React from "react";
import ReactDOM from "react-dom/client";
import { restrauntCardData as data } from "../data";
import Header  from "../components/Header";



const RestrauntCardData = data;

const RestrauntCard = ({name, locality,areaName,avgRatingString,cloudinaryImageId}) => {
  return (
    <div className="card ">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +  cloudinaryImageId}/>
      <h2>{name}</h2>
      <h3>{`${locality}, ${areaName}`}</h3>
      <h4>{avgRatingString} starts</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      {
        RestrauntCardData.map(restraunt => {
          return <RestrauntCard key={restraunt.info.id} {...restraunt.info}/>
        })
      }
    </div>
  );
}; 
const Footer = () => {
  return <h4>Footer</h4>;
};
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
