import React, { useState } from 'react';
import "./App.css";
import { Navbar, Main } from './components/index';

const App = () => {
  return (
    <>
      <section className="navbar">
        <Navbar />
      </section>
      <div className="main">
        <Main />
      </div>
      <footer className="footer">

      </footer>
    </>
  );
}

export default App;