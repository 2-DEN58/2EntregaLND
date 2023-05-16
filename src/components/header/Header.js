import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">Hangar</a>
          </li>
          <li>
            <a href="/creator">Creator</a>
          </li>
          <li>
            <a href="/engine">Engine</a>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;

        /*  <li>
            <a href="/records">Records</a>
          </li>*/