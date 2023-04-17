import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { deleteData } from '../axios/animal'
import {deleteDataF} from '../axios/food'

const ButtonGroup = (props) => {
    const navigate = useNavigate()
    const isAnimal = props.isAnimal
    const deleteHandler = (id) => {
        deleteData(id)
        navigate('/animals')
    }
    const deleteHandlerF = (id) => {
        deleteDataF(id)
        navigate('/foods')
    }
        
    
    return (
        <>
            <div className="flex items-center justify-between">
                <Link to={`edit/${props.id}`} aria-current="page" className="w-1/2 px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ">
                    Edit
                </Link>
                {isAnimal? (<>
                
                    <button onClick={() => deleteHandler(props.id)} className="w-1/2 px-4 py-2 text-sm font-medium text-red-400 bg-white border-t border-b border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ">
                    Delete
                </button>

                </>) : (<>
                
                    <button onClick={() => deleteHandlerF(props.id)} className="w-1/2 px-4 py-2 text-sm font-medium text-red-400 bg-white border-t border-b border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ">
                    Delete
                </button>
                
                </>)}
                
            </div>
        </>
    )
}

export default ButtonGroup