import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../features/products/products.slice";
import { basketReducer } from "../features/basket/basket.slice";
import { categoryReducer } from "../features/products/pages/category.slice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    basket: basketReducer,
    category: categoryReducer,
    basket: basketReducer,
  },
});
