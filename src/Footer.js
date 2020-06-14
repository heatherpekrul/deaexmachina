import React from 'react';
import Config from './config';

const Footer = () => {
  return (
    <footer className="App-footer">
      &copy; Copyright 2020 <a href="https://heatherpekrul.com">{ Config.author }</a>.
      All rights reserved.
    </footer>
  );
}

export default Footer;