import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Router, RouterProvider } from "react-router";
import { routes } from "./routes.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { Layout } from "./layout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </StrictMode>
);
