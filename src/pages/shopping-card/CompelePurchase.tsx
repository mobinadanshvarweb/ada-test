import { toast, ToastContainer } from "react-toastify";
import "../../css/customToastStyle.css";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/slices/productsSlice";
const CompletePurchase = () => {
  const dispatch = useDispatch();

  const handlePurchase = () => {
    const isSuccess = Math.random() > 0.5;

    if (isSuccess) {
      toast.success("پرداخت با موفقیت انجام شد!");
      setTimeout(() => {
        dispatch(clearCart());
      }, 1500);
    } else {
      toast.error("پرداخت با خطا مواجه شد. لطفاً دوباره امتحان کنید");
    }
  };

  return (
    <div>
      <button
        onClick={handlePurchase}
        className="bg-dark-purple text-light-purple px-4 py-2 rounded"
      >
        تکمیل و پرداخت
      </button>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        className="font-yekan"
        toastClassName="toast-custom"
      />
    </div>
  );
};

export default CompletePurchase;
