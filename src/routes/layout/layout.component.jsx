import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import './layout.styles.scss';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

const Layout = () => {
  return (
    <Fragment>
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
      <Outlet />
      <div className="footer">
        <h2>Footer &copy; 2024</h2>
      </div>
    </Fragment>
  );
};

export default Layout;