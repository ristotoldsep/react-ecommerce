import { useContext } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
// import { Link } from "react-router-dom";
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from './header.styles.jsx';

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

const Header = () => {

  const { currentUser/* , setCurrentUser */ } = useContext(UserContext);

  // console.log(currentUser);

  // const signOutHandler = async () => {
  //   const response = await signOutUser();
  //   console.log(response);

  //   setCurrentUser(null);
  // }

  const { isCartOpen } = useContext(CartContext);

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
          <NavLink as="span" className="nav-link" onClick={signOutUser}>
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
