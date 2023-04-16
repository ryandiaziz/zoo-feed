import React from 'react'
import { Link } from 'react-router-dom'

const Modal = (props) => {
    return (
        <div className="bg-white fixed flex justify-center items-center shadow-lg">
            <div className="modalContainer">
                <div className="title">
                    <h1>Who are you?</h1>
                </div>
                <div className="flex">
                    <Link to={'../signup/1'}>
                        <button
                            className='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                            onClick={() => {
                                props.modalHandler(false)
                            }}
                            id="cancelBtn"
                        >
                            Visitor
                        </button>
                    </Link>
                    <Link to={'../signup/2'}>
                        <button
                            className='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                            onClick={() => {
                                props.modalHandler(false)
                            }}
                            id="cancelBtn"
                        >Zoo Keeper</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Modal