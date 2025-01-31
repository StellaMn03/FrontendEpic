import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../products.api";
import { useNavigate } from "react-router";
import { useState } from "react";
import { setCategory, setOtherCategory } from "../category.slice";

export const AddProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { category, otherCategory } = useSelector((state) => state.category);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    dispatch(setCategory(selectedCategory));
    if (selectedCategory !== "other") {
      dispatch(setOtherCategory(""));
    }
  };

  const handleAdd = (data) => {
    const newData = {
      ...data,
      category: category === "other" ? otherCategory : category,
    };
    dispatch(addProduct(newData))
      .unwrap()
      .then((res) => {
        navigate("/");
      });
  };

  return (
    <>
      <form className="product_form" onSubmit={handleSubmit(handleAdd)}>
        <label>Title</label>
        {errors.title && <p className="error">{errors.title.message}</p>}
        <input
          className="inp_form"
          {...register("title", { required: "Fill title" })}
        />

        <label>Price</label>
        {errors.price && <p className="error">{errors.price.message}</p>}
        <input
          className="inp_form"
          {...register("price", {
            required: "Fill price",
            setValueAs: (value) => +value,
          })}
        />

        <label>Quantity</label>
        {errors.quantity && <p className="error">{errors.quantity.message}</p>}
        <input
          className="inp_form"
          {...register("quantity", {
            required: "Fill quantity",
            setValueAs: (value) => +value,
          })}
        />

        <label>Category</label>
        <select
          className="inp_form"
          {...register("category", { required: "Please select a category" })}
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="">Select Category</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="books">Books</option>
          <option value="other">Other</option>
        </select>

        {category === "other" && (
          <>
            <label>New Category Name</label>
            <input
              type="text"
              value={otherCategory}
              onChange={(e) => setOtherCategory(e.target.value)}
              placeholder="Enter new category"
            />
          </>
        )}

        <button type="submit">Save</button>
      </form>
    </>
  );
};
