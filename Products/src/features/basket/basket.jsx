import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromBasket,
} from "./basket.slice";

export const Basket = () => {
  const cartItems = useSelector((state) => state.basket.items);
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item));
  };

  const handleDecrement = (item) => {
    dispatch(decrementQuantity(item));
  };

  const handleRemove = (item) => {
    dispatch(removeFromBasket(item));
  };
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item._count,
    0
  );

  return (
    <div>
      <h1>Basket</h1>
      {cartItems.length === 0 ? (
        <p>Basket is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item._count}</p>
              <button onClick={() => handleIncrement(item)}>+</button>
              <button onClick={() => handleDecrement(item)}>-</button>
              <button onClick={() => handleRemove(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <div>
        <h2>Total Price: ${totalPrice}</h2>
      </div>
    </div>
  );
};
