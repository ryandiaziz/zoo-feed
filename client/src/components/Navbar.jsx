import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";

import Profile from './Profile'
import logoOri from '../assets/zoo feed-01.png'
import { setnavbar } from '../redux/menuSlice';
import Button from './Button'

const Navbar = ({ signInHandler }) => {
    const dispatch = useDispatch()
    const { isNavbarOpen, links } = useSelector((state) => state.menu)
    const { isLogin } = useSelector((state) => state.auth)

    return (
        <header className={`z-20 w-full sticky top-0 flex items-center justify-between transition-all duration-500 shadow-md bg-white max-w-screen-2xl mx-auto py-4 px-3 md:px-10 lg:py-5 xl:py-7 `}>
            <div onClick={() => dispatch(setnavbar())} className='text-3xl flex items-center cursor-pointer md:hidden'>
                <ion-icon name={isNavbarOpen ? 'close' : 'menu'} style={{ color: '#019267' }} />
            </div>
            <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                <Link to={'/'}>
                    <img src={logoOri} alt="Logo" className='w-16' />
                </Link>
            </div>
            <div className='md:hidden w-10 h-10'>
                {
                    isLogin
                        ? <Profile />
                        : <div className='w-8' />
                }
            </div>
            <nav className={`md:flex md:items-center max-md:py-5 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto max-md:px-5 transition-all duration-500 ease-in ${isNavbarOpen ? 'top-20 bg-white' : 'top-[-490px]'}`}>
                <ul className='flex max-md:flex-col max-md:space-y-5'>
                    {
                        links.map((link) => (
                            <li key={link.name} onClick={() => dispatch(setnavbar())} className='text-xl md:mr-5 xl:mr-7'>
                                <Link to={link.link} className={`uppercase font-amatic font-bold text-2xl lg:text-3xl hover:text-gray-400 duration-500 text-z-green`}>{link.name}</Link>
                            </li>
                        ))
                    }
                </ul>
                <div className='max-md:mt-5 flex md:flex-row-reverse items-center'>
                    {
                        isLogin
                            ? <div className='static max-md:hidden'>
                                <Profile />
                            </div>
                            : <Button onClick={signInHandler} className={`border-[1px] transition-all duration-500 text-z-green border-z-green`}>
                                Login
                            </Button>
                    }
                    <Button className={`text-z-green border-z-green border-[1px] transition-all duration-500 md:mr-3 ${!isLogin && 'ml-3'}`}>
                        Ticket
                    </Button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar