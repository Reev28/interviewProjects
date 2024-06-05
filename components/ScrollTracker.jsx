'use client'
import React, { useEffect, useState } from 'react'

export const ScrollTracker = ({ url }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [prodData, setProdData] = useState([]);
    const [scrolled, setScrolled] = useState(10)
    const fetchData = async (url) => {
        setIsLoading(true);
        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log('data:', data);
            if (data && data.products && data.products.length > 0) {
                setProdData(data.products);
            }
            setIsLoading(false);

        } catch (error) {
            console.dir(error);
            setErrorMessage(error.message);
            setIsLoading(false);
        }

    }

    useEffect(() => {
        if (url) fetchData(url);
    }, [])


    const handleScroll = () => {
        console.log(document.body.scrollTop, document.documentElement.scrollTop, document.documentElement.scrollHeight, document.documentElement.clientHeight);
        const scrolledPart = document.body.scrollTop || document.documentElement.scrollTop;
        const totalScrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolledPercentage = (scrolledPart / totalScrollableHeight) * 100;
        console.log(scrolledPercentage);
        setScrolled(scrolledPercentage);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', () => { })
        }
    }, [])




    if (isLoading) {
        return <div>Loading...</div>
    }
    if (errorMessage) {
        return <div>Error...{errorMessage}</div>
    }
    return (
        <div className='scrollComponent'>
            <div className='Top-Container'>
                <h1>Scroll Progress</h1>
                <div className='full-scroll-bar'>
                    <div className='scroll-progress' style={{ width: scrolled + '%' }}></div>
                </div>
            </div>

            <div className='products-container'>
                {prodData && prodData.length > 0 ? prodData.map((item, index) => <p key={index}>{item.title}</p>) : <p>No Products Found</p>}
            </div>
        </div>
    )
}
