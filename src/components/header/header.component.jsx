import { useContext } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import './header.styles.scss';

import { UserContext } from "../../contexts/user.context";

const Header = () => {

  const { currentUser } = useContext(UserContext);

  console.log(currentUser);

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
          <Link className="nav-link" to="/auth">
            SIGN OUT
          </Link>
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
