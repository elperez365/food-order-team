import { createSlice } from "@reduxjs/toolkit";
//To Be Used If Payload Is available
//import type { PayloadAction } from "@reduxjs/toolkit";
//import type { RootState } from "../store";

type navbarStateType = {
  value: boolean;
};

const initialState: navbarStateType = {
  value: false,
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    toggleNavbar: (state) => {
      console.log(state.value);
      state.value = !state.value;
    },
  },
});

export const { toggleNavbar } = navbarSlice.actions;

export default navbarSlice.reducer;
