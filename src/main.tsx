import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer
        autoClose={1000}
        limit={3}
        position="bottom-center"
        closeOnClick
      />
      <App />
    </Provider>
  </React.StrictMode>,
);
