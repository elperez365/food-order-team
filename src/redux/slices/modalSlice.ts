import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setCurrentView: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrentView } = modalSlice.actions;

export default modalSlice.reducer;
