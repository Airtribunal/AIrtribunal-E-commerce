import React from 'react';
import CartItem from './CartItem';
import { nanoid } from 'nanoid';

const Cart = (props) => {
    const { theme, cartArray } = props

    const cartElements = cartArray.map((cartElement) => {
        return (
            <CartItem
                theme={theme}
                key={nanoid()}
                id={nanoid()}
                img={cartElement.img}
                name={cartElement.name}
                price={cartElement.price}
            />
        )
    })

    return (
        <>
            <div className="cart-section">
                <div className="container">
                    <h1 className={theme ? "cart-title dark" : "cart-title"}>Your cart</h1>
                    <div className="cart-products">
                        {cartElements}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
