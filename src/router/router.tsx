import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";
import ProductDetail from "../pages/ProductDetail";
import ErrorPage from "../pages/errorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
