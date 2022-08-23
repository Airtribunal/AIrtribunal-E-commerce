import React from 'react';
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
            <h1 className="main-title">Our Products</h1>
            <div className="main-container">
                <div className="products">
                    {products}
                </div>
            </div>
        </section>
    );
}

export default Main;
