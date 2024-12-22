import axios from "axios";
import { InputUser, IUser } from "./types";

const Axios = axios.create({
  baseURL: "http://localhost:4000",
});
export const getUsers = async (): Promise<IUser[]> => {
  const response = await Axios.get("/users");
  return response.data;
};
export const getUserById = async (id: string | number): Promise<IUser> => {
  const idAsString = id.toString();
  const response = await Axios.get(`/users/${idAsString}`);
  return response.data;
};

export const addNewUsers = async (data: InputUser): Promise<IUser> => {
  const response = await Axios.post("/users", data);
  return response.data;
};
export const deleteUsers = async (id: string): Promise<IUser> => {
  const response = await Axios.delete("/users/" + id);
  return response.data;
};
export const updateUsers = async (data: IUser): Promise<IUser> => {
  const response = await Axios.put("/users/" + data.id, data);
  return response.data;
};
