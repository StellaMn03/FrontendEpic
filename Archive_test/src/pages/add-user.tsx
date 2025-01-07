import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IUserData } from "../types";

export const AddUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserData>();
  const navigate = useNavigate();
  const onSubmit = async (data: IUserData) => {
    const response = await fetch("http://localhost:4000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Add User</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white shadow-md rounded-lg p-6"
      >
        {/* Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            {...register("name", { required: "Name is required!" })}
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        {/* Surname */}
        <div className="mb-4">
          <label
            htmlFor="surname"
            className="block text-sm font-medium text-gray-700"
          >
            Surname
          </label>
          <input
            {...register("surname", { required: "Surame is required!" })}
            type="text"
            id="surname"
            name="surname"
            placeholder="Enter your surname"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
          />
          {errors.surname && (
            <p className="text-red-500 text-xs mt-1">
              {errors.surname.message}
            </p>
          )}
        </div>
        {/* Age */}
        <div className="mb-4">
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700"
          >
            Age
          </label>
          <input
            {...register("age", { required: "Age is required!" })}
            type="number"
            id="age"
            name="age"
            placeholder="Enter your age"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
          />
          {errors.age && (
            <p className="text-red-500 text-xs mt-1">{errors.age.message}</p>
          )}
        </div>
        {/* Salary */}
        <div className="mb-6">
          <label
            htmlFor="salary"
            className="block text-sm font-medium text-gray-700"
          >
            Salary
          </label>
          <input
            {...register("salary", { required: "Salary is required!" })}
            type="number"
            id="salary"
            name="salary"
            placeholder="Enter your salary"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
          />
          {errors.salary && (
            <p className="text-red-500 text-xs mt-1">{errors.salary.message}</p>
          )}
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add User
        </button>
      </form>
    </div>
  );
};
