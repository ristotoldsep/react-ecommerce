import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(item => item.id === productToAdd.id);

  if (existingCartItem) {
    // If product is already in the cart, increment quantity
    const updatedCartItems = cartItems.map(item =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    return updatedCartItems;
  } else {
    // If product is not in the cart, add it with quantity 1
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

const decreaseCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(item => item.id === cartItemToRemove.id);

  if (existingCartItem) {
    if (existingCartItem.quantity === 1) {
      // If quantity is 1, remove the item from cart
      const updatedCartItems = cartItems.filter(item => item.id !== cartItemToRemove.id);
      return updatedCartItems;
    } else {
      // If quantity is greater than 1, decrement quantity
      const updatedCartItems = cartItems.map(item =>
        item.id === cartItemToRemove.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return updatedCartItems;
    }
  }

  return cartItems; // If the item is not in the cart, return the unchanged array
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Calculate the total number of items in the cart
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

    setCartCount(newCartCount);

  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(decreaseCartItem(cartItems, cartItemToRemove));
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, removeItemFromCart, cartCount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
