import React from 'react';

const CartItem = (props) => {
    const { theme, name, img, price } = props

    return (
        <div className="cart-item">
            <div className="cart-item-content">
                <img src={img} alt="" className="cart-item-img" />
                <h2 className={theme ? "cart-item-name dark" : "cart-item-name"}>{name}</h2>
                <p className={theme ? "cart-item-price dark" : "cart-item-price"}>{price}</p>
            </div>
            <button className="remove-btn">remove</button>
        </div>
    );
}

export default CartItem;
