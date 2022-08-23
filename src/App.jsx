import React from 'react';
import "./App.css";
import { Navbar, Products, Cart, Homepage } from './components/index';
import { Routes, Route } from 'react-router';

const App = () => {

  return (
    <>
      <section className="navbar">
        <Navbar />
      </section>
      <section className="main">
        <div className="routes">
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path="/products" element={<Products />} />
          </Routes>
        </div>
      </section>
      <footer className="footer">
        {/* List of tasks:
          footer
          night mode
          skeleton
        */}
      </footer>
    </>
  );
}

export default App;