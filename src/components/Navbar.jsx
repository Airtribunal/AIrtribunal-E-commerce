import React from 'react';
import { Link } from "react-router-dom";
import "boxicons";

const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav-container">
                <Link to="/"><h1 className="logo">Airtribunal</h1></Link>
                <box-icon id="cart" className="cart-icon" name='shopping-bag'></box-icon>
            </div>
            <div />
        </div>
    );
}

export default Navbar;
