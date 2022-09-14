import React from 'react';

const CartItem = (props) => {
    const { theme, name, img, price, deleteFromCart } = props

    return (
        <div className="product-card">
            <img className="product-img" src={img} alt={name} />
            <h2 className={theme ? "cart-item-name dark" : "cart-item-name"}>{name}</h2>
            <p className={theme ? "cart-item-price dark" : "cart-item-price"}>{`$ ${price}`}</p>
            <span
                onClick={deleteFromCart}
                className="product-cart remove-btn"
            >
                <box-icon
                    name='trash'
                    color="#fff"
                    className="product-icon"
                >
                </box-icon>
            </span>
        </div>
    );
}

export default CartItem;
