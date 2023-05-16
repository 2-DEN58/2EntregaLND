import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="contact">
        <p>Phone: +1 (555) 123-4567</p>
      </div>
      <div className="social-media">
        <a href="https://facebook.com">Facebook</a>
        <a href="https://twitter.com">Twitter</a>
        <a href="https://instagram.com">Instagram</a>
      </div>
      <div className="copy">
        <p>Copyright © 2023 Your Company</p>
      </div>
    </footer>
  );
};

export default Footer;