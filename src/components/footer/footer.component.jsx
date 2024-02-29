import React from 'react';
import { SiteFooter } from './footer.styles';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <SiteFooter>
        <p>React eCommerce Shop &copy; {currentYear}. All rights reserved.</p>
    </SiteFooter>
  );
}

export default Footer;
