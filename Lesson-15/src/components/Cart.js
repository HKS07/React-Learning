import { useDispatch, useSelector } from "react-redux";
import { RestaurantCard } from "./Restaurant";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-3/4 m-auto min-h-screen">
      <button
        onClick={() => handleClear()}
        className="m-1 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition ease-in-out duration-150"
      >
        Clear Cart
      </button>

      <div className="flex flex-wrap border rounded-2xl border-gray-300 ">
        {cartItems.length === 0 && <h1 className="text-center font-bold text-lg"> cart is empty </h1>}
        {cartItems?.map((item) => (
          <RestaurantCard key={item?.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
