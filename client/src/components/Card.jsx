import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { FaPlusCircle } from 'react-icons/fa'
import ButtonGroup from './ButtonGroup'
import { userLike, userUnlike } from '../axios/animalUser'

const Card = (props) => {
    const { userData, loginStatus, items, likeData, search, setClick, click } = props
    const isAnimal = props.isAnimal || false;

    const likeAnimal = (id) => {
        setClick(!click)
        userLike(id)
    }
    const unlikeAnimal = id => {
        setClick(!click)
        userUnlike(id);
    }
    return (
        items.filter((item) => {
            return search.toLowerCase() === ''
                ? item
                : item.name.toLowerCase().includes(search);
        })
            .map(item => {
                return (
                    <div key={item.id} className="flex-grow rounded-md hover:shadow-xl overflow-hidden bg-white w-[140px] max-w-[180px] h-[150px] sm:w-[200px] sm:mx-w-[250px] sm:h-[200px] md:w-[300px] md:max-w-[350px] md:h-[300px]  hover:bg-slate-100 relative">
                        {/* <Link to={`detail/${item.id}`}> */}
                        <img
                            src={`https://zoofeed-api-gamma.vercel.app/${item.imageUrl}`}
                            alt="Animal"
                            className='h-full w-full object-cover object-top hover:scale-110 transition-all duration-300'
                        />
                        <div className='absolute bottom-0'>
                            <div className='font-noto font-bold text-sm sm:text-xl mb-2 ml-2 text-white drop-shadow-lg '>{item.name}</div>
                        </div>
                        {/* </Link> */}
                    </div>
                )
            })
    )
}

export default Card
