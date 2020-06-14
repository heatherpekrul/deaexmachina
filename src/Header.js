import React from 'react';
import logo from './img/logo.svg';

const Header = () => {
  return (
    <header className="app__header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
}

export default Header;