import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface ProductState {
  products: Product[];
  visibleProducts: number;
  filter: string;
  cart: CartItem[];
}

const initialState: ProductState = {
  products: [],
  visibleProducts: 4,
  filter: "",
  cart: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setVisibleProducts: (state, action: PayloadAction<number>) => {
      state.visibleProducts = action.payload;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const index = state.cart.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        if (state.cart[index].quantity > 1) {
          state.cart[index].quantity -= 1;
        } else {
          state.cart.splice(index, 1);
        }
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  setProducts,
  setVisibleProducts,
  setFilter,
  addToCart,
  removeFromCart,
  clearCart,
} = productsSlice.actions;
export default productsSlice.reducer;
