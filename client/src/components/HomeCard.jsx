import React from 'react'

const HomeCard = ({ title, content, image, imgDesc }) => {
    return (
        <article className='flex gap-5 max-sm:flex-col'>
            <div className=' sm:w-1/3 lg:w-1/2'>
                <img src={image} alt={imgDesc} className='w-full rounded-lg' />
            </div>
            <div className='sm:w-2/3 lg:w-1/2'>
                <h1 className='font-bold sm:text-2xl lg:text-4xl'>{title}</h1>
                <p className='text-sm sm:text-base lg:text-xl'>{content}</p>
            </div>
        </article>
    )
}

export default HomeCard