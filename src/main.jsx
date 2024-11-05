import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Root from "./routes/Root";
import Home from "./Pages/Home";
import Statistics from "./Pages/Statistics";
import Dashboard from "./Pages/Dashboard";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ErrorPage from "./Error/ErrorPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </HelmetProvider>
  </StrictMode>
);