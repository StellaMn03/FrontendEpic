import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import { Books } from "../pages/books";
import { AddBook } from "../pages/add_book";
import { AddAuthor } from "../pages/add_author";
import { BookDetails } from "../pages/details";

export const path = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/books", element: <Books /> },
      { path: "/add-book", element: <AddBook /> },
      { path: "/add-author", element: <AddAuthor /> },
      { path: "/book/details/:id", element: <BookDetails /> },
    ],
  },
]);
