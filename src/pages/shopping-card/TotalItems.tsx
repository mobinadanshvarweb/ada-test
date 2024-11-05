import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const TotalItem = () => {
  const cart = useSelector((state: RootState) => state.products.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="w-4 h-4 rounded-full bg-pinky text-light-purple flex items-center justify-center">
      <span className="text-xs">{totalItems > 9 ? "9+" : totalItems}</span>
    </div>
  );
};

export default TotalItem;
