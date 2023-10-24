import React from 'react'

const Button = ({ className, onClick, children }) => {
    return (
        <button onClick={onClick} className={`${className} py-2 px-4 rounded-md font-bold`}>
            {children}
        </button>
    )
}

export default Button