import { useForm } from "react-hook-form";
import { IAuthor } from "../helpers/types";
import { useNavigate } from "react-router-dom";
import { addNewAuthor } from "../helpers/api";

export const AddAuthor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthor>();

  const navigate = useNavigate();

  const onSubmit = async (data: IAuthor) => {
    await addNewAuthor(data);
    navigate("/");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Add Author
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
              placeholder="Enter author's name"
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
              placeholder="Enter author's surname"
            />
            {errors.surname && (
              <p className="text-red-500 text-sm">{errors.surname.message}</p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
              Add Author
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
