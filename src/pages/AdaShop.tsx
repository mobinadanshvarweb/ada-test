import { Outlet, useLocation } from "react-router-dom";
import NavLink from "../components/NavLink";

const AdaShop = () => {
  const location = useLocation();
  return (
    <>
      <div className="flex flex-col justify-center items-center  p-8 ">
        <h1 className="flex justify-center items-center text-dark-purple font-bold uppercase text-2xl">
          Ada Shop
        </h1>
        <div className="w-[90%] font-yekan">
          <ul className="flex gap-4 justify-end">
            <NavLink
              url="/products"
              text="محصولات"
              icon="/icon/product.svg"
              isActive={location.pathname.endsWith("products")}
            />

            <NavLink
              url="/shopping"
              text="سبد خرید"
              icon="/icon/basket.svg"
              isActive={location.pathname.endsWith("shopping")}
            />
          </ul>
        </div>
        <div className=" w-full flex justify-center">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdaShop;
