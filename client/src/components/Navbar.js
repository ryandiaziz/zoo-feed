import React from 'react'
import { Link } from 'react-router-dom'
import Profile from './Profile'

const Navbar = (props) => {
    const { loginStatus, loginCbHandler } = props

    return (
        <nav class="flex h-24 items-center justify-between bg-teal-500 p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <Link to='/'>
                    <span class="font-noto font-bold text-3xl tracking-tight"> Zoo Feed</span>
                </Link>
            </div>

            <div class="w-full block flex-grow float-left space-x-4 lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                    <Link to="/animals" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Animal
                    </Link>
                    <Link to="/foods" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Food
                    </Link>
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Class
                    </a>
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        Habitat
                    </a>
                </div>

                <div>

                    {
                        loginStatus ?
                            <Profile loginCbHandler={loginCbHandler} />
                            :
                            <Link to={'/login'} class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login</Link>
                    }
                </div>
            </div>
        </nav>

    )
}

export default Navbar