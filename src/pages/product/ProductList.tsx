import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import { RootState } from "../../redux/store";
import Icon from "../../components/Icon";
import {
  setFilter,
  setVisibleProducts,
} from "../../redux/slices/productsSlice";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState } from "react";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const visiblePro = useSelector(
    (state: RootState) => state.products.visibleProducts
  );
  const filter = useSelector((state: RootState) => state.products.filter);
  const [isLoading, setIsLoading] = useState(false);

  const filteredProducts = products.filter((product) =>
    product.title.toLocaleLowerCase().includes(filter.toLowerCase())
  );

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(setVisibleProducts(visiblePro + 4));
      setIsLoading(false); // بعد از بارگذاری بیشتر داده‌ها حالت لودینگ خاموش می‌شود
    }, 1000); // تاخیر برای شبیه‌سازی لودینگ
  };

  return (
    <div className="flex flex-wrap w-full justify-center gap-4">
      {/* فیلتر محصولات */}
      <div className="w-full flex justify-center mb-4">
        <Input
          value={filter}
          placeholder="جستجو بر اساس نام محصول"
          onChange={(e) => dispatch(setFilter(e.target.value))}
          className="w-full sm:w-96 md:w-1/2 border-2 border-dark-purple outline-ada-purple text-dark-purple text-right p-2 rounded-md focus:ring-2 focus:ring-ada-purple"
        />
      </div>

      {/* نمایش محصولات */}
      {filteredProducts.slice(0, visiblePro).map((item) => (
        <ProductCard
          key={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          id={item.id}
          description={item.description}
        />
      ))}

      {/* دکمه "نمایش بیشتر" */}
      {visiblePro < filteredProducts.length && (
        <div className="w-full flex justify-center items-center mt-4">
          <Button
            onClick={handleLoadMore}
            className={`flex justify-center items-center text-dark-purple px-4 py-2 rounded-md ${
              isLoading
                ? "bg-gray-300"
                : "bg-light-purple hover:bg-dark-purple hover:text-light-purple transition-all duration-300"
            }`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="spinner-border animate-spin border-4 border-t-4 border-light-purple rounded-full w-5 h-5 mr-2" />
            ) : (
              <>
                <Icon width={20} height={20} src="/icon/more.svg" />
                نمایش بیشتر
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
