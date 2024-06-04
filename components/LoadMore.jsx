'use client'
import React, { useEffect, useState } from 'react'

const baseUrl = 'https://dummyjson.com/products';

const LoadMore = () => {
    const [counter, setCounter] = useState(0);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchProducts = async (limit = 10) => {
            try {
                const result = await fetch(`${baseUrl}?limit=10&skip=${counter === 0 ? 0 : counter * 20}&select=title,price`);
                const moreProducts = await result.json();
                const newMoreProducts = await moreProducts.products;
                console.log(newMoreProducts);

                setProducts((prev) => [...prev, ...newMoreProducts]);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);

            }

        }
        fetchProducts();
    }, [counter])

    if (isLoading) {
        return (
            <div>Products Loading......</div>
        )
    }

    return (
        <>

            <div className='products-box'>
                {console.log(counter)}

                {console.log(products)}
                {products && products.map((prod, index) => {
                    return (
                        <div className='product-card' key={index}>
                            <div>Name:{prod.title}</div>
                            <div>$:{prod.price}</div>
                        </div>
                    )
                })}
            </div>
            <button className='btn btn-blue' disabled={counter == 9} onClick={() => {
                setIsLoading(true);
                setCounter((prev) => prev + 1)
            }}>load next {counter}</button>
        </>

    )
}

export default LoadMore