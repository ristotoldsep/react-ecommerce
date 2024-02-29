import { useContext } from "react";

import { Arrow, BaseSpan, CheckoutItemContainer, ImageContainer, Quantity, RemoveButton, Value } from "./checkout-item.styles";

import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const increaseQuantityHandler = () => addItemToCart(cartItem);
  const decreaseQuantityHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer className="checkout-item-container">
      <ImageContainer className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan className="name">{name}</BaseSpan>
      <Quantity className="quantity">
        <Arrow className="arrow" onClick={decreaseQuantityHandler}>
          &#10094;
        </Arrow>
          <Value className="value">{quantity}</Value>
        <Arrow className="arrow" onClick={increaseQuantityHandler}>
          &#10095;
        </Arrow>
      </Quantity>
      <BaseSpan className="price">{price}</BaseSpan>
      <RemoveButton className="remove-button" onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
