'use client'
import React, { useEffect, useState } from 'react'

const useLocalTheme = (key, defauctValue) => {
    const [value, setValue] = useState(() => {
        let currentValue
        try {
            if (typeof window !== 'undefined') {

                console.log('sd', localStorage.getItem(key));
                currentValue = localStorage.getItem(key) || String(defauctValue);
                console.log('currentValue', currentValue);
            } else {
                currentValue = String(defauctValue);
            }

        } catch (error) {
            console.log(error);
            currentValue = String(defauctValue);
        }
        return currentValue
    })
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(key, value)
        }
    }, [value])

    return [value, setValue]
}

export default useLocalTheme