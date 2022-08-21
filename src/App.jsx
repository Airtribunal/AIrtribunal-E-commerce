import React, { useState } from 'react';
import "./App.css";
import { Navbar, Main, Cart, Contact } from './components/index';
import { Layout } from 'antd';
import { Routes, Route, Link } from 'react-router';

const App = () => {
  return (
    <>
      <section className="navbar">
        <Navbar />
      </section>
      <section className="main">
        <Layout>
          <Routes>
            <Route exact path='/' element={<Main />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/products" element={<Main/>} />
          </Routes>
        </Layout>
      </section>
      <footer className="footer">

      </footer>
    </>
  );
}

export default App;