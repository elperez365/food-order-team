import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "../store";

interface LoginState {
  value: boolean;
  user: {
    email: string;
    id: string;
    name: string;
    password: string;
  };
}

const initialState: LoginState = {
  value: false,
  user: {
    email: "",
    id: "",
    name: "",
    password: "",
  },
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.value = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setLogin, setUser } = loginSlice.actions;
export const selectLogin = (state: RootState) => state.login.value;
export const selectUser = (state: RootState) => state.login.user;
export default loginSlice.reducer;
