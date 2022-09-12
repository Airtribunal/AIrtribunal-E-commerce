import React, { useEffect, useState } from 'react';

const Card = (props) => {
    const { addToCart } = props

    return (
        <div className="product-card">
            <img className="product-img" src={props.img} alt={props.name} />
            <h2 className="product-title">{props.name}</h2>
            <span className="product price">{`$ ${props.price}`}</span>
            <span className="product-cart">
                <box-icon
                    id="cart-add"
                    name='shopping-bag'
                    onClick={addToCart}
                    className="product-icon"
                    color="#fff"
                >
                </box-icon>
            </span>
        </div>
    );
}

export default Card;
