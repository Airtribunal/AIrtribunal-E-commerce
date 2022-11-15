import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { nanoid } from "nanoid";

const Cart = (props) => {
  const { theme, cartArray, handleDeleteFromCart, handleClearCart, isCleared } =
    props;
  const [total, setTotal] = useState(0);
  const [productsAmount, setProductsAmount] = useState(0);

  const cartElements = cartArray.map((cartElement) => {
    console.log(cartElement.attributes?.itemPrice);
    const url = cartElement.attributes.itemImage.data.attributes.url;
    return (
      <CartItem
        theme={theme}
        key={nanoid()}
        id={cartElement.id}
        img={`http://localhost:8091${url}`}
        name={cartElement.attributes?.itemTitle}
        price={cartElement.attributes?.itemPrice}
        deleteFromCart={() => handleDeleteFromCart(cartElement.id)}
      />
    );
  });

  useEffect(() => {
    cartArray.map((cartElement) => {
      let newTotal = (prevTotal) =>
        prevTotal + cartElement.attributes?.itemPrice;
      setTotal(newTotal);
      setProductsAmount((prevAmount) => prevAmount + 1);
    });
  }, [cartArray]);

  return (
    <>
      <div className="cart-section">
        <div className="container">
          <h1 className={theme ? "cart-title dark" : "cart-title"}>
            Your cart
          </h1>
          <p
            className={theme ? "total-price dark" : "total-price"}
          >{`Your total is $ ${total.toFixed(2)}`}</p>
          <p
            className={theme ? "total-price dark" : "total-price"}
          >{`Products in cart: ${productsAmount}`}</p>

          <div className="cart-products">{cartElements}</div>
          <div className="products-btn">
            <button className="product-btn" onClick={handleClearCart}>
              {isCleared ? "nothing to clear" : "Clear all the products"}
            </button>
            <button className="product-btn">Purchase</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
