import { useDispatch, useSelector } from "react-redux";
import Icon from "../../components/Icon";
import { addToCart, removeFromCart } from "../../redux/slices/productsSlice";
import { RootState } from "../../redux/store";
import IncreaseDecrease from "../../components/IncreaseDecrease";
import { formatNumber } from "../../utils/formatNumber";

const ProductCard = ({
  image,
  title,
  price,
  id,
  description,
}: {
  image: string;
  title: string;
  description: string;
  price: number;
  id: number;
}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state: RootState) =>
    state.products.cart.find((item) => item.id === id)
  );

  return (
    <div className="flex flex-col gap-2 p-2 text-dark-purple shadow rounded">
      <img src={image} alt="" className="w-36 h-36 rounded object-cover" />
      <h2 className="font-yekan flex  text-sm font-thin px-1">{title}</h2>
      <p className="text-xs font-yekan text-ada-purple flex justify-end ">
        {formatNumber(price)} تومان
      </p>

      {cartItem ? (
        <>
          <IncreaseDecrease
            quantity={cartItem.quantity}
            onDecrease={() => dispatch(removeFromCart(id))}
            onIncrease={() =>
              dispatch(addToCart({ id, title, description, image, price }))
            }
          />
        </>
      ) : (
        <button
          className="flex text-xs justify-between p-1 rounded outline-none bg-light-purple text-dark-purple hover:bg-dark-purple hover:text-light-purple transition-all duration-300"
          onClick={() =>
            dispatch(addToCart({ id, title, description, image, price }))
          }
        >
          خرید محصول
          <Icon width={17} height={17} src="/icon/buy.svg" />
        </button>
      )}
    </div>
  );
};

export default ProductCard;
