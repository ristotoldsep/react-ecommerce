import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import './layout.styles.scss';

import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";

const Layout = () => {
  return (
    <Fragment>
      <Header />
        <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Layout;