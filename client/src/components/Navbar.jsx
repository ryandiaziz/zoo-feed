import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Profile from './Profile'
import logoOri from '../assets/zoo feed-01.png'
import logoWhite from '../assets/zoo feed-03.png'

const Navbar = (props) => {
    const {
        loginStatus,
        loginCbHandler,
        userData,
    } = props
    // change nav color when scrolling
    const [color, setColor] = useState(false)
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 80) {
            setColor(true)
        } else {
            setColor(false)
        }
    })

    return (
        <nav className={`${color ? 'bg-white' : 'bg-transparent'} z-20 h-20 fixed w-full`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center flex-shrink-0 text-[#019267] mr-6">
                    <Link to='/' >
                        <img src={color ? logoOri : logoWhite} alt="logo" className='w-16' />
                    </Link>
                </div>

                <div className="w-full block flex-grow float-left space-x-4 lg:flex lg:items-center lg:w-auto ml-5">
                    <div className="text-sm lg:flex-grow">
                        <Link to="/animals" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-[#019267] hover:text-white mr-4 hover:scale-95 transition-all" >
                            animals
                        </Link>
                        <Link to="/foods" className="uppercase block mt-4 lg:inline-block lg:mt-0 text-[#019267] hover:text-white mr-4 hover:scale-95 transition-all" >
                            foods
                        </Link>
                    </div>

                    <div>
                        {
                            loginStatus ?
                                <Profile userData={userData} loginCbHandler={loginCbHandler} />
                                :
                                <Link to={'/signin'} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login</Link>
                        }
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar