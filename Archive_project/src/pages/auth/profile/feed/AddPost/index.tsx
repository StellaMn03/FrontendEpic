import { useState, useRef } from "react";
import { Http } from "../../../../../helpers/api";
import { IPost } from "../../../../../helpers/types";
import { useOutletContext } from "react-router-dom";
export const AddPost = () => {
  const [description, setDescription] = useState<string>("");
  const [preview, setPreview] = useState<string | null>(null);
  const [showInput, setShowInput] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const photo = useRef<HTMLInputElement | null>(null);
  const { refetch } = useOutletContext<IPost>();

  const handlePreview = () => {
    const file = photo.current?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!photo.current?.files?.[0]) {
      setErrorMessage("Please provide photo too.");
      return;
    }
    const formData = new FormData();
    formData.append("photo", photo.current?.files?.[0] || "");
    formData.append("content", description);

    await Http.post("/posts", formData);
    setDescription("");
    setPreview(null);
    if (photo.current) {
      photo.current.value = "";
    }
    setShowInput(false);
    refetch();
    setErrorMessage("");
  };

  return (
    <div>
      {!showInput && (
        <button
          onClick={() => setShowInput(true)}
          className="bg-gray-800 text-white px-4 py-2 rounded shadow-md mb-4 flex items-center space-x-2"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/plus.png"
            alt="Add Post"
            className="w-5 h-5"
          />
          <span>Add Post</span>
        </button>
      )}

      {showInput && (
        <>
          <textarea
            className="w-full p-2 bg-gray-700 text-white rounded mb-4"
            placeholder="Write a description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <input
            type="file"
            ref={photo}
            className="hidden"
            onChange={handlePreview}
          />
          <button
            onClick={() => photo.current?.click()}
            className="bg-gray-500 text-white px-4 py-2 rounded shadow-md mb-4 mr-4"
          >
            Choose Photo
          </button>

          {preview && (
            <div className="mb-4">
              <img
                src={preview}
                alt="Preview"
                className="w-24 h-24 object-cover rounded"
              />
            </div>
          )}
          {errorMessage && (
            <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
          )}
          <button
            onClick={handleSubmit}
            className="bg-green-800 text-white px-4 py-2 rounded shadow-md"
          >
            Post
          </button>
        </>
      )}
    </div>
  );
};
