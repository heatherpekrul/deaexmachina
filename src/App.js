import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Intro from './Intro';
import Platforms from './Platforms';
import Overwatch from './Overwatch';
import Specs from './Specs';
import Accolades from './Accolades';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Intro />
        <Platforms />
        <Overwatch />
        <Accolades />
        <Specs />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
