import React from 'react';
import { useNavigate } from 'react-router-dom';

// import { useContext } from 'react';
// import { CartContext } from '../../contexts/cart.context';

import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';


const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  
  const { name, price, imageUrl } = product;
  
  // const { addItemToCart } = useContext(CartContext);

  // const addProductToCart = (event) => {
  //   event.stopPropagation();
  //   addItemToCart(product);
  // };

  // USING REDUX STORE INSTEAD OF CONTEXT

  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  // Prevent navigation when clicking "Add to Cart"
  const addProductToCart = (event) => {
    event.stopPropagation(); // Stop event from bubbling to ProductCartContainer
    dispatch(addItemToCart(cartItems, product));
  };

  const navigateToProductDetails = () => {
      // Generate a URL-friendly product name
      const urlFriendlyName = name.toLowerCase().replace(/\s+/g, '-');
      navigate(`/shop/product/${urlFriendlyName}`);
  };

  return (
    <ProductCartContainer onClick={navigateToProductDetails}>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}€</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
