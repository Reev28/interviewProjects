'use client'
import useLocalTheme from '@/customHooks/useLocalTheme'
import React, { useEffect, useState } from 'react'

const Theme = () => {
    const [theme, setTheme] = useLocalTheme('theme', 'light')

    const handleThemeChange = () => {
        setTheme(theme == 'light' ? 'dark' : 'light');
    }
    return (
        <div id="body-copy" data-theme={theme} >
            <p>Hello World!</p>
            <button className='btn btn-blue' onClick={handleThemeChange} >{theme}</button>
        </div>
    )
}

export default Theme