import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { editProduct } from "../../products.api";
import { setCategory, setOtherCategory } from "../category.slice";

export const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const { category, otherCategory } = useSelector((state) => state.category);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const product = products.find((p) => p.id == id);
    if (product) {
      reset(product);
      dispatch(setCategory(product.category));
      if (!["electronics", "clothing", "books"].includes(product.category)) {
        dispatch(setCategory("other"));
        dispatch(setOtherCategory(product.category));
      }
    }
  }, [products, id, reset]);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    dispatch(setCategory(selectedCategory));
    if (selectedCategory !== "other") {
      dispatch(setOtherCategory(""));
    }
  };

  const handleEdit = (data) => {
    const newData = {
      ...data,
      category: category === "other" ? otherCategory : category,
    };

    dispatch(editProduct({ id, ...newData }))
      .unwrap()
      .then(() => {
        navigate("/");
      });
  };

  return (
    <div className="edit-product-container">
      <h1>Edit Product</h1>
      <form className="product_form" onSubmit={handleSubmit(handleEdit)}>
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
              className="inp_form"
            />
          </>
        )}

        <button type="submit">Save</button>
      </form>
    </div>
  );
};
