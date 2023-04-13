import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <>
            {
                props.items.map(item => {
                    return (
                        <Link to={props.link || '/'}>
                            <div className="rounded-md shadow-lg overflow-hidden bg-white w-[300px] hover:scale-95 hover:bg-slate-100 transition-all duration-150">
                                <img src={item.image} alt="Image" className='w-full' />
                                <div className='px-6 py-4'>
                                    <div className='font-bold text-xl mb-2 text-slate-700'>{item.name}</div>
                                    <p className='text-sm text-slate-600'>{item.ket}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </>
    )
}

export default Card