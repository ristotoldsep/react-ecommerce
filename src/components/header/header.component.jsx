import { useContext } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import './header.styles.scss';

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
    <div className="navigation">
      <Link className="logo-container" to="/">
        <CrownLogo className="logo" />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
        {currentUser ? (
          <span className="nav-link" onClick={signOutUser}>
            SIGN OUT
          </span>
        ) : (
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>

      {isCartOpen && (
        <CartDropdown />
      )}

    </div>
  );
};

export default Header;
