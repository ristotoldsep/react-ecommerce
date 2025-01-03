import React, { useContext, useEffect, useCallback } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = (event) => {
    event.stopPropagation(); // Stop the event from propagating to the body
    setIsCartOpen(!isCartOpen);
  };

  // Memoizing closeCartOnClickOutside to prevent unnecessary re-creations
  const closeCartOnClickOutside = useCallback((event) => {
    const cartDropdown = document.querySelector(".cart-dropdown-container");
    if (cartDropdown && !cartDropdown.contains(event.target)) {
      setIsCartOpen(false);
    }
  }, [setIsCartOpen]); // Dependencies ensure correct state updates

  useEffect(() => {
    document.body.addEventListener("click", closeCartOnClickOutside);
    return () => {
      document.body.removeEventListener("click", closeCartOnClickOutside);
    };
  }, [closeCartOnClickOutside]); // Now ESLint is happy 🎉

  return (
    <CartIconContainer className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;