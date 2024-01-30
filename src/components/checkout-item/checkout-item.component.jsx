import { useContext } from "react";

import "./checkout-item.styles.scss";

import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

  const clearItemHandler = () => {
    clearItemFromCart(cartItem);
  }

  const increaseQuantityHandler = () => addItemToCart(cartItem);
  const decreaseQuantityHandler = () => removeItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decreaseQuantityHandler}>
          &#10094;
        </div>
          <span className="value">{quantity}</span>
        <div className="arrow" onClick={increaseQuantityHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;