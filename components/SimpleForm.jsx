'use client'
import React, { useState } from 'react'
import FormInput from './FormInput'

const fInputs = [{
    id: 1,
    type: 'text',
    name: 'name',
    regex: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
    error: 'x'
}, {
    id: 2,
    type: 'email',
    name: 'email',
    regex: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    error: 'x'
}, {
    id: 3,
    type: 'password',
    name: 'password',
    regex: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    error: 'x'
}]



const SimpleForm = () => {
    const [InputFieldData, setInputFieldData] = useState(fInputs);
    const [formIsSubmtted, setFormIsSubmtted] = useState(false);

    const updateError = (inputItem, message) => {
        const index = InputFieldData.indexOf(inputItem);
        const updatedItem = { ...inputItem, error: message };
        setInputFieldData((prev) => {
            const temp = [...prev]
            temp.splice(index, 1, updatedItem);
            return temp;
        })
    }

    const handleSubmit = () => {
        InputFieldData.map((item) => {
            if (item.error === 'x') {
                updateError(item, `Please Enter  ${item.name}`)
            }
        })
        const newArr = InputFieldData.filter((item) => item.error.length > 0);
        if (newArr.length == 0) {
            setFormIsSubmtted(true);
        }
    }

    if (formIsSubmtted) {
        return (
            <div className='SimpleForm'>
                <h1>Your Form Is Submitted</h1>
            </div>
        )
    }
    return (
        <div className='SimpleForm'>
            <div className='Form-fields'>
                {InputFieldData.map((item, index) => (<FormInput key={index} fInput={item} updateError={updateError} />))}
            </div>
            <button className='btn btn-blue' onClick={() => { handleSubmit() }}>Submit</button>
        </div>
    )
}

export default SimpleForm