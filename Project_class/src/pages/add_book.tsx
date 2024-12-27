import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IAddBook, IAuthor } from "../helpers/types";
import { addNewBook, getAuthors, getBooks } from "../helpers/api";

export const AddBook = () => {
  const [authors, setAuthors] = useState<IAuthor[]>([]);
  const [books, setBooks] = useState<IAddBook[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IAddBook>();

  const navigate = useNavigate();
  useEffect(() => {
    getBooks().then((data) => setBooks(data));
  }, []);
  useEffect(() => {
    getAuthors().then((data) => setAuthors(data));
  }, []);
  const onSubmit = async (data: IAddBook) => {
    const exists = books.some((book) => book.title === data.title);

    if (exists) {
      setError("title", {
        message: "A book with this title already exists.",
      });
      return;
    }
    await addNewBook(data);
    navigate("/books");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Add Book
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              {...register("title", { required: "Title is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter book title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="pages"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Pages
            </label>
            <input
              type="number"
              id="pages"
              {...register("pages", {
                required: "Pages are required",
                valueAsNumber: true,
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter number of pages"
            />
            {errors.pages && (
              <p className="text-red-500 text-sm">{errors.pages.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Price
            </label>
            <input
              type="number"
              step="0.01"
              id="price"
              {...register("price", {
                required: "Price is required",
                valueAsNumber: true,
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter book price"
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="authorId"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Select Author
            </label>
            <select
              id="authorId"
              {...register("authorId", {
                required: "Author is required",
                valueAsNumber: true,
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            >
              <option value="">Select an author</option>
              {authors.map((author: IAuthor) => (
                <option key={author.id} value={author.id}>
                  {author.name} {author.surname}
                </option>
              ))}
            </select>
            {errors.authorId && (
              <p className="text-red-500 text-sm">{errors.authorId.message}</p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
