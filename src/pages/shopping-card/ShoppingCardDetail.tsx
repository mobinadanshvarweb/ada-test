import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { addToCart, removeFromCart } from "../../redux/slices/productsSlice";
import IncreaseDecrease from "../../components/IncreaseDecrease";
import Icon from "../../components/Icon";
import { Link } from "react-router-dom";
import { formatNumber } from "../../utils/formatNumber";

const CartDetails = () => {
  const cart = useSelector((state: RootState) => state.products.cart);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-4 justify-center ">
      {cart.length === 0 ? (
        <div className="w-full flex flex-col justify-center items-center shadow-lg py-4">
          <Icon height={200} width={200} src="/icon/empty.svg" />
          <h1 className="text-ada-purple text-xl">سبد خرید شما خالی است</h1>
          <Link
            to="/products"
            className="bg-dark-purple text-light-purple flex justify-center items-center px-2 my-4 text-sm rounded py-1"
          >
            بازگشت به محصولات
          </Link>
        </div>
      ) : (
        cart.map((item) => (
          <>
            <div
              key={item.id}
              className="border border-dark-purple p-3 rounded flex justify-between shadow-md"
            >
              <div className=" w-1/2 flex gap-8 items-center ">
                <img
                  src={item.image}
                  alt=""
                  className="w-28 h-28 object-cover rounded"
                />
                <div className="flex flex-col justify-center items-center">
                  <span className="text-sm font-yekan text-dark-purple">
                    {item.title}
                  </span>
                  <span className="text-sm font-yekan text-[#D4BEE4] font-thin">
                    {formatNumber(item.price)} تومان
                  </span>
                </div>
              </div>
              <div className="w-1/2  flex flex-col justify-center items-end">
                <span className="text-[#DC0083]">
                  {formatNumber(item.quantity * item.price)} تومان
                </span>
                <IncreaseDecrease
                  quantity={item.quantity}
                  onDecrease={() => dispatch(removeFromCart(item.id))}
                  onIncrease={() => {
                    dispatch(addToCart({ ...item }));
                  }}
                />
              </div>
            </div>
          </>
        ))
      )}
    </div>
  );
};

export default CartDetails;
