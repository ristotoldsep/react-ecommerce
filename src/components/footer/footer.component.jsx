import React from 'react';
import './footer.styles.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='footer'>
      <div className='footer-content'>
        <p>React eCommerce Shop &copy; {currentYear}. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
