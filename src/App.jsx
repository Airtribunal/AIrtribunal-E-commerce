import React, { useEffect, useState } from 'react';
import "./App.css";
import { Navbar, Products, Cart, Homepage } from './components/index';
import { Routes, Route } from 'react-router';
import "boxicons"

const App = () => {
  const [isCleared, setIsCleared] = useState(true)
  // Dark Mode 
  const getTheme = () => {
    return JSON.parse(localStorage.getItem("theme")) || false
  }

  const [isDark, setIsDark] = useState(getTheme())

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDark))
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(prevIsDark => !prevIsDark)
  }
  // Dark Mode

  // Adding to Cart
  const [cartArray, setCartArray] = useState(JSON.parse(localStorage.getItem("cartArray")) || [])
  useEffect(() => {
    localStorage.setItem("cartArray", JSON.stringify(cartArray))
    if (cartArray.length > 0) {
      setIsCleared(false)
    }
  }, [cartArray])

  function addToCart(product) {
    setCartArray(prevCartArray => {
      return [...prevCartArray, product]
    })
    setIsCleared(false)
  }
  // Adding to Cart

  // Deleting from Cart
  function deleteFromCart(id) {
    let newCartArray = cartArray.filter((item) => item.id !== id)
    localStorage.setItem("cartArray", JSON.stringify(newCartArray))
    setCartArray(newCartArray)
    window.location.reload()
  }
  // Deleting from Cart

  // Clear the whole cart
  function clearCart() {
    setIsCleared(true)
    localStorage.removeItem("cartArray")
    if (!isCleared) {
      window.location.reload()
    }
  }
  // Clear the whole cart

  return (
    <main className={isDark ? "biggest dark" : "biggest"}>
      <section className={isDark ? "navbar dark" : "navbar"}>
        <Navbar theme={isDark} handleToggle={toggleTheme} />
      </section>
      <section className="main">
        <div className={isDark ? "routes dark" : "routes"}>
          <Routes>
            <Route exact path='/' element={<Homepage
              theme={isDark}
              handleToggle={toggleTheme}
            />}
            />
            <Route exact path='/cart' element={<Cart
              theme={isDark}
              handleToggle={toggleTheme}
              cartArray={cartArray}
              handleDeleteFromCart={deleteFromCart}
              handleClearCart={clearCart}
              isCleared={isCleared}
            />}
            />
            <Route exact path="/products" element={<Products
              theme={isDark}
              handleToggle={toggleTheme}
              handleAddToCart={addToCart}
            />}
            />
          </Routes>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="link">
              <box-icon name='phone' color="#fff" type='solid' ></box-icon>
              <a href="tel:+79322488005">+7 932 248 80 05</a>
            </div>
            <div className="link">
              <box-icon name='envelope' color="#fff"></box-icon>
              <a href="mailto:airtribunal@gmail.com">airtribunal@gmail.com</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;