import React from 'react'

const Button = (props) => {
    return (
        <button onClick={props.onClick} className={`${props.className} py-2 px-4 rounded-md font-bold`}>
            {props.children}
        </button>
    )
}

export default Button