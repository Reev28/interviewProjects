'use client'
import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";

const Rating = ({ totalStars }) => {

    const [mouseIsOn, setMouseIsOn] = useState(0);
    const [currentRating, setCurrentRating] = useState(0);

    const handleMouseMove = (id) => {
        console.log(id);
        setMouseIsOn(id);
    }

    const handleMouseLeave = (id) => {
        console.log(id);
        setMouseIsOn(currentRating);
    }
    const handleClick = (id) => {
        console.log(id);
        setCurrentRating(id);
    }

    return (
        <div className='Rating-div'>
            {[...Array(totalStars)].map((_, index) => {
                index += 1;
                return (
                    <div key={index} onMouseMove={() => handleMouseMove(index)} onMouseLeave={() => handleMouseLeave(index)} onClick={() => handleClick(index)} className={index <= mouseIsOn ? 'activeRating' : ''}  > <FaStar size={70} /></div>)
            }
            )
            }
            <div onClick={() => { setMouseIsOn(0); setCurrentRating(0); }}>Reset</div>
        </div>

    )
}

export default Rating