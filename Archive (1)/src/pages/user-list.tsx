import { useEffect, useState } from "react";
import { IUser } from "../helpers/types";
import { Link } from "react-router-dom";
import { deleteUsers, getUsers } from "../helpers/api";
export const UserList = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    getUsers().then((response) => {
      setUsers(response);
    });
  }, []);
  const handleDelete = (id: string) => {
    deleteUsers(id).then(() => {
      setUsers(users.filter((user) => user.id != id));
    });
  };
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">User List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
          >
            <div className="flex justify-center items-center w-16 h-16 bg-blue-500 text-white font-bold rounded-full text-xl mb-4">
              {user.name?.[0]?.toUpperCase() || "?"}
              {user.surname?.[0]?.toUpperCase() || "?"}
            </div>
            <Link
              to={"/user/edit/" + user.id}
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Edit
            </Link>
            <div className="text-center">
              <h2 className="text-lg font-bold text-gray-800">
                {user.name} {user.surname}
              </h2>{" "}
              <button
                onClick={() => handleDelete(user.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                Delete
              </button>
              <p className="text-gray-600">Age: {user.age}</p>
              <p className="text-gray-600">
                Salary: ${user.salary.toLocaleString()}
              </p>
            </div>
            <Link
              to={"/user/details/" + user.id}
              className="bg-blue-400 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
