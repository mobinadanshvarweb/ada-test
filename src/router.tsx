import { createBrowserRouter } from "react-router-dom";
import AdaShop from "./pages/AdaShop";
import Product from "./pages/product/Product";
import ShoppingCard from "./pages/shopping-card/ShoppingCard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AdaShop />,
    children: [
      { path: "products", element: <Product /> },
      { path: "shopping", element: <ShoppingCard /> },
    ],
  },
]);
export default router;
