import { useDispatch } from "react-redux";
import ProductList from "./ProductList";
import { useEffect } from "react";
import { setProducts } from "../../redux/slices/productsSlice";
import { mockProducts } from "../../data/mockProducts";

const Product = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProducts(mockProducts));
  }, [dispatch]);
  return (
    <div className="w-full flex flex-wrap justify-center gap-4 mt-8">
      <ProductList />
    </div>
  );
};

export default Product;
