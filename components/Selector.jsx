'use client'
import React, { useEffect, useState } from 'react'


const Selector = ({ data }) => {

    const [selectedItem, setSelectedItem] = useState(false);
    const [multipleSelectedItem, setMultipleSelectedItem] = useState([]);
    const [singleModeIsOn, setsingleModeIsOn] = useState(true);

    const handleOpen = (id) => {
        if (singleModeIsOn) {
            if (selectedItem == id) {
                setSelectedItem(false);
            }
            else {
                console.log(id);
                // console.log(selectedItem);

                setSelectedItem(id);
            }
        } else {
            console.log('working');
            const indexInArray = multipleSelectedItem.indexOf(id)
            console.log('indexInArray', indexInArray);
            if (indexInArray != -1) {
                const tempArray = [...multipleSelectedItem];
                tempArray.splice(indexInArray, 1);
                setMultipleSelectedItem(tempArray);
            } else {
                const tempArray = [...multipleSelectedItem];

                tempArray.push(id)
                setMultipleSelectedItem(tempArray);

            }
            console.log('array', multipleSelectedItem);

        }

    }

    const handleMultiBtn = () => {
        console.log("Button Clicked");
        setsingleModeIsOn((prev) => !prev);
        setMultipleSelectedItem([]);
        setSelectedItem(false);
    }

    return (
        <section className='quiz-content'>
            <button className='' onClick={handleMultiBtn}>{singleModeIsOn ? 'Use Multi mode' : 'Use Single Mode'}</button>
            {
                data.map((item, index) =>
                    <div className='item-box'>
                        <div className='quention ' onClick={() => handleOpen(item.id)}>{item.question}</div>
                        {singleModeIsOn ? selectedItem ? selectedItem && selectedItem == item.id ? (<div className='answer'>{item.answer}</div>) : <></> : <></> : multipleSelectedItem.indexOf(item.id) != -1 ? (<div className='answer'>{item.answer}</div>) : <></>}
                    </div>
                )
            }
        </section>
    )
}

export default Selector