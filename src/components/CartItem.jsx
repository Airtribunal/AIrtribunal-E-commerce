import React from 'react';

const CartItem = () => {
    return (
        <div className="cart-item">
            <div className="cart-item-content">
                <img src="/images/product9.jpg" alt="" className="cart-item-img" />
                <h2 className="cart-item-name">Aiaiaia</h2>
                <p className="cart-item-price">$ 45</p>
            </div>
            <button className="remove-btn">remove</button>
        </div>
    );
}

export default CartItem;
