import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "../store";
import { product } from "../../data/types";

interface ProductsState {
  value: product[];
}

const initialState: ProductsState = {
  value: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export const selectProducts = (state: RootState) => state.products.value;
export default productsSlice.reducer;
