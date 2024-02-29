import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';


const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const addProductToCart = (event) => {
    event.stopPropagation();
    addItemToCart(product);
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
