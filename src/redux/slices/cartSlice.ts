import { createSlice } from "@reduxjs/toolkit";
//To Be Used If Payload Is available
//import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

type cartItem = {
  id: number;
};

export interface cartState {
  value: cartItem[];
}

const initialState: cartState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state) => {
      state.value.push({ id: Math.random() });
    },
    removeItem: (state) => {
      state.value.shift();
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
//? che fa questo
export const cartLength = (state: RootState) => state.cart.value.length;

export default cartSlice.reducer;
