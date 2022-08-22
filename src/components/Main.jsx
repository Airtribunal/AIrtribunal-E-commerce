import React, { useState } from 'react';
import Card from './Card';
import data from '../data';
import { nanoid } from 'nanoid';

const Main = () => {
    const products = data.map((product) => {
        return (<Card
            key={nanoid()}
            img={product.img}
            name={product.name}
            price={product.price}
        />)
    })

    return (
        <section className="products-section">
            <div className="main-container">
                <h1 className="main-title">Our Products</h1>
                <div className="products">
                    {products}
                </div>
            </div>
        </section>
    );
}

export default Main;
