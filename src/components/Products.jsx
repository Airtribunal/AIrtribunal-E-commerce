import React, { useEffect, useState } from 'react';
import Card from './Card';
// import data from '../data';
import useFetch from '../hooks/useFetch';
import { nanoid } from 'nanoid';

const Products = (props) => {
    const { theme, handleAddToCart } = props
    // Fetching Data
    const { data, error, loading } = useFetch("http://localhost:1337/api/proitems?populate=*")
    if (loading) return <p>loading...</p>
    if (error) return <p>error</p>
    
    const products = data[0].map((product) => {
        const url = product.attributes.itemImage.data.attributes.url
        return (
            <Card
                key={nanoid()}
                id={product.id}
                img={`http://localhost:1337${url}`}
                name={product.attributes?.itemTitle}
                price={product.attributes?.itemPrice}
                addToCart={() => handleAddToCart(product)}
            />
        )
    })

    return (
        <section id="products" className={theme ? "products-section dark" : "products-section"}>
            <h1 className="main-title">Our Products</h1>
            <div className="main-container">
                <div className="products">
                    {products}
                </div>
            </div>
        </section>
    );
}

export default Products;
