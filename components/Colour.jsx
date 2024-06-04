'use client'
import React, { useState } from 'react'
const hexArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

const Colour = () => {

    const [color, setColor] = useState('')
    const [colorType, setcolorType] = useState('')


    const handleColourChangeBtns = (e) => {
        const BtnType = e.target.id
        if (BtnType === 'HexBtn') {
            console.log('hex');
            const hexColor = generateRandomHexNumber(hexArray);
            setColor(hexColor)
            setcolorType('Hex')
        } else if (BtnType === 'RGBBtn') {
            console.log('rgb');
            const rgbColor = generateRandomRGBNumber();
            setcolorType('RGB')
            setColor(rgbColor)
        }
        return
    }

    const generateRandomHexNumber = (hArray) => {
        let hString = '#';
        for (let index = 0; index < 6; index++) {
            const randomNumber = Math.floor(Math.random() * hArray.length);
            console.log(randomNumber);
            hString = hString + hArray[randomNumber];
        }
        console.log(hString);
        return hString;
    }


    const generateRandomRGBNumber = () => {

        let rgbString = [];
        for (let index = 0; index < 3; index++) {
            const randomNumber = Math.floor(Math.random() * 255);
            console.log(randomNumber);
            rgbString[index] = randomNumber;

        }
        console.log(`rgb(${rgbString[0]},${rgbString[1]},${rgbString[2]})`);
        return `rgb(${rgbString[0]},${rgbString[1]},${rgbString[2]})`;
    }

    return (
        <section className='colourChange'>
            <div className='colorBox' style={{ background: color }}>
                <div>
                    {colorType}
                </div>
                <div>
                    {color}
                </div>
            </div>
            <div onClick={handleColourChangeBtns}>
                <button id='HexBtn' className='colorBtn'>Hex Colour</button>

                <button id='RGBBtn' className='colorBtn'>RGB colour</button>
            </div>
        </section>
    )
}

export default Colour