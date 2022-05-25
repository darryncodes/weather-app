import React from 'react';

import './Header.module.css';
import weather from '../../img/sun.svg';

const Header = () => {
  return (
    <header>
      <img src={weather} alt="" aria-hidden="true" />
      <h1>
        Discover the <span>weather</span>
        <br /> in your city
      </h1>
    </header>
  );
};
export default Header;
