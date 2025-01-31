import { createSlice } from "@reduxjs/toolkit";
const basketSlice = createSlice({
  name: "basket",
  initialState: { items: [] },
  reducers: {
    addToBasket: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload.id);
      if (product) {
        product._count += 1;
      } else {
        state.items.push({ ...action.payload, _count: 1 });
      }
    },

    incrementQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload.id);
      if (product) {
        product._count += 1;
      }
    },

    decrementQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload.id);
      if (product && product._count > 1) {
        product._count -= 1;
      } else {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },

    removeFromBasket: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const {
  addToBasket,
  incrementQuantity,
  decrementQuantity,
  removeFromBasket,
} = basketSlice.actions;

export const basketReducer = basketSlice.reducer;
