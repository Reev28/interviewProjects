import React from 'react'

const Modal = ({ openModal }) => {
    return (
        <div className='modal'>
            <div className='modal-box'>
                <div className='modal-Header'>
                    <div></div>
                    <h1>My Modal</h1>
                    <button className='modal-close-btn' onClick={() => { console.log('hii'); openModal(false) }}>x</button>
                </div>
                <div className='modal-body'>
                    <p>body ddfsdfdsf dfsdf</p>
                </div>
            </div>

        </div>
    )
}

export default Modal