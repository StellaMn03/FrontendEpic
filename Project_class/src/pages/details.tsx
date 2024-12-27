import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IBook } from "../helpers/types";
import { getBookById } from "../helpers/api";

export const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState<IBook | null>(null);

  useEffect(() => {
    if (id) {
      getBookById(id).then((bookData) => setBook(bookData));
    }
  }, [id]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {book && (
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            {book.title}
          </h1>
          <p className="text-gray-600">Author: {book.authorId}</p>
          <p className="text-gray-600">Title: {book.title}</p>
          <p className="text-gray-600">Pages: {book.pages}</p>
          <p className="text-gray-600">Price: ${book.price}</p>
        </div>
      )}
    </div>
  );
};
