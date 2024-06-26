import { createSlice } from "@reduxjs/toolkit";
//To Be Used If Payload Is available

import type { RootState } from "../store";
import { product, productForOrder } from "../../data/types";

export interface cartState {
  value: productForOrder[];
}

const initialState: cartState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newProduct: product = action.payload;
      const existingProduct = state.value.find(
        (product) => product.id === newProduct.id,
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        const productToAdd: productForOrder = {
          id: newProduct.id,
          name: newProduct.title,
          price: newProduct.price,
          quantity: 1,
        };
        state.value.push(productToAdd);
      }
    },
    addQuantityByOne: (state, action) => {
      const product = state.value.find(
        (product) => product.id === action.payload,
      );
      if (product) {
        product.quantity += 1;
      }
    },
    removeQuantityByOne: (state, action) => {
      const product = state.value.find(
        (product) => product.id === action.payload,
      );
      if (product) {
        product.quantity -= 1;
        if (product.quantity === 0) {
          state.value = state.value.filter(
            (product) => product.id !== action.payload,
          );
        }
      }
    },
    removeItem: (state, action) => {
      state.value = state.value.filter(
        (product) => product.id !== action.payload,
      );
    },
    clearCart: (state) => {
      state.value = [];
    },
  },
});

export const {
  addItem,
  addQuantityByOne,
  removeQuantityByOne,
  removeItem,
  clearCart,
} = cartSlice.actions;
//? che fa questo
export const cartLength = (state: RootState) => state.cart.value.length;

export default cartSlice.reducer;
