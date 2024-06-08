'use client'
import React, { useState } from 'react'
import Modal from './Modal'

const ModalPage = () => {
    const [modalisOpen, setModalisOpen] = useState(false)
    return (
        <div>
            {modalisOpen && <Modal openModal={setModalisOpen} />}

            <button onClick={() => setModalisOpen(true)}>Open Modal</button>
        </div>
    )
}

export default ModalPage