import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => {
  return (
    <a href="/">
      <img
        className="w-20 h-auto"
        alt="logo"
        src="https://thefoodvilladubai.com/wp-content/uploads/2023/06/logo-dark.png"
      />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  return (
    <div className="sticky z-10 top-0 flex justify-between items-center py-2 px-8 mb-4 bg-white shadow-lg">
      <Title />

      <ul className="flex">
        <li className="px-2">
          <Link to="/">Home</Link>
        </li>

        <li className="px-2">
          <Link to="/about">About Us</Link>
        </li>

        <li className="px-2">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="px-2">
          <Link to="/cart">Cart</Link>
        </li>
        <li className="px-2">
          <Link to="/instamart">Instamart</Link>
        </li>
      </ul>

      {/* <span>{isOnline ? "✅" : "❌"}</span> */}

      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)} className="px-2 py-1 bg-gray-300 border border-grey rounded-lg w-20 hover:bg-gray-400 focus:border-grey-500 ">Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)} className="px-2 py-1 bg-gray-300 border border-grey rounded-lg w-20 hover:bg-gray-400 focus:border-grey-500 ">Login</button>
      )}
    </div>
  );
};

export default Header;
