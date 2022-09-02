import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Switch } from 'evergreen-ui'
import { FaBars } from "react-icons/fa"
import { IoMdClose } from "react-icons/io"

const Navbar = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [isMobile, setIsMobile] = useState(true)

    function handleMobile() {
        setIsActive(prevActive => !prevActive)
    }

    const { handleToggle, theme } = props

    return (
        <div className="nav">
            <div className="container">
                <div className="navigation">
                    <Link to="/" onClick={() => window.location.replace("#")}><h1 className="logo">Airtribunal</h1></Link>
                    <div className={isActive & theme ? "nav-links active dark" : isActive ? "nav-links active" : "nav-links"}>
                        <Link to="/" className="nav-link" onClick={() => window.location.replace("#")}>home</Link>
                        <Link to="/products" className="nav-link" onClick={() => window.location.replace("#")}>products</Link>
                        <Link to="/" onClick={() => window.location.replace("#contact")} className="nav-link">contact</Link>
                        <Link to="/cart" className="nav-link"><img id="cart-nav" src="/images/bag-gradient.png" alt="" className="cart-icon nav-cart" /></Link>
                        <Switch checked={theme} onChange={handleToggle} />
                    </div>
                    <div className="bars">
                        {isActive || !isMobile?
                            <IoMdClose color={theme ? "#fff" : "#000"} className="close-bars" onClick={handleMobile} />
                            : <FaBars color={theme ? "#fff" : "#000"} className="open-bars" onClick={handleMobile} />
                        }
                    </div>
                </div>
            </div>
            <div />
        </div>
    );
}

export default Navbar;
