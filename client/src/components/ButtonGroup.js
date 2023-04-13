import React from 'react'
import { Link } from 'react-router-dom'

const ButtonGroup = () => {
    return (
        <>
            <div className="flex w-full bg-red-300">
                <Link to="#" aria-current="page" className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ">
                    Edit
                </Link>
                <Link to="#" className="px-4 py-2 text-sm font-medium text-red-400 bg-white border-t border-b border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ">
                    Delete
                </Link>
            </div>
        </>
    )
}

export default ButtonGroup