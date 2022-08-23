import React from 'react';
import "./App.css";
import { Navbar, Products, Cart, Contact, Homepage } from './components/index';
import { Layout } from 'antd';
import { Routes, Route } from 'react-router';

const App = () => {

  return (
    <>
      <section className="navbar">
        <Navbar />
      </section>
      <section className="main">
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path="/contact" element={<Homepage />} />
          <Route exact path="/products" element={<Products />} />
        </Routes>
      </section>
      <footer className="footer">

      </footer>
    </>
  );
}

export default App;