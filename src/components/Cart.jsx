import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    const { theme } = props 

    return (            
        <>
            <div className="cart-section">
                <div className="container">
                    <h1 className={theme ? "cart-title dark" : "cart-title"}>Your cart</h1>
                    <div className="cart-products">
                        <CartItem theme={theme}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
