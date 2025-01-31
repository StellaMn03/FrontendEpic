import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { Products } from "./features/products/products";
import { Basket } from "./features/basket/basket";
import { AddProduct } from "./features/products/pages/add";
import { EditProduct } from "./features/products/pages/edit";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "products", element: <Products /> },
      { path: "basket", element: <Basket /> },
      {
        path: "product/add",
        element: <AddProduct />,
      },
      {
        path: "product/edit/:id",
        element: <EditProduct />,
      },
    ],
  },
]);
