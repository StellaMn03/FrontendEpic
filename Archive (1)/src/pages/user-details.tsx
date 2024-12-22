import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../helpers/api";
import { IUser } from "../helpers/types";

export const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    if (id) {
      getUserById(id).then((response) => {
        setUser(response);
      });
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        <strong>User Details</strong>
      </h1>

      {user && (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex justify-center items-center w-16 h-16 bg-blue-500 text-white font-bold rounded-full text-xl mb-4">
            {user.name[0].toUpperCase()}
            {user.surname[0].toUpperCase()}
          </div>
          <h2 className="text-lg font-bold text-gray-800">
            {user.name} {user.surname}
          </h2>
          <p className="text-gray-600">Age: {user.age}</p>
          <p className="text-gray-600">
            Salary: ${user.salary.toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
};
