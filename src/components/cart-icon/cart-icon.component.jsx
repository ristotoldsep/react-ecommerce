import React, { /* useContext, */ useEffect, useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";

import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
// import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = (event) => {
    event.stopPropagation(); // Stop the event from propagating to the body
    dispatch(setIsCartOpen(!isCartOpen));
  };

  const closeCartOnClickOutside = useCallback((event) => {
    const cartDropdown = document.querySelector(".cart-dropdown-container");
    const cartIcon = document.querySelector(".cart-icon-container");

    if (!isCartOpen) return; // Only run this if the cart is open

    if (
        cartDropdown &&
        !cartDropdown.contains(event.target) &&
        cartIcon &&
        !cartIcon.contains(event.target)
    ) {
        console.log("Click outside detected, closing cart");
        dispatch(setIsCartOpen(false)); 
    }
  }, [dispatch, isCartOpen]);

  useEffect(() => {
    console.log("Adding event listener to body"); // Debugging log
    document.body.addEventListener("click", closeCartOnClickOutside);

    return () => {
        console.log("Removing event listener from body"); // Debugging log
        document.body.removeEventListener("click", closeCartOnClickOutside);
    };
}, [closeCartOnClickOutside]); // Ensure dependency is correct

  return (
    <CartIconContainer className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;