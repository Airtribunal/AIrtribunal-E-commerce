import React, { useState } from 'react';
import "./App.css";
import { Navbar, Main } from './components/index';

const App = () => {
  return (
    <>
      <section className="navbar">
        <Navbar />
      </section>
      <section className="main">
        <Main />
      </section>
      <footer className="footer">

      </footer>
    </>
  );
}

export default App;