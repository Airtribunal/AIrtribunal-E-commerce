import React from 'react';

const CartItem = (props) => {
    const { theme, name, img, price, deleteFromCart } = props

    return (
        <div className="product-card">
            <img className="product-img" src={img} alt={name} />
            <h2 className={theme ? "cart-item-name dark" : "cart-item-name"}>{name}</h2>
            <p className={theme ? "cart-item-price dark" : "cart-item-price"}>{`${price}$`}</p>
            <span className="product-cart">
                <img
                    id="cart-add"
                    src="/images/bag.png"
                    alt="product"
                    className="cart-icon"
                    onClick={deleteFromCart}
                />
            </span>
        </div>
    );
}

export default CartItem;
