import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: "",
    otherCategory: "",
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setOtherCategory: (state, action) => {
      state.otherCategory = action.payload;
    },
    resetCategory: (state) => {
      state.category = "";
      state.otherCategory = "";
    },
  },
});

export const { setCategory, setOtherCategory, resetCategory } =
  categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
