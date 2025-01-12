// import { useContext } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from './header.styles.jsx';

import { useSelector } from "react-redux";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

// import { CartContext } from "../../contexts/cart.context";

import { selectCurrentuser } from "../../store/user/user.selector.js";
import { selectIsCartOpen } from "../../store/cart/cart.selector.js";

import { signOutUser } from "../../utils/firebase/firebase.utils";

const Header = () => {

  const currentUser = useSelector(selectCurrentuser); // Getting state from REDUX STORE

  // console.log(currentUser);

  // const signOutHandler = async () => {
  //   const response = await signOutUser();
  //   console.log(response);

  //   setCurrentUser(null);
  // }

  // const { isCartOpen } = useContext(CartContext);

  const isCartOpen = useSelector(selectIsCartOpen); // Getting state from REDUX STORE

  return (
    <NavigationContainer>
      <LogoContainer className="logo-container" to="/">
        <CrownLogo className="logo" />
      </LogoContainer>
      <NavLinksContainer>
        <NavLink className="nav-link" to="/shop">
          SHOP
        </NavLink>
        {currentUser ? (
          <NavLink as="span" className="nav-link" title={currentUser?.displayName} onClick={signOutUser}>
            SIGN OUT
          </NavLink>
        ) : (
          <NavLink className="nav-link" to="/auth">
            SIGN IN
          </NavLink>
        )}
        <CartIcon />
      </NavLinksContainer>

      {isCartOpen && (
        <CartDropdown />
      )}

    </NavigationContainer>
  );
};

export default Header;
