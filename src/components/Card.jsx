import React, { useState } from 'react';

const Card = (props) => {
    return (
        <div className="product-card">
            <div className="product-img">
                <img src={props.img} alt={props.name} />
            </div>
            <h2 className="product-title">{props.name}</h2>
            <span className="product price">{`$ ${props.price}`}</span>
            <span className="product-cart">
                <img id="cart-add" src="/images/bag.png" alt="" className="cart-icon" />
            </span>
        </div>
    );
}

export default Card;
