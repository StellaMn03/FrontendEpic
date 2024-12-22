import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addNewUsers } from "../helpers/api";
import { InputUser } from "../helpers/types";

export const AddUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputUser>();

  const navigate = useNavigate();
  const onSubmit = async (data: InputUser) => {
    const newUser = await addNewUsers(data);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Add User
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="surname"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Surname
            </label>
            <input
              type="text"
              id="surname"
              {...register("surname", { required: "Surname is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter surname"
            />
            {errors.surname && (
              <p className="text-red-500 text-sm">{errors.surname.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Age
            </label>
            <input
              type="text"
              id="age"
              {...register("age", {
                required: "Age is required",
                validate: (value) =>
                  !isNaN(Number(value)) || "Age must be a number",
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter age"
            />
            {errors.age && (
              <p className="text-red-500 text-sm">{errors.age.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="salary"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Salary
            </label>
            <input
              type="text"
              id="salary"
              {...register("salary", {
                required: "Salary is required",
                validate: (value) =>
                  !isNaN(Number(value)) || "Salary must be a number",
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter salary"
            />
            {errors.salary && (
              <p className="text-red-500 text-sm">{errors.salary.message}</p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
