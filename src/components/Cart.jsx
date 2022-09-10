import React from 'react';
import CartItem from './CartItem';
import { nanoid } from 'nanoid';

const Cart = (props) => {
    const { theme, cartArray, handleDeleteFromCart } = props

    const cartElements = cartArray.map((cartElement) => {
        return (
            <CartItem
                theme={theme}
                key={nanoid()}
                id={cartElement.id}
                img={cartElement.img}
                name={cartElement.name}
                price={cartElement.price}
                deleteFromCart={() => handleDeleteFromCart(cartElement.id)}
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
                    <div className="clear-all-products-btn">
                        <button>
                            Clear all the products
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
