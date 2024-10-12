import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://thefoodvilladubai.com/wp-content/uploads/2023/06/logo-dark.png"
      />
    </a>
  );
};
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestrauntCardData = [
  {
    id: "831065",
    name: "Chinese Wok",
    cloudinaryImageId: "f996b31033fd07603bfb28cb4e526683",
    locality: "Chandni Chowk",
    areaName: "Omaxe mall",
    costForTwo: "₹250 for two",
    cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
    avgRating: 4,
    parentId: "61955",
    avgRatingString: "4.0",
    totalRatingsString: "190",
    sla: {
      deliveryTime: 44,
      lastMileTravel: 1.2,
      serviceability: "SERVICEABLE",
      slaString: "40-45 mins",
      lastMileTravelString: "1.2 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-10-10 23:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹149",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "804724",
    name: "KFC",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/5398a8f0-14f4-4df3-8a9d-ac4d271e955f_804724.JPG",
    locality: "Kaccha Bagh",
    areaName: "Chandni Chowk",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Rolls & Wraps", "Fast Food"],
    avgRating: 4.1,
    parentId: "547",
    avgRatingString: "4.1",
    totalRatingsString: "48",
    sla: {
      deliveryTime: 36,
      lastMileTravel: 1.4,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "1.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-10-10 23:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Rxawards/_CATEGORY-Burger.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Burger.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹179",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "807783",
    name: "Burger King",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/e2d2a661-8730-4b74-9842-71b9e0869c86_807783.jpg",
    locality: "Omaxe Mall",
    areaName: "Chandni Chowk",
    costForTwo: "₹350 for two",
    cuisines: ["Burgers", "American"],
    avgRating: 4.2,
    parentId: "166",
    avgRatingString: "4.2",
    totalRatingsString: "335",
    sla: {
      deliveryTime: 27,
      lastMileTravel: 1.7,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "1.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-10-10 23:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
          description: "Delivery!",
        },
        {
          imageId: "Rxawards/_CATEGORY-Burger.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
              },
            },
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Burger.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "60% OFF",
      subHeader: "UPTO ₹120",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
];
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
          return <RestrauntCard key={restraunt.id} {...restraunt}/>
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
