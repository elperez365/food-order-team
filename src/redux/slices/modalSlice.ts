import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    isOpen: false,
    currentView: null,
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.value.isOpen = !state.value.isOpen;
    },
    setCurrentView: (state, action) => {
      state.value.currentView = action.payload;
    },
  },
});

export const { toggleModal, setCurrentView } = modalSlice.actions;

export default modalSlice.reducer;
