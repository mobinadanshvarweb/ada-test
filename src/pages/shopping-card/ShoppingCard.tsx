import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { formatNumber } from "../../utils/formatNumber";
import CartDetails from "./ShoppingCardDetail";
import CompletePurchase from "./CompelePurchase";

const ShoppingCard = () => {
  const cart = useSelector((state: RootState) => state.products.cart);

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="w-[60%] flex flex-col gap-4 mt-8">
      <CartDetails />
      {cart.length > 0 && (
        <div className="flex justify-between items-center mt-4 p-3 bg-[#f5f5f5] rounded shadow">
          <span className="text-lg font-yekan text-dark-purple">
            مجموع: {formatNumber(totalAmount)} تومان
          </span>
          <CompletePurchase />
        </div>
      )}
    </div>
  );
};

export default ShoppingCard;
