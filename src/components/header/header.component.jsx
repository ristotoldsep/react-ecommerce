import React from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import './header.styles.scss';

const Header = () => {
  return (
    <div className="navigation">
      <Link className="logo-container" to="/">
        <CrownLogo className="logo" />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
        <Link className="nav-link" to="/sign-in">
          SIGN IN
        </Link>
      </div>
    </div>
  );
};

export default Header;
