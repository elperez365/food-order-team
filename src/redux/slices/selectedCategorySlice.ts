import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "../store";

interface SelectedCategoryState {
  value: string;
}

const initialState: SelectedCategoryState = {
  value: "smartphones",
};

export const selectedCategorySlice = createSlice({
  name: "selectedCategory",
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSelectedCategory } = selectedCategorySlice.actions;
export const selectSelectedCategory = (state: RootState) =>
  state.selectedCategory.value;
export default selectedCategorySlice.reducer;
