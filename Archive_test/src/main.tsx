import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserList } from "./pages/user-list.tsx";
import { AddUser } from "./pages/add-user.tsx";
import { User } from "./pages/user.tsx";

createRoot(document.getElementById("root")!).render(
  <RouterProvider
    router={createBrowserRouter([
      { path: "", element: <UserList /> },
      { path: "add", element: <AddUser /> },
      { path: "user/:id", element: <User /> },
    ])}
  />
);
