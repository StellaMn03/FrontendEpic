import { useState, useEffect } from "react";
import { IBook } from "../helpers/types";
import { deleteTheBook, getBooks } from "../helpers/api";
import { Link } from "react-router-dom";

export const Books = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [modal, setModal] = useState(false);
  const [deleteBook, setDeleteBook] = useState<IBook | null>(null);

  useEffect(() => {
    getBooks().then((booksList) => {
      setBooks(booksList);
    });
  }, []);
  const handleDelete = (book: IBook) => {
    setDeleteBook(book);
    setModal(true);
  };
  const handleDeleteYes = async () => {
    if (deleteBook) {
      await deleteTheBook(deleteBook.id.toString());
      setBooks((prevBooks) =>
        prevBooks.filter((book) => book.id !== deleteBook.id)
      );
      setModal(false);
      setDeleteBook(null);
    }
  };

  const handleDeleteNo = () => {
    setModal(false);
    setDeleteBook(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">All Books</h1>
      <ul className="space-y-4">
        {books.map((book) => (
          <li
            key={book.id}
            className="border p-4 rounded-md bg-white shadow-md"
          >
            <h2 className="text-xl font-bold text-gray-900">{book.title}</h2>
            <p className="text-gray-600">Pages: {book.pages}</p>
            <p className="text-gray-600">Price: ${book.price}</p>
            <Link
              to={`/book/details/${book.id}`}
              className="bg-gray-500 text-white p-2 my-2 rounded-md"
            >
              View Book
            </Link>{" "}
            <button
              onClick={() => handleDelete(book)}
              className="bg-red-500 p-1 my-3 rounded-md"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-lg w-80">
            <h2 className="text-xl font-semibold text-gray-800">
              Are you sure?
            </h2>
            <div className="mt-4 flex justify-between">
              <button
                onClick={handleDeleteYes}
                className="bg-red-500 text-white p-2 rounded-md"
              >
                Yes
              </button>
              <button
                onClick={handleDeleteNo}
                className="bg-gray-300 p-2 rounded-md"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
