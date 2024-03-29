import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';

const CartDropdown = () => {

  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('/checkout');
  };

  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
        {cartItems.length > 0 ? (
          <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
        ) : (
          <Button onClick={goToShop}>GO TO SHOP</Button>
        )}
      </CartItems>
    </CartDropdownContainer>
  );
}

export default CartDropdown;