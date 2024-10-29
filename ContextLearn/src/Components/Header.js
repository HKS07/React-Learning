import Context from "../utils/Context";
import { useContext } from "react";

const Header = () => {
  const { user,setUser } = useContext(Context);
  return (
    <div className="flex justify-between items-center px-6 py-4 shadow-md">
      <logo className="font-bold text-blue-400 border rounded-sm border-blue-600 p-1">
        CONTEXT
      </logo>
      <div>
        <input
          type="text"
          className="border rounded-md border-gray-500 mx-2 w-96 focus:border-black"
          onChange={(e) => {
            const updatedUser = {...user}
            updatedUser.name = e.target.value;
            setUser(updatedUser)
          }}
        ></input>
        <button>🔍</button>
      </div>
      <ul className="flex ">
        <li className="mx-2">Home</li>
        <li className="mx-2">About Us</li>
        <li className="mx-2">Products</li>
        <li className="mx-2">Contact Us</li>
      </ul>
    </div>
  );
};

export default Header;
