import React from 'react';
import { Link } from "react-router-dom";
import "boxicons";

const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav-container">
                <Link to="/" onClick={() => window.location.replace("#")}><h1 className="logo">Airtribunal</h1></Link>
                <div className="nav-links">
                    <Link to="/" className="nav-link"  onClick={() => window.location.replace("#")}>home</Link>
                    <Link to="/products" className="nav-link">products</Link>
                    <Link to="/contact" className="nav-link">contact</Link>
                    <Link to="/cart" className="nav-link"><img id="cart-nav" src="/images/bag-gradient.png" alt="" className="cart-icon nav-cart" /></Link>
                </div>
            </div>
            <div />
        </div>
    );
}

export default Navbar;
