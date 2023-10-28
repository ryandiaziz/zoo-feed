import React from 'react'

import Loading from './Loading'
import Logo from '../assets/zoo feed-01.png'

const LoadingScreen = () => {
    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center space-y-5'>
            <img src={Logo} alt="Zoofeed Logo" className='w-32' />
            <Loading />
        </div>
    )
}

export default LoadingScreen