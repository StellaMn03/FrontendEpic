import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { IUser } from "../helpers/types";
import { useEffect } from "react";
import { getUserById, updateUsers } from "../helpers/api";

export const EditUser = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IUser>();
  const { key } = useParams();
  useEffect(() => {
    if (key) {
      getUserById(key)
        .then((response) => {
          reset(response);
        })
        .catch((error) => {
          console.error("Error fetching user:", error);
        });
    }
  }, [key]);

  const handleUpdate: SubmitHandler<IUser> = (value) => {
    value.id = key ?? "";
    updateUsers(value).then((response) => navigate("/"));
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Edit User
        </h2>
        <form onSubmit={handleSubmit(handleUpdate)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              {...register("name", { required: "please fill the name" })}
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter user's name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="surname"
            >
              Surname
            </label>
            <input
              {...register("surname", {
                required: { value: true, message: "please fill the surname" },
              })}
              type="text"
              id="surname"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter user's surname"
            />
            {errors.surname && (
              <p className="text-red-500 text-sm">{errors.surname.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="age"
            >
              Age
            </label>
            <input
              {...register("age", {
                pattern: { value: /\d+$/, message: "please fill the age" },
              })}
              type="number"
              id="age"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter user's age"
            />
            {errors.age && (
              <p className="text-red-500 text-sm">{errors.age.message}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="salary"
            >
              Salary
            </label>
            <input
              {...register("salary", {
                pattern: { value: /\d+$/, message: "please fill the salary" },
              })}
              id="salary"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter user's salary"
            />
            {errors.salary && (
              <p className="text-red-500 text-sm">{errors.salary.message}</p>
            )}
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Save Changes
            </button>
            <button
              onClick={() => navigate("/")}
              type="button"
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
