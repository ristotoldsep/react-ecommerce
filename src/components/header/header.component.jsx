import { useContext } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import './header.styles.scss';

import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

const Header = () => {

  const { currentUser, setCurrentUser } = useContext(UserContext);

  console.log(currentUser);

  const signOutHandler = async () => {
    const response = await signOutUser();
    console.log(response);

    setCurrentUser(null);
  }

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
          <span className="nav-link" onClick={signOutHandler}>
            SIGN OUT
          </span>
        ) : (
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
