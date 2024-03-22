import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "../store";

import { product } from "../../data/types";

interface ProductState {
  value: product;
}

const initialState: ProductState = {
  value: {
    id: "",
    title: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: "",
    category: "",
    thumbnail: "",
    images: [],
  },
};

export const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setProduct } = singleProductSlice.actions;
export const selectProduct = (state: RootState) => state.singleProduct.value;

export default singleProductSlice.reducer;
