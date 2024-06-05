'use client'

import React, { useState } from 'react'
import OptionCard from './OptionCard';
import OptionList from './OptionList';
import OptionSection from './OptionList';



const TreeNavigation = ({ menu = [] }) => {



    return (
        <div className='Left-nav'>
            <OptionList list={menu} />
        </div>
    )
}


export default TreeNavigation