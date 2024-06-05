import React from 'react'
import OptionCard from './OptionCard'

const OptionList = ({ list }) => {
    return (
        <ul className='list-container'>
            {list && list.length ? (
                list.map((item, index) => {
                    return (
                        <OptionCard item={item} />
                    )
                })
            ) : null}
        </ul>
    )
}

export default OptionList