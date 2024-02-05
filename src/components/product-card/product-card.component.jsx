import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import './product-card.styles.scss';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

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
    <div className="product-card-container" onClick={navigateToProductDetails}>
      <img src={imageUrl} alt={`${name}`} />
      <div className="product_footer">
        <span className="name">{name}</span>
        <span className="price">{price}€</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
