import React from 'react';

const Card = (props) => {
    return (
        <div className="product-card">
            <div className="product-img">
                <img src={props.img} alt={props.name} />
            </div>
            <h2 className="product-title">{props.name}</h2>
            <span className="product price">{`$ ${props.price}`}</span>
            <span className="product-cart">
                <box-icon id="cart" className="cart-icon" name='shopping-bag'></box-icon>
            </span>
        </div>
    );
}

export default Card;
