import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";

import Profile from '../Profile'
import logoOri from '../../assets/zoo feed-01.png'
import Button from '../elements/button';
import NavItem from '../elements/navitem';
import Overlay from '../../components/elements/overlay'
import { setnavbar, setmodalsignin } from '../../redux/menuSlice';

const Navbar = () => {
    const dispatch = useDispatch()
    const { links, isNavbarOpen } = useSelector((state) => state.menu)
    const { isLogin } = useSelector((state) => state.auth)

    const signInHandler = () => {
        dispatch(setnavbar(false))
        dispatch(setmodalsignin(true))
    }

    useEffect(() => {
        if (isNavbarOpen) {
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [isNavbarOpen])

    return (
        <>
            <header className={`z-20 w-full sticky top-0 flex items-center justify-between transition-all duration-500 shadow-md bg-white max-w-screen-2xl mx-auto py-4 px-3 md:px-10 lg:py-5 xl:py-7 `}>
                <div
                    onClick={() => dispatch(setnavbar(!isNavbarOpen))}
                    className='text-3xl flex items-center cursor-pointer md:hidden'
                >
                    <ion-icon name={isNavbarOpen ? 'close' : 'menu'} style={{ color: '#019267' }} />
                </div>
                <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                    <NavLink to={'/'}>
                        <img src={logoOri} alt="Logo" className='w-16' />
                    </NavLink>
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
                        {links.map((link, i) => (
                            <NavItem key={i} link={link} onClick={() => dispatch(setnavbar(false))} />
                        ))}
                    </ul>
                    <div className='max-md:mt-5 flex md:flex-row-reverse items-center'>
                        {
                            isLogin
                                ? <div className='static max-md:hidden'>
                                    <Profile />
                                </div>
                                : <Button isBorder={true} onClick={signInHandler} >Login</Button>
                        }
                        <Button isBorder={true} className={`md:mr-3 ${!isLogin && 'ml-3'}`} >Ticket</Button>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar