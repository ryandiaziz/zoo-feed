import React from 'react'
import { Link } from 'react-router-dom'
import Profile from './Profile'

const Navbar = (props) => {
    const { loginStatus, loginCbHandler, userData } = props

    return (
        <nav className="flex h-24 w-full items-center justify-between bg-teal-500 p-6 fixed z-10">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link to='/'>
                    <span className="font-noto font-bold text-3xl tracking-tight"> Zoo Feed</span>
                </Link>
            </div>

            <div className="w-full block flex-grow float-left space-x-4 lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link to="/animals" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Animal
                    </Link>
                    <Link to="/foods" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Food
                    </Link>
                    <Link to="/classType" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Class
                    </Link>
                    <Link to="/habitat" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        Habitat
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
        </nav>

    )
}

export default Navbar