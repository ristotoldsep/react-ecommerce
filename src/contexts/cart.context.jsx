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

const clearCartItem = (cartItems, cartItemToClear) => {
  const updatedCartItems = cartItems.filter(item => item.id !== cartItemToClear.id);
  return updatedCartItems;
}

export const CartContext = createContext({
  setIsCartOpen: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
});

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
}

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_ITEM':
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, payload),
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cartItems: decreaseCartItem(state.cartItems, payload),
      };
    case 'CLEAR_ITEM':
      return {
        ...state,
        cartItems: clearCartItem(state.cartItems, payload),
      };
    case 'SET_CART_OPEN':
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`Unhandled action type: ${type} in cartReducer`);;
  }
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    // Calculate the total number of items in the cart
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

    setCartCount(newCartCount);

  }, [cartItems])

  useEffect(() => {
    // Calculate the total number of items in the cart
    const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

    setCartTotal(newCartTotal);

  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  // Decrease quantity and remove if 1 remaining
  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(decreaseCartItem(cartItems, cartItemToRemove));
  };
  
  // Remove X button functionality
  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, removeItemFromCart, cartCount, cartTotal, clearItemFromCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
