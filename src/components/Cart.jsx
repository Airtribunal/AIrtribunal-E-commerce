import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';
import { nanoid } from 'nanoid';

const Cart = (props) => {
    const { theme, cartArray, handleDeleteFromCart, handleClearCart, isCleared } = props
    const [total, setTotal] = useState(0)

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

    useEffect(() => {
        cartArray.map((cartElement) => {
            return setTotal(prevTotal => prevTotal + cartElement.price)
        })
    }, [cartArray])

    return (
        <>
            <div className="cart-section">
                <div className="container">
                    <h1 className={theme ? "cart-title dark" : "cart-title"}>Your cart</h1>
                    <p className={theme ? "total-price dark" : "total-price"}>{`Your total is $ ${total.toFixed(2)}`}</p>
                    <div className="cart-products">
                        {cartElements}
                    </div>
                    <div className="clear-all-products-btn">
                        <button className="clear-products-btn" onClick={handleClearCart}>
                            {isCleared ? "nothing to clear" : "Clear all the products"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
