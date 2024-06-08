'use client'
import React, { useEffect, useState } from 'react'

const FormInput = ({ fInput, updateError }) => {

    const [inputValue, setInputValue] = useState('');

    const regexe = fInput.regex;

    const handleOnChange = (e) => {
        setInputValue(e.target.value)
        if (e.target.value.trim().length < 1) {
            updateError(fInput, `Please Enter  ${fInput.name}`);
        } else if (!regexe.test(e.target.value)) {
            updateError(fInput, `Invalid ${fInput.name}`);
        } else {
            updateError(fInput, '');

        }

    }

    return (
        <div className='Form-field-container'>
            <div className='Form-field-input-name'>{fInput.name}</div>
            <div className='Form-field-input-box'><input type={fInput.type} name={fInput.name} value={inputValue} onChange={(e) => { handleOnChange(e) }} /></div>
            {fInput.error && fInput.error != 'x' ? <div className='Form-field-input-error'>{fInput.error}</div> : <></>}
        </div>
    )
}

export default FormInput