import axios from "axios";
import { IAddBook, IAuthor, IBook } from "./types";

const Axios = axios.create({
  baseURL: "http://localhost:5000",
});

export const getBooks = async (): Promise<IBook[]> => {
  const response = await Axios.get("/books");
  return response.data;
};
export const getAuthors = async (): Promise<IAuthor[]> => {
  const response = await Axios.get("/authors");
  return response.data;
};

export const getBookById = async (id: string | number): Promise<IBook> => {
  const idAsString = id.toString();
  const response = await Axios.get(`/books/${idAsString}`);
  return response.data;
};

export const addNewBook = async (data: IAddBook): Promise<IBook> => {
  const response = await Axios.post("/books", data);
  return response.data;
};
export const addNewAuthor = async (data: IAuthor): Promise<IAuthor> => {
  const response = await Axios.post("/authors", data);
  return response.data;
};

export const deleteTheBook = async (id: string): Promise<IBook> => {
  const response = await Axios.delete("/books/" + id);
  return response.data;
};
