import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./products.api";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { addToBasket } from "../basket/basket.slice";

export const Products = () => {
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleMoveToCart = (product) => {
    dispatch(addToBasket({ ...product, _count: 1 }));
    toast.success(`${product.title} has been added to your cart!`);
  };

  return (
    <>
      <h1>Products</h1>
      <h2>Total Products: {products.length}</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Category: {product.category}</p>
            <Link to={`/product/edit/${product.id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={() => handleMoveToCart(product)}>
              Move to cart
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
