import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import cartSlice from "./slices/cartSlice";
import navbarSlice from "./slices/navbarSlice";
import productsSlice from "./slices/productsSlice";
import modalSlice from "./slices/modalSlice";
import ordersSlice from "./slices/ordersSlice";
import singleProductSlice from "./slices/singleProductSlice";
import selectedCategorySlice from "./slices/selectedCategorySlice";
import loginSlice from "./slices/loginSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    cart: cartSlice,
    navbar: navbarSlice,
    products: productsSlice,
    modal: modalSlice,
    orders: ordersSlice,
    singleProduct: singleProductSlice,
    selectedCategory: selectedCategorySlice,
    login: loginSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
