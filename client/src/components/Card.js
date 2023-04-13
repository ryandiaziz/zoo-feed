import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const Card = (props) => {
    const [like, setLike] = useState(false);

    const isAnimal = props.isAnimal || false;

    const aksi = () => {
        like === false ?
            setLike(true)
            :
            setLike(false)
    }
    return (
        <>
            {
                props.items.map(item => {
                    return (
                        <div className="rounded-md shadow-lg overflow-hidden bg-white w-[300px] hover:scale-95 hover:bg-slate-100 transition-all duration-150 relative">
                            {
                                isAnimal === true ?
                                    <div className='absolute top-3 right-3 cursor-pointer hover:scale-90'>
                                        {
                                            like === false ?
                                                <MdFavoriteBorder size={30} color='gold' onClick={() => aksi()} />
                                                :
                                                <MdFavorite size={30} color='gold' onClick={() => aksi()} />
                                        }
                                    </div>
                                    :
                                    <div></div>
                            }

                            <Link to={props.link || '/'}>
                                <img src={item.image} alt="Image" className='w-full' />
                                <div className='px-6 py-4'>
                                    <div className='font-bold text-xl mb-2 text-slate-700'>{item.name}</div>
                                    <p className='text-sm text-slate-600'> {item.ket}</p>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Card