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
    closeModal: (state) => {
      state.value = "";
    },
  },
});

export const { setCurrentView, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
