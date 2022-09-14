import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import { Switch } from 'evergreen-ui'
import { FaBars } from "react-icons/fa"
import { IoMdClose } from "react-icons/io"

const Navbar = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [isMobile, setIsMobile] = useState(true)

    const navigation = [
        { id: 1, path: "/", name: "home", direction: "" },
        { id: 2, path: "products", name: "products", direction: "products" },
        { id: 3, path: "/", name: "contact", direction: "contact" }
    ]

    function handleNavClosing() {
        if (isActive) {
            setTimeout(() => {
                setIsActive(false)
            }, 200)
        }
    }

    const navigationLinks = navigation.map(({ id, path, name, direction }) => {
        return (
            <NavLink
                key={id}
                to={path}
                className="nav-link"
                onClick={() => {
                    window.location.replace(`#${direction}`)
                    handleNavClosing()
                }}
            >
                {name}
            </NavLink>
        )
    })

    function handleMobile() {
        setIsActive(prevActive => !prevActive)
    }

    const { handleToggle, theme } = props

    return (
        <div className="nav">
            <div className="container">
                <div className="navigation">
                    <Link to="/" onClick={() => window.location.replace("#")}><h1 className="logo" lang='en'>Airtribunal</h1></Link>
                    <div 
                        className={isActive & theme ? "nav-links activee dark" : isActive & !theme ? "nav-links activee" : theme ? "nav-links dark" : "nav-links"}
                    >
                        {navigationLinks}
                        <NavLink 
                            to="/cart" 
                            className="nav-link"
                            onClick={handleNavClosing}
                        >
                                <img 
                                    id="cart-nav" 
                                    src="/images/bag-gradient.png" 
                                    alt="" 
                                    className="cart-icon nav-cart" 
                                />
                            </NavLink>
                        <Switch checked={theme} onChange={handleToggle} />
                    </div>
                    <div className="bars">
                        {isActive || !isMobile ?
                            <IoMdClose color={theme ? "#fff" : "#000"} className="close-bars" onClick={handleMobile} />
                            : <FaBars color={theme ? "#fff" : "#000"} className="open-bars" onClick={handleMobile} />
                        }
                    </div>
                </div>
            </div>
            <div />
        </div >
    );
}

export default Navbar;
