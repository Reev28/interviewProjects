import React, { useState } from 'react'
import OptionList from './OptionList'
import OptionSection from './OptionList'
import TreeNavigation from './TreeNavigation'

const OptionCard = ({ item }) => {

    const [opened, setOpened] = useState({});

    const handleOpen = (item) => {
        setOpened((prev) => {
            return (
                { ...prev, [item]: !prev[item] }
            )
        })
    }

    return (
        <>
            {console.log(opened)}
            <li>
                <p>{item.label}{item && item.children ? <span onClick={() => handleOpen(item.label)}>{opened[item.label] ? '-' : '+'}</span> : null}</p>
                {item && item.children && opened[item.label] ? <OptionList list={item.children} /> : null}
            </li>
        </>
    )
}

export default OptionCard