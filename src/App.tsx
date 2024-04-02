import "./App.css";
// import Header from "./components/Header";
// import Products from "./components/Products";
import { router } from "./router/router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
